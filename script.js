let newsOutput = document.querySelector("#news-output");
let btn = document.querySelector("button");
let url = 'https://newsapi.org/v2/everything?q=kdrama&sortBy=popularity&apiKey=d0a48068b9de468aadfab2abafbd883d';

btn.addEventListener("click", getNews);

function getNews() {
    fetch(url)
        .then((response) => {
            response.json().then((data) => {
                newsOutput.innerHTML = ''; 
                data.articles.forEach((article) => {
                    let newsItem = `
                        <div class="news-item">
                            <h3>${article.title}</h3>
                            <p>${article.description || 'No description available.'}</p>
                            <a href="${article.url}" target="_blank">Read more</a>
                        </div>
                    `;
                    newsOutput.innerHTML += newsItem;
                });
                console.log(data.articles);
            });
        })
        .catch((error) => {
            console.error('Error fetching news:', error);
            newsOutput.innerText = 'Failed to load news. Please try again later.';
        });
}
