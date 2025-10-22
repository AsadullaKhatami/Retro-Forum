// console.log("hello word");

const menuBar = document.querySelector('#menuBar');
const bar = document.querySelector('#bar');
const openNav = document.getElementById('open-nav');
const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
const post = document.getElementById("latest-post");

// backend api link latest posts
async function loadData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        latestPost(data);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

// latest post 
// const latestPost = fetchData('https://openapi.programming-hero.com/api/retro-forum/latest-posts');

function latestPost(data) {
    for (let value of data) {
        console.log(value);

        let div = document.createElement('div');
        div.innerHTML = `
                <img src="${value.cover_image}" alt="">
                <div class="flex items-center text-gray-500 text-sm mt-6 mb-3">
                    <img src="https://img.icons8.com/?size=24&id=84997&format=png&color=000000" alt="">
                    <span>${value.author.posted_date ? value.author.posted_date : 'Unknown'}</span>
                </div>

                <h2 class="text-xl font-semibold text-gray-900 mb-3">${value.title}</h2>

                <p class="text-gray-600 text-sm mb-4">${value.description}</p>

                <div class="flex items-center">
                    <img class="h-10 w-10 rounded-full object-cover mr-3"
                        src="${value.profile_image}" alt="Cameron Williamson">
                    <div>
                        <p class="font-medium text-gray-900">${value.author.name}</p>
                        <p class="text-sm text-gray-500">
                            ${value.author.designation ? value.author.designation : 'Unknown'}
                        </p>
                    </div>
                </div>
    `;

    div.classList.add('bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden', 'max-w-sm', 'w-full', 'p-6');

    post.appendChild(div);

    }

}



// console.log(latestPost)

menuBar.addEventListener('click', () => {

    if (openNav.style.display === 'flex') {
        openNav.style.display = 'none';
    } else {
        openNav.style.display = 'flex';
    }
});

loadData(url);