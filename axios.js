const cheerio = require('cheerio');
const axios = require('axios');

class item {
    title = '';
    price = 0;
    img = 
}

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0',
}
axios
    .get('https://www.technopolis.bg/bg/Smartfoni-i-mobilni-telefoni/Smartfon-GSM-APPLE-IPHONE-15-YELLOW/p/502074', { headers })
    .then(res => {
        const $ = cheerio.load(res.data);
        var price = $('.price-value').first().text();
        var title = $('')
        console.log(price)
    })
    .catch((error) => {
        console.error(error);
    });

// const $ = cheerio.load(dom);
// console.log($.root().html());

// curently is gets the price, but it needs to be formated. The index.js works perfectry.mist 
// I decided to switch to cherrio, because I don't know to to get more than one element in xray
// Also, how to save the image to the database. Before that needs to connect to the database.