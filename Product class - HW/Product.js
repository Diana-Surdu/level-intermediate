

class Product {
  constructor  (id, category, name, image, price) {
    this.id = id
    this.category = category
    this.name = name
    this.image = image
    this.price = price
  }

  log() {
    console.log({Product})
  }
}

let productOne = new Product ( 03566475, "Computer Products", "ASUS X515MA-EJ490", " ", "300 EURO");
let productTwo = new Product ( 9009374, "TV/Audio/Video", "LG 55NANO786QA NanoCell", " ", "800 EURO");
let productThree = new Product ( 64453329998, "Appliances", "Whirlpool WI7020P", " ", "350 EURO");