var Xray = require('x-ray')
const cheerio = require('cheerio');
const axios = require('axios');
var x = Xray()
function PriceInJar(url) {
    const symbol = '.';
    const className = '.price';
    method(url, symbol, className)
}
function PriceInEmag(url) {
    const symbol = ',';
    const className = '.product-new-price';
    method(url, symbol, className)
}
function PriceInTehnopolis(url) {
    const symbol = '.';
    const className = '.price-value';
    method(url, symbol, className)
}
function method(url, symbol, className) {
    x(url, className)(function(err, price) {
        var PriceAsArray = price.replace(/\s/g,'').split('');
        const Price = [];
        for (let i = 0; i < PriceAsArray.length; i++) {
            var char = PriceAsArray[i];
            if (char != symbol)
                Price.push(char);
            else 
                break;
        }
        var FinalPrice = Number(Price.join(''));
        console.log(FinalPrice);
    })  
}

PriceInEmag('https://www.emag.bg/smartfon-samsung-galaxy-a14-64gb-4gb-ram-4g-silver-sm-a145rzsueue/pd/DQPGV6MBM/')
PriceInTehnopolis('https://www.technopolis.bg/bg/Smartfoni-i-mobilni-telefoni/Smartfon-GSM-APPLE-IPHONE-15-YELLOW/p/502074');
