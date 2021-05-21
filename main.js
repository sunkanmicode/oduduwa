// https://type.fit/api/quotes
const URL_API = 'https://type.fit/api/quotes';

const para = document.querySelector('.para')
const title = document.querySelector('.title');

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn")
const randonBtn = document.querySelector(".randon-btn")

let currentItem = 0;

// window.addEventListener("DOMContentLoaded",  ()=>{
//     fetchData(currentItem)  
// });

    const fetchData = async() =>{
        const res = await fetch(URL_API);
        const data = await res.json();
        showQuotes(data)
    }
    setInterval(() => {
        fetchData(currentItem)
        
    }, 1000);



const showQuotes = (people)=>{
        const item = people[currentItem];
        para.innerText = item.text
        title.textContent = item.author
    
};
nextBtn.addEventListener('click', ()=>{
    currentItem++
    if(currentItem > URL_API.length -1){
        currentItem = 0;
    }
    fetchData(currentItem)
});
prevBtn.addEventListener('click', ()=>{
    currentItem--
    if(currentItem < 0){
        currentItem = URL_API.length -1;
    }
    fetchData(currentItem)
});
randonBtn.addEventListener('click', ()=>{
    currentItem = Math.floor(Math.random() * URL_API.length)
    console.log(currentItem);
    fetchData();
})

