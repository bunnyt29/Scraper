var Xray = require('x-ray')
const cheerio = require('cheerio');
const axios = require('axios');
var x = Xray()
function PriceInJar(url) {
    const symbol = '.';
    const className = '.price';
    method(url, symbol, className)
    // x(url, '.price')(function(err, price) {  
    //     var PriceAsArray = price.split('');
    //     const Price = [];
    //     for (let i = 0; i < PriceAsArray.length; i++) {
    //         var element = PriceAsArray[i];
    //         if (element != '.')
    //             Price.push(element);
    //         else 
    //             break;
    //     }
    //     var FinalPrice = Number(Price.join(''));
    //     console.log(FinalPrice);
    // })
}
function PriceInEmag(url) {
    const symbol = ',';
    const className = '.product-new-price';
    method(url, symbol, className)
    // x(url, '.product-new-price')(function(err, price) {
    //     var PriceAsArray = price.split('');
    //     const Price = [];
    //     for (let i = 0; i < PriceAsArray.length; i++) {
    //         var element = PriceAsArray[i];
    //         if (element != ',')
    //             Price.push(element);
    //         else 
    //             break;
    //     }
    //     var FinalPrice = Number(Price.join(''));
    //     console.log(FinalPrice);
    // })
}
function PriceInTehnopolis() {
    const symbol = '.';
    const className = '.price-value';
    method(url, symbol, className)
}
function method(url, symbol, className) {
    x(url, className)(function(err, price) {
        var PriceAsArray = price.replace(/\s/g,'').split('');
        const Price = [];
        console.log(typeof PriceAsArray)
        console.log(typeof Price)
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
// function PriceInXiaomiBulgaria(url) {
//     x(url, '.product_title')(function(err, price) {
//         console.log(price);
//     })
// }
// async function banana() {
//     const response = await axios.get("https://www.ozone.bg/product/igri-shah-tabla-ludo-ne-se-sardi-choveche-zmii-i-stalbi/")
//     console.log(response.body)
// }
// banana();
// async function banana() {
//     const response = await axios({
//         method: 'get',
//         url: 'https://mi-bulgaria.com/buy/xiaomi-smart-band-8/',
//         transformResponse: [function (data) {
//             const $ = cheerio.load(data.body)
//             console.log($('.woocommerce-Price-amount').text());
//         }],
//     });
// }
// banana();
PriceInEmag