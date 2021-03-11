console.log("This is my index js file");

// Initialize the news api parameters
let source = 'the-times-of-india';
let apiKey = '075511690a2f4c0cae86ec4caa86a68e'

// Grab the news container
let newsAccordion = document.getElementById('newsAccordion');

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// What to do when response is ready
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);
        let newsHtml = "";
        articles.forEach(function (element, index) {
            // console.log(element, index)
            let news = `<div class="card mb-3" style="max-width: 1500px;">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img src="${element["urlToImage"]}" class="card-img" alt="News image">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title"><b>Breaking News${index + 1}:</b> ${element["title"]}</h5>
                  <p class="card-text">${element["description"]}</p>
                  <a href="${element["url"]}" class="btn btn-primary">Read more</a>
                  <p class="card-text"><small class="text-muted">Last updated ${element["publishedAt"]}</small></p>
                </div>
              </div>
            </div>
          </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Some error occured")
    }
}

xhr.send()


