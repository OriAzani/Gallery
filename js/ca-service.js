var gNextId = 1;

var gProjs = [
    {
        id: gNextId++,
        name: 'MineSweeper',
        title: 'Sweep Them Mines',
        desc: 'I built a MineSweeper while sprinting!',
        url:'https://oriazani.github.io/oriAzaniSweeper/',
        pic: 'img/portfolio/minesweeper.png',
        date: 'Dec 2065',
        client: 'CodingAcademy',
        category: 'Games'
    },
    {
        id: gNextId++,
        name: 'Touch Nums',
        title: 'lets touch nums',
        desc: 'I bulit a game that bother numbers',
        url:'https://oriazani.github.io/Touch-Nums/',
        pic: 'img/portfolio/touchNums.png',
        date: 'Dec 2045',
        client: 'CodingAcademy',
        category: 'Games'
    },
    {
        id: gNextId++,
        name: 'BookShop',
        title: 'Let\'s Do Some Reading!',
        desc: 'I bulit a Bookstore',
        url:'https://oriazani.github.io/BookShop/',
        pic: 'img/portfolio/bookshop.jpeg',
        date: 'Dec 2045',
        client: 'CodingAcademy',
        category: 'Books'
    },
]

function getProjs() {
    return gProjs
}