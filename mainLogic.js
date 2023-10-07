import cheerio from 'cheerio';
import axios from 'axios';

export function tehnopolisProduct(url) {  
    axiosFetch(url, '.', 'h1', '.price-value');
}
export function emagProduct() {
    url = "https://www.emag.bg/zyben-dush-dr-mayer-prenosim-bjal-sin-wt3100/pd/DR7B32BBM/";
    axiosFetch(url, ',', 'h1', '.product-new-price');
}
export function jarProduct(url) {
    axiosFetch(url, '.', 'h1', '.price');
}
function axiosFetch(url, symbol, titleTag, priceTag){
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:109.0) Gecko/20100101 Firefox/118.0",
    };
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
  var title = dom(titleTag).text().trim();
  var price = dom(priceTag).first().text();
  price = price.replace(/\s/g, "").split("");
  len = price.length;
  i = 0;
  while(price[i] != symbol) {
    len--;
    i++;
  }
  price = Number(price.slice(0, len*(-1)).join(''));
  outputItem(title, price);
  
}
function outputItem(title, price) {
    console.log("TITLE IS:");
    console.log(title)
    console.log()
    console.log("PRICE IS: ")
    console.log(price)
}
// jarProduct("https://www.jarcomputers.com/kingston-hyperx-cloud-ii-red-4p5m0aa-prod-mulhkingstonhyperxcloud2red.html")
// tehnopolisProduct("https://www.technopolis.bg/bg/Bluetooth-kolonki/Bluetooth-kolonka-SONY-SRS-XB100B/p/301291");
// emagProduct("https://www.emag.bg/zyben-dush-dr-mayer-prenosim-bjal-sin-wt3100/pd/DR7B32BBM/");

// curently is gets the price, but it needs to be formated. The index.js works perfectry.mist
// I decided to switch to cherrio, because I don't know to to get more than one element in xray
// Also, how to save the image to the database. Before that needs to connect to the database.
