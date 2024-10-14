const brawlers = [
    { name: '8-Bit', img: 'https://media.brawltime.ninja/brawlers/8-bit/model.webp?size=400', usageRank: 1, loveRank: 5, hateRank: 7, winRate: 60, difficulty: 'Medium' },
    { name: 'El Primo', img: 'https://media.brawltime.ninja/brawlers/el_primo/model.webp?size=400', usageRank: 4, loveRank: 2, hateRank: 8, winRate: 70, difficulty: 'Easy' },
    { name: 'Poco', img: 'https://media.brawltime.ninja/brawlers/poco/model.webp?size=400', usageRank: 2, loveRank: 3, hateRank: 6, winRate: 65, difficulty: 'Easy' },
    { name: 'Spike', img: 'https://media.brawltime.ninja/brawlers/spike/model.webp?size=400', usageRank: 5, loveRank: 1, hateRank: 9, winRate: 55, difficulty: 'Hard' },
    { name: 'Shelly', img: 'https://media.brawltime.ninja/brawlers/shelly/model.webp?size=400', usageRank: 3, loveRank: 6, hateRank: 5, winRate: 62, difficulty: 'Easy' },
    { name: 'Crow', img: 'https://media.brawltime.ninja/brawlers/crow/model.webp?size=400', usageRank: 6, loveRank: 7, hateRank: 3, winRate: 52, difficulty: 'Hard' },
    { name: 'Leon', img: 'https://media.brawltime.ninja/brawlers/leon/model.webp?size=400', usageRank: 7, loveRank: 8, hateRank: 4, winRate: 58, difficulty: 'Medium' },
    { name: 'Colt', img: 'https://media.brawltime.ninja/brawlers/colt/model.webp?size=400', usageRank: 8, loveRank: 4, hateRank: 6, winRate: 63, difficulty: 'Medium' },
    { name: 'Jessie', img: 'https://media.brawltime.ninja/brawlers/jessie/model.webp?size=400', usageRank: 9, loveRank: 9, hateRank: 10, winRate: 56, difficulty: 'Medium' },
    { name: 'Darryl', img: 'https://media.brawltime.ninja/brawlers/darryl/model.webp?size=400', usageRank: 10, loveRank: 10, hateRank: 11, winRate: 57, difficulty: 'Hard' },
    { name: 'Barley', img: 'https://media.brawltime.ninja/brawlers/barley/model.webp?size=400', usageRank: 11, loveRank: 11, hateRank: 12, winRate: 53, difficulty: 'Easy' },
    { name: 'Bo', img: 'https://media.brawltime.ninja/brawlers/bo/model.webp?size=400', usageRank: 12, loveRank: 12, hateRank: 13, winRate: 61, difficulty: 'Medium' },
    { name: 'Brock', img: 'https://media.brawltime.ninja/brawlers/brock/model.webp?size=400', usageRank: 13, loveRank: 13, hateRank: 14, winRate: 50, difficulty: 'Hard' },
    { name: 'Bull', img: 'https://media.brawltime.ninja/brawlers/bull/model.webp?size=400', usageRank: 14, loveRank: 14, hateRank: 15, winRate: 59, difficulty: 'Easy' },
    { name: 'Byron', img: 'https://media.brawltime.ninja/brawlers/byron/model.webp?size=400', usageRank: 15, loveRank: 15, hateRank: 16, winRate: 54, difficulty: 'Medium' },
    { name: 'Carl', img: 'https://media.brawltime.ninja/brawlers/carl/model.webp?size=400', usageRank: 16, loveRank: 16, hateRank: 17, winRate: 62, difficulty: 'Medium' },
    { name: 'Colette', img: 'https://media.brawltime.ninja/brawlers/colette/model.webp?size=400', usageRank: 17, loveRank: 17, hateRank: 18, winRate: 51, difficulty: 'Hard' },
    { name: 'Edgar', img: 'https://media.brawltime.ninja/brawlers/edgar/model.webp?size=400', usageRank: 18, loveRank: 18, hateRank: 19, winRate: 64, difficulty: 'Easy' },
    { name: 'Emz', img: 'https://media.brawltime.ninja/brawlers/emz/model.webp?size=400', usageRank: 19, loveRank: 19, hateRank: 20, winRate: 60, difficulty: 'Medium' },
    { name: 'Frank', img: 'https://media.brawltime.ninja/brawlers/frank/model.webp?size=400', usageRank: 20, loveRank: 20, hateRank: 21, winRate: 57, difficulty: 'Hard' },
    { name: 'Gale', img: 'https://media.brawltime.ninja/brawlers/gale/model.webp?size=400', usageRank: 21, loveRank: 21, hateRank: 22, winRate: 58, difficulty: 'Hard' },
    { name: 'Jacky', img: 'https://media.brawltime.ninja/brawlers/jacky/model.webp?size=400', usageRank: 22, loveRank: 22, hateRank: 23, winRate: 59, difficulty: 'Easy' },
    { name: 'Max', img: 'https://media.brawltime.ninja/brawlers/max/model.webp?size=400', usageRank: 23, loveRank: 23, hateRank: 24, winRate: 60, difficulty: 'Medium' },
    { name: 'Mortis', img: 'https://media.brawltime.ninja/brawlers/mortis/model.webp?size=400', usageRank: 24, loveRank: 24, hateRank: 25, winRate: 61, difficulty: 'Hard' },
    { name: 'Nita', img: 'https://media.brawltime.ninja/brawlers/nita/model.webp?size=400', usageRank: 25, loveRank: 25, hateRank: 26, winRate: 62, difficulty: 'Easy' },
    { name: 'Piper', img: 'https://media.brawltime.ninja/brawlers/piper/model.webp?size=400', usageRank: 26, loveRank: 26, hateRank: 27, winRate: 63, difficulty: 'Hard' },
    { name: 'Rico', img: 'https://media.brawltime.ninja/brawlers/rico/model.webp?size=400', usageRank: 27, loveRank: 27, hateRank: 28, winRate: 64, difficulty: 'Medium' },
    { name: 'Rosa', img: 'https://media.brawltime.ninja/brawlers/rosa/model.webp?size=400', usageRank: 28, loveRank: 28, hateRank: 29, winRate: 65, difficulty: 'Easy' },
    { name: 'Sandy', img: 'https://media.brawltime.ninja/brawlers/sandy/model.webp?size=400', usageRank: 29, loveRank: 29, hateRank: 30, winRate: 66, difficulty: 'Medium' },
    { name: 'Surge', img: 'https://media.brawltime.ninja/brawlers/surge/model.webp?size=400', usageRank: 30, loveRank: 30, hateRank: 31, winRate: 67, difficulty: 'Hard' },
    { name: 'Tara', img: 'https://media.brawltime.ninja/brawlers/tara/model.webp?size=400', usageRank: 31, loveRank: 31, hateRank: 32, winRate: 68, difficulty: 'Hard' },
    { name: 'Tick', img: 'https://media.brawltime.ninja/brawlers/tick/model.webp?size=400', usageRank: 32, loveRank: 32, hateRank: 33, winRate: 69, difficulty: 'Medium' },
    { name: 'Lou', img: 'https://media.brawltime.ninja/brawlers/lou/model.webp?size=400', usageRank: 33, loveRank: 33, hateRank: 34, winRate: 70, difficulty: 'Easy' },
    
    // Remaining Brawlers without images:
    { name: 'Amber', img: 'https://media.brawltime.ninja/brawlers/amber/model.webp?size=400', usageRank: 34, loveRank: 34, hateRank: 35, winRate: 71, difficulty: 'Medium' },
    { name: 'Bibi', img: 'https://media.brawltime.ninja/brawlers/bibi/model.webp?size=400', usageRank: 35, loveRank: 35, hateRank: 36, winRate: 72, difficulty: 'Easy' },
    { name: 'Belle', img: 'https://media.brawltime.ninja/brawlers/belle/model.webp?size=400', usageRank: 36, loveRank: 36, hateRank: 37, winRate: 73, difficulty: 'Hard' },
    { name: 'Buzz', img: 'https://media.brawltime.ninja/brawlers/buzz/model.webp?size=400', usageRank: 37, loveRank: 37, hateRank: 38, winRate: 74, difficulty: 'Medium' },
    { name: 'Chester', img: 'https://media.brawltime.ninja/brawlers/chester/model.webp?size=400', usageRank: 38, loveRank: 38, hateRank: 39, winRate: 75, difficulty: 'Hard' },
    { name: 'Fang', img: 'https://media.brawltime.ninja/brawlers/fang/model.webp?size=400', usageRank: 39, loveRank: 39, hateRank: 40, winRate: 76, difficulty: 'Easy' },
    { name: 'Griff', img: 'https://media.brawltime.ninja/brawlers/griff/model.webp?size=400', usageRank: 40, loveRank: 40, hateRank: 41, winRate: 77, difficulty: 'Medium' },
    { name: 'Grom', img: 'https://media.brawltime.ninja/brawlers/grom/model.webp?size=400', usageRank: 41, loveRank: 41, hateRank: 42, winRate: 78, difficulty: 'Hard' },
    { name: 'Janet', img: 'https://media.brawltime.ninja/brawlers/janet/model.webp?size=400', usageRank: 42, loveRank: 42, hateRank: 43, winRate: 79, difficulty: 'Medium' },
    { name: 'Kenji', img: 'https://media.brawltime.ninja/brawlers/kenji/model.webp?size=400', usageRank: 43, loveRank: 43, hateRank: 44, winRate: 80, difficulty: 'Easy' },
    { name: 'Kit', img: 'https://media.brawltime.ninja/brawlers/kit/model.webp?size=400', usageRank: 44, loveRank: 44, hateRank: 45, winRate: 81, difficulty: 'Hard' },
    { name: 'Larry & Lawrie',img:'https://media.brawltime.ninja/brawlers/larry___lawrie/model.webp?size=400', usageRank: 45, loveRank: 45, hateRank: 46, winRate: 82, difficulty: 'Medium' },
    { name: 'Lily', img: 'https://media.brawltime.ninja/brawlers/lily/model.webp?size=400', usageRank: 46, loveRank: 46, hateRank: 47, winRate: 83, difficulty: 'Hard' },
    { name: 'Lola', img: 'https://media.brawltime.ninja/brawlers/lola/model.webp?size=400', usageRank: 47, loveRank: 47, hateRank: 48, winRate: 84, difficulty: 'Medium' },
    { name: 'Meg', img: 'https://media.brawltime.ninja/brawlers/meg/model.webp?size=400', usageRank: 48, loveRank: 48, hateRank: 49, winRate: 85, difficulty: 'Hard' },
    { name: 'Otis', img: 'https://media.brawltime.ninja/brawlers/otis/model.webp?size=400', usageRank: 49, loveRank: 49, hateRank: 50, winRate: 86, difficulty: 'Medium' },
    { name: 'Ruffs', img: 'https://media.brawltime.ninja/brawlers/ruffs/model.webp?size=400', usageRank: 50, loveRank: 50, hateRank: 51, winRate: 87, difficulty: 'Easy' },
    { name: 'Sam', img: 'https://media.brawltime.ninja/brawlers/sam/model.webp?size=400', usageRank: 51, loveRank: 51, hateRank: 52, winRate: 88, difficulty: 'Hard' },
    { name: 'Squeak', img: 'https://media.brawltime.ninja/brawlers/squeak/model.webp?size=400', usageRank: 52, loveRank: 52, hateRank: 53, winRate: 89, difficulty: 'Medium' },
    { name: 'Stu', img: 'https://media.brawltime.ninja/brawlers/stu/model.webp?size=400', usageRank: 53, loveRank: 53, hateRank: 54, winRate: 90, difficulty: 'Easy' },
    { name: 'Willow', img: 'https://media.brawltime.ninja/brawlers/willow/model.webp?size=400', usageRank: 54, loveRank: 54, hateRank: 55, winRate: 91, difficulty: 'Medium' },
    { name: 'Leon', img: 'https://media.brawltime.ninja/brawlers/leon/model.webp?size=400', usageRank: 47, loveRank: 47, hateRank: 48, winRate: 84, difficulty: 'Medium' },
];


