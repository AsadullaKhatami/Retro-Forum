// console.log("hello word");

const menuBar = document.querySelector('#menuBar');
const bar = document.querySelector('#bar');
const openNav = document.getElementById('open-nav');
const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
const url2 = 'https://openapi.programming-hero.com/api/retro-forum/posts';
const post = document.getElementById("latest-post");

// backend api link latest posts
async function loadLatestPostData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        latestPost(data);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

// backend api link posts 
async function loadPostData(url) {
    try {
        let response = await fetch(url);
        let data = await response.json();
        discussPost(data);
    } catch (err) {
        console.error("Error fetching data:", err);
    }
}

// latest post 

function latestPost(data) {
    for (let value of data) {

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

function discussPost(data) {

    for (let value of data.posts) {
        console.log(value);

        let div = document.createElement('div');
        div.innerHTML = `
                <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl m-3">
                    <div class="md:flex">
                        <div class="md:flex-shrink-0 relative">
                            <img class="h-48 w-full object-cover md:w-48"
                                src="${value.image}" alt="Card image">
                            ${value.isActive?"<span class='absolute top-2 left-2 block h-3 w-3 rounded-full ring-2 ring-white bg-red-500'></span>":""}
                        </div>
                        <div class="p-8">
                            <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold"># ${value.category} <span
                                    class="text-gray-400">|</span> Author : ${value.author.name}</div>
                            <a href="#"
                                class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">${value.title}</a>
                            <p class="mt-2 text-gray-500">${value.description}</p>
                            <div class="mt-4 border-t border-gray-200 pt-4 flex items-center justify-between">
                                <div class="flex items-center space-x-4 text-gray-400">
                                    <div class="flex items-center">
                                        <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z">
                                            </path>
                                        </svg>
                                        <span>${value.comment_count}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z">
                                            </path>
                                        </svg>
                                        <span>${value.view_count}</span>
                                    </div>
                                    <div class="flex items-center">
                                        <svg class="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                        </svg>
                                        <span>${value.posted_time} min</span>
                                    </div>
                                </div>
                                <button
                                    class="flex items-center p-2 rounded-full bg-green-100 text-green-600 hover:bg-green-200 focus:outline-none focus:ring-2 focus:ring-green-300">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-2 4v7a2 2 0 01-2 2H5a2 2 0 01-2-2v-7">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
        `;

        document.getElementById('artical').appendChild(div);
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

loadPostData(url2);
loadLatestPostData(url);
