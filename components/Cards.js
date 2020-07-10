// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.
axios
.get('https://lambda-times-backend.herokuapp.com/articles')
.then(res => {
    const mainArray = [res.data.articles.bootstrap,
        res.data.articles.javascript,
        res.data.articles.jquery,
        res.data.articles.node,
        res.data.articles.technology]
    mainArray.forEach(array => {
        array.forEach(ele => {
            articleStuff(ele)
        })
    })    
})
.catch(error => {
    console.log(error);
})
let articleStuff = (obj) => {
    const div1 = document.createElement('div');
    const div2 = document.createElement('div');
    const div3 = document.createElement('div');
    const div4 = document.createElement('div');
    const div5 = document.createElement('img');
    const div6 = document.createElement('span');

    div1.classList.add('card');
    div2.classList.add('headline');
    div3.classList.add('author');
    div4.classList.add('img-container');
    div5.setAttribute('src', obj.authorPhoto);

    div2.textContent = obj.headline;
    div6.textContent = `By ${obj.authorName}`;

    div1.appendChild(div2);
    div1.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(div5);
    div3.appendChild(div6);

    div1.addEventListener('click', () =>{
    
    console.log(obj.headline)
})
const divCard = document.querySelector('.cards-container')
divCard.appendChild(div1) 
}