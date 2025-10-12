// console.log("hello word");

const menuBar = document.querySelector('#menuBar');
const bar = document.querySelector('#bar');
const openNav = document.getElementById('open-nav');
const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts'

// backend api link latest posts
async function loadData(url){
    try{
        let response = await fetch(url);
        let data = await response.json();
        latestPost(data);
    }catch(err){
        console.error("Error fetching data:", err);
    }
}

// latest post 
// const latestPost = fetchData('https://openapi.programming-hero.com/api/retro-forum/latest-posts');

function latestPost(data) {
    console.log(data[0].author.name);
}


// console.log(latestPost)

menuBar.addEventListener('click', () => {

    if (openNav.style.display === 'flex') {
        openNav.style.display = 'none';
    }else{
        openNav.style.display = 'flex';
    }
});

loadData(url);