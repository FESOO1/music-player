const musicPlayerListContainer = document.querySelector('.music-player-music-list-container');
const musicPlayer = document.querySelector('.music-player');
const musicPlayerControlButton = document.querySelectorAll('.music-player-control');
const prevMusicButton = document.getElementById('prevMusicButton');
const nextMusicButton = document.getElementById('nextMusicButton');
const pauseMusicButton = document.getElementById('pauseMusicButton');
const playMusicButton = document.getElementById('playMusicButton');
const musicData = [
    {
        musicItself: './assets/music/music-1.m4a',
        musicName: 'Music One',
        authorName: 'Author One'
    },
    {
        musicItself: './assets/music/music-2.mp3',
        musicName: 'Music Two',
        authorName: 'Author Two'
    },
    {
        musicItself: './assets/music/music-3.mp3',
        musicName: 'Music Three',
        authorName: 'Author Three'
    },
    {
        musicItself: './assets/music/music-4.mp3',
        musicName: 'Music Four',
        authorName: 'Author Four'
    }
];
let musicCounter = 0;

// MUSIC PLAYER CONTROLS

window.addEventListener('click', () => {
    for (const musicPlayerControlButtons of musicPlayerControlButton) {
        musicPlayerControlButtons.classList.remove('music-player-control-active');
    };
});

/* for (let i = 0; i < musicPlayerControlButton.length; i++) {
    musicPlayerControlButton[i].addEventListener('click', e => {
        e.stopImmediatePropagation();

        for (const musicPlayerControlButtons of musicPlayerControlButton) {
            musicPlayerControlButtons.classList.remove('music-player-control-active');
        };
        musicPlayerControlButton[i].classList.add('music-player-control-active');
    });
}; */

playMusicButton.addEventListener('click', () => {
    musicPlayer.src = musicData[musicCounter].musicItself;
    musicPlayer.play();
});

pauseMusicButton.addEventListener('click', () => {
    musicPlayer.src = musicData[musicCounter].musicItself;
    musicPlayer.pause();
});

// DISPLAYING DATA

window.addEventListener('DOMContentLoaded', displayMusicData);

function displayMusicData() {
    for (let i = 0; i < 4; i++) {
        musicPlayerListContainer.innerHTML += `
            <li class="music-player-music-itself">
                <button class="music-player-music-itself-button" onclick="playSongButton()">
                    <h4 class="music-player-music-itself-name">${musicData[i].musicName}</h4>
                    <h6 class="music-player-music-itself-author-name">${musicData[i].authorName}</h6>
                </button>
                <button class="music-player-music-itself-remove-button">
                    <svg class="music-player-music-itself-remove-button-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000" fill="none">
                        <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
            </li>
        `;

        musicPlayerListContainer.firstElementChild.classList.add('music-player-music-itself-active');

        // SING A SONG BUTTON
        const musicContainerItself = document.querySelectorAll('.music-player-music-itself');
        const musicItselfPlayButton = document.querySelectorAll('.music-player-music-itself-button');
        for (let i = 0; i < musicItselfPlayButton.length; i++) {
            musicItselfPlayButton[i].addEventListener('click', () => {
                for (const musicContainerItselfs of musicContainerItself) {
                    musicContainerItselfs.classList.remove('music-player-music-itself-active');
                };
                musicContainerItself[i].classList.add('music-player-music-itself-active');

                // PLAY A SONG
                musicPlayer.src = musicData[i].musicItself;
                musicPlayer.play();
            });
        };

        // NEXT MUSIC BUTTON
        nextMusicButton.addEventListener('click', () => {
            musicContainerItself[musicCounter].classList.remove('music-player-music-itself-active');
            musicCounter++;
            musicContainerItself[musicCounter].classList.add('music-player-music-itself-active');
        });
    };
};