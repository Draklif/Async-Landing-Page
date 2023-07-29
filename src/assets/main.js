const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCTDWASrT-T6wMBcZU4IXCKQ&part=snippet%2Cid&order=date&maxResults=50';

const content = null || document.getElementById('content');

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
        'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
    }
};

async function fetchData(url) {
    return (await fetch(url, options)).json()
}

(async () => {
    try {
        const videos = await fetchData(API);
        let view = `${videos.items.map(video => `
            <a href="https://youtube.com/watch?v=${video.id.videoId}" target="_blank">
                <div class="group relative">
                    <div
                        class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                        <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                    </div>
                    <div class="mt-4 flex justify-between">
                        <h3 class="text-sm text-gray-700">
                            <span aria-hidden="true" class="absolute inset-0"></span>
                            <p class="dark:text-slate-400">${video.snippet.title}</p>
                        </h3>
                    </div>
                </div>
            </a>
        `).slice(0, 4).join('')}`
        content.innerHTML = view
    } catch (error) {
        console.log(error);
    }
})();