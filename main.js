


//Oduduwa Anthem
const anthemBtn = document.querySelector('.btn-anthem');
const anthem = document.querySelector('.anthem');

anthemBtn.addEventListener('click', ()=>{
    if(anthem.paused){
        anthem.play();
    }else{
        anthem.pause();
    }
})





//showing quotes
let URL_API = 'https://type.fit/api/quotes';
const paraQuote = document.querySelector('.para-quote');
const title = document.querySelector('.title');

window.addEventListener("DOMContentLoaded", ()=>{
    setInterval(()=>{
       const fetchData = async() =>{
           let randomNumber = Math.floor(Math.random() * 1643);
           console.log(randomNumber);
                   const res = await fetch(URL_API);
                   const data = await res.json();
                //    console.log(data[randomNumber]);
                   showHistory(data[randomNumber])
       }
       fetchData();
    }, 5000)
});

const history = [
    {
        title: 'Oduduwa History',
        desc: 'As of the 7th century BCE the African peoples who lived in Yorubaland were not initially known as the Yoruba, although they shared a common ethnicity and language group. By the 8th century, a powerful kingdom already existed in Ile-Ife, one of the earliest in Africa. It is said to be Ile-gbo (capital of the realm of humanity, based on the oldest predynastic traditions of its being associated with Oba Tala, Oro-gbo (Shango) and Otete (Oduduwa) .'
    },
    {
        title: 'Oduduwa History cont..',
        desc:'The historical Yoruba develop in situ, out of earlier Mesolithic Volta-Niger populations, by the 1st millennium BCE. Oral history recorded under the Oyo Empire derives the Yoruba as an ethnic group from the population of the older kingdom of Ile-Ife. The Yoruba were the dominant cultural force in southern and Northern, Eastern Nigeria as far back as the 11th century.'
    },
    {
        title: 'Oduduwa History cont...',
        desc: 'The Yoruba are among the most urbanized people in Africa. For centuries before the arrival of the British colonial administration most Yoruba already lived in well structured urban centres organized around powerful city-states (??l??) centred around the residence of the Oba. In ancient times, most of these cities were fortresses, with high walls and gates. Yoruba cities have always been among the most populous in Africa. '
    },
    {
        title: 'Oduduwa History cont...',
        desc:'Archaeological findings indicate that ??y??-Il?? or Katunga, capital of the Yoruba empire of Oyo (fl. between the 11th and 19th centuries CE), had a population of over 100,000 people. For a long time also, Ibadan, one of the major Yoruba cities and founded in the 1800s, was the largest city in the whole of Sub Saharan Africa. Today, Lagos (Yoruba: ??k??), another major Yoruba city, with a population of over twenty million, remains the largest on the African continent.'
    },
    {
        title: 'Oduduwa History cont...',
        desc:'Archaeologically, the settlement of Ile-Ife showed features of urbanism in the 12th???14th century era. In the period around 1300 CE the artists at Ile-Ife developed a refined and naturalistic sculptural tradition in terracotta, stone and copper alloy ??? copper, brass, and bronze many of which appear to have been created under the patronage of King Obalufon II, the man who today is identified as the Yoruba patron deity of brass casting, weaving and regalia. '
    },
    {
        title: 'Oduduwa History cont...',
        desc:'The dynasty of kings at Ile-Ife, which is regarded by the Yoruba as the place of origin of human civilization, remains intact to this day. The urban phase of Ile-Ife before the rise of Oyo, c. 1100???1600, a significant peak of political centralization in the 12th century,[39][40] is commonly described as a "golden age" of Ile-Ife. The oba or ruler of Ile-Ife is referred to as the Ooni of Ife.'
    },
    {
        title:'Oduduwa History ends ...',
        desc: 'learn more from Wikilead ...'
    }
];

const map =[
    {
        img: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.nairaland.com%2F3872236%2Foduduwa-republic-map-currencies-glance&psig=AOvVaw2CtQanVYx2Hh1eGLbXapW0&ust=1621971520724000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj1_KXy2_ACFQAAAAAdAAAAABAD'
    },
    {
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FYorubaland&psig=AOvVaw2CtQanVYx2Hh1eGLbXapW0&ust=1621971520724000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj1_KXy2_ACFQAAAAAdAAAAABAM'
    },
    {
        img:'https://www.google.com/url?sa=i&url=https%3A%2F%2Ffacesinternationalmagazine.org.ng%2F%3Fp%3D181053&psig=AOvVaw2CtQanVYx2Hh1eGLbXapW0&ust=1621971520724000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKj1_KXy2_ACFQAAAAAdAAAAABAS'
    }
];


const heading = document.querySelector('.heading');
const para = document.querySelector('.para');

//next and prev btn
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

const displayCol = document.querySelector('.right-col');
const btns = document.querySelectorAll('.btn');
const showCard = document.querySelectorAll('.card');

displayCol.addEventListener('click', (e)=>{
    const id = e.target.dataset.id;
    if(id){
        btns.forEach((btn)=>{
            btn.classList.remove("active");
            e.target.classList.add("active")
        });
        showCard.forEach((card)=>{
            card.classList.remove('active');
        });
        const ele = document.getElementById(id);
        ele.classList.add('active')
    }
})



let currentValue = 0;



const showHistory = (data)=>{
    const historyItem = history[currentValue];
    heading.innerHTML = historyItem.title;
    para.innerHTML = historyItem.desc;

        // show quotes
       paraQuote.textContent = data.text;
       title.innerHTML = data.author;  
}
// showHistory();


    //next buttton
     nextBtn.addEventListener('click', ()=>{
        currentValue++
        if(currentValue > history.length -1){
            currentValue = 0; 
        }
        showHistory()
    });
    //prev buttons
    prevBtn.addEventListener('click', ()=>{
        currentValue--
        if(currentValue < 0){
            currentValue = history.length -1;
        }
        showHistory()

    });
showHistory();

   
