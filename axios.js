const cheerio = require("cheerio");
const axios = require("axios");

const headers = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0",
};
function tehnopolisProduct(url) {  
    const symbol = '.';
    const titleTag = "h1";
    const priceTag = '.price-value';
    axios
    .get(
      url, { headers }
    )
    .then((res) => {
      method(res, symbol, titleTag, priceTag);
    })
    .catch((error) => {
      console.error(error);
    });
}

function method(axiosRes, symbol, titleTag, priceTag) {
  let dom = cheerio.load(axiosRes.data);
  var title = dom(titleTag).text();
  var price = dom(priceTag).first().text();
  var priceAsArray = price.replace(/\s/g, "").split("");
  const priceEmptyArray = [];
  for (let i = 0; i < priceAsArray.length; i++) {
    var char = priceAsArray[i];     
    if (char != symbol) priceEmptyArray.push(char);
    else break;
  }
  var formatedPrice = Number(priceEmptyArray.join(""));
  outputItem(title, formatedPrice);
  
}
function outputItem(title, formatedPrice) {
    console.log("TITLE IS:");
    console.log(title)
    console.log()
    console.log("PRICE IS: ")
    console.log(formatedPrice)
}
tehnopolisProduct("https://www.technopolis.bg/bg/Bluetooth-kolonki/Bluetooth-kolonka-SONY-SRS-XB100B/p/301291");
// curently is gets the price, but it needs to be formated. The index.js works perfectry.mist
// I decided to switch to cherrio, because I don't know to to get more than one element in xray
// Also, how to save the image to the database. Before that needs to connect to the database.