function showCategory(category) {
    const statsContainer = document.getElementById('brawler-stats');
    statsContainer.innerHTML = '';

    let sortedBrawlers;

    switch (category) {
        case 'most-used':
            sortedBrawlers = brawlers.sort((a, b) => a.usageRank - b.usageRank);
            break;
        case 'most-loved':
            sortedBrawlers = brawlers.sort((a, b) => a.loveRank - b.loveRank);
            break;
        case 'most-hated':
            sortedBrawlers = brawlers.sort((a, b) => a.hateRank - b.hateRank);
            break;
        case 'easiest-win':
            sortedBrawlers = brawlers.sort((a, b) => b.winRate - a.winRate);
            break;
        case 'hardest-win':
            sortedBrawlers = brawlers.sort((a, b) => a.winRate - b.winRate);
            break;
        default:
            sortedBrawlers = [];
    }

    sortedBrawlers.forEach(brawler => {
        const brawlerCard = `
            <div class="brawler-card">
                <h3>${brawler.name}</h3>
                <img src="${brawler.img}" alt="${brawler.name}">
                <p>Win Rate: ${brawler.winRate}%</p>
                <p>Difficulty: ${brawler.difficulty}</p>
            </div>
        `;
        statsContainer.innerHTML += brawlerCard;
    });
}


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" 
    });
}