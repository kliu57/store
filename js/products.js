/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */

window.products = [
  // *** START OF RACKETS ***
  {
    id: "RACKET-YONEX-TI10",
    title: "Ti-10",
    description:
      "The Yonex Ti-10 is balanced a little head-light to help increase swing speed and power",
    price: 24999,
    discontinued: true,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-TI10.jpg"
  },
  {
    id: "RACKET-YONEX-NS9000",
    title: "Nanospeed 9000",
    description:
      "The Yonex NanoSpeed 9000 uses the latest technology, Elastic Ti to provide high elasticity and high strength in the same frame",
    price: 25999,
    discontinued: true,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-NS9000.jpg"
  },
  {
    id: "RACKET-YONEX-ASTROX99-ORG",
    title: "Astrox 99",
    description:
      "For players who demand a steep angled and devastating smash, taking the point to their opponent",
    price: 26999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-ASTROX99-ORG.jpg"
  },
  {
    id: "RACKET-YONEX-NF800-BLACK",
    title: "Nanoflare 800",
    description:
      "For advanced players looking to take the attack to their opponent with extreme swing speeds and maneuverability from a headlight racquet",
    price: 26999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-NF800-BLACK.jpg"
  },
  {
    id: "RACKET-YONEX-ARCSABER11-RED",
    title: "Arcsaber 11",
    description:
      "The Arcsaber 11 is designed to deliver pinpoint accuracy in the heat of lightening fast rallies",
    price: 24999,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-ARCSABER11-RED.jpg"
  },
  {
    id: "RACKET-YONEX-VOLTRIC-Z-FORCE2",
    title: "Voltric Z-Force II",
    description:
      "The Thinnest ever shaft and improved TRI-VOLTAGE SYSTEM increases the smash energy",
    price: 23995,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-VOLTRIC-Z-FORCE2.jpg"
  },
  {
    id: "RACKET-YONEX-DUORA10-BLUE-ORG",
    title: "Duora 10",
    description:
      "Box-shaped for power. Aerodynamic for speed. Strong forehand smash. Fast backhand drive.",
    price: 24995,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-DUORA10-BLUE-ORG.jpg"
  },
  {
    id: "RACKET-YONEX-NR900-BLUE",
    title: "Nanoray 900",
    description:
      "A totally new frame that suppresses the angle of the shuttlecock for a completely new angle to your smash shots.",
    price: 23995,
    discontinued: false,
    categories: ["c1"],
    imageUrl: "RACKET-YONEX-NR900-BLUE.jpg"
  },
  // *** END OF RACKETS ***

  // *** START OF MENS SHOES ***
  {
    id: "SHOES-YONEX-65Z2M-WH-ORG",
    title: "Power Cushion 65 Z 2 (White/Orange)",
    description: "All-around model worn by the world's top players",
    price: 13995,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "SHOES-YONEX-65Z2M-WH-ORG.jpg"
  },
  {
    id: "SHOES-YONEX-ECPZ2M-PK-BL",
    title: "Power Cushion Eclipsion Z (Pink/Blue)",
    description: "Remarkably improved stability and fit.",
    price: 13995,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "SHOES-YONEX-ECPZ2M-PK-BL.jpg"
  },
  {
    id: "SHOES-YONEX-COMFORTZM-BLACK",
    title: "Power Cushion Comfort Z (Black)",
    description:
      "Snug fit with ultimate cushioning equipped with the POWER CUSHION throughout the entire sole.",
    price: 12995,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "SHOES-YONEX-COMFORTZM-BLACK.jpg"
  },
  {
    id: "SHOES-YONEX-AERUS3M-BLUE",
    title: "Aerus 3 (Blue)",
    description: "Yonex’s lightest shoe at 270g. Superior ventilation and solid fit.",
    price: 17499,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "SHOES-YONEX-AERUS3M-BLUE.jpg"
  },
  {
    id: "SHOES-YONEX-COMFORTTOURM-BLUE",
    title: "Power Cushion Comfort Tour (Blue)",
    description:
      "Snug fit with ultimate cushioning equipped with the POWER CUSHION throughout the entire sole.",
    price: 16999,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "SHOES-YONEX-COMFORTTOURM-BLUE.jpg"
  },
  {
    id: "SHOES-YONEX-03ZM-CORAL",
    title: "Power Cushion 03 Z (Coral Red)",
    description: "Newly designed upper provides remarkably improved fit and stability.",
    price: 9995,
    discontinued: false,
    categories: ["c2"],
    imageUrl: "SHOES-YONEX-03ZM-CORAL.jpg"
  },
  // *** END OF MENS SHOES ***

  // *** START OF WOMENS SHOES ***
  {
    id: "SHOES-YONEX-65X2L-WHITE",
    title: "Power Cushion 65 X 2 (White)",
    description: "Intermediate to advanced model for a comfortable fit",
    price: 15999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "SHOES-YONEX-65X2L-WHITE.jpg"
  },
  {
    id: "SHOES-YONEX-ECPZL-BLACK",
    title: "Eclipsion Z (Black)",
    description: "Remarkably improved stability and fit",
    price: 11999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "SHOES-YONEX-ECPZL-BLACK.jpg"
  },
  {
    id: "SHOES-YONEX-COMFORTZL-GREY",
    title: "Power Cushion Comfort Z (Grey)",
    description:
      "Snug fit with ultimate cushioning equipped with the POWER CUSHION throughout the entire sole.",
    price: 10999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "SHOES-YONEX-COMFORTZL-GREY.jpg"
  },
  {
    id: "SHOES-YONEX-AERUS3L-ROSE",
    title: "Aerus 3 (Rose)",
    description: "Yonex's lightest shoe at 270g. Superior ventilation and solid fit.",
    price: 14995,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "SHOES-YONEX-AERUS3L-ROSE.jpg"
  },
  {
    id: "SHOES-YONEX-03ZL-BLUE",
    title: "Power Cushion 03 Z (Blue)",
    description: "Newly designed upper provides remarkably improved fit and stability.",
    price: 14999,
    discontinued: false,
    categories: ["c3"],
    imageUrl: "SHOES-YONEX-03ZL-BLUE.jpg"
  },
  // *** END OF WOMENS SHOES ***

  // *** START OF UNISEX SHOES ***
  {
    id: "SHOES-YONEX-35EX-BK-BL",
    title: "Power Cushion 35 (Black/Blue)",
    description: "Affordable shoe with reliable traction and cushioning for the feet and joints.",
    price: 11999,
    discontinued: false,
    categories: ["c2", "c3"],
    imageUrl: "SHOES-YONEX-35EX-BK-BL.jpg"
  },
  {
    id: "SHOES-YONEX-ECPXM-TQ-YL",
    title: "Power Cushion Eclipsion X (Turqoise/Yellow)",
    description: "Newly designed upper provides remarkably improved fit and stability.",
    price: 11999,
    discontinued: false,
    categories: ["c2", "c3"],
    imageUrl: "SHOES-YONEX-ECPXM-TQ-YL.jpg"
  },
  // *** END OF UNISEX SHOES ***

  // *** START OF BAGS ***
  {
    id: "BAG-2812EX-BK",
    title: "Pro Series Backpack (BAG2812EX) (Black)",
    description:
      "Made with technology to keep your gear in top shape along with a number of storage options.<br>Size: 33 x 23 x 47 cm",
    price: 13150,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "BAG-2812EX-BK.jpg"
  },
  {
    id: "BAG-2812EX-ORG",
    title: "Pro Series Backpack (BAG2812EX) (Orange)",
    description:
      "Made with technology to keep your gear in top shape along with a number of storage options.<br>Size: 33 x 23 x 47 cm",
    price: 13150,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "BAG-2812EX-ORG.jpg"
  },
  {
    id: "BAG-1978-GRY",
    title: "Pro Series Backpack (BAG1978) (Grey)",
    description:
      "Made with technology to keep your gear in top shape along with a number of storage options.<br>Size: 30 x 19 x 51 cm",
    price: 13150,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "BAG-1978-GRY.jpg"
  },
  {
    id: "BAG-92031WBK-BK",
    title: "2020 Pro Tournament Racket Bag (92031WBK) (Black)",
    description:
      "Can carry up to 4 badminton rackets OR 3 tennis rackets.<br>Size: 75 x 18 x 33 cm",
    price: 10650,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "BAG-92031WBK-BK.jpg"
  },
  {
    id: "BAG-92026EX-BLUE",
    title: "6pk Pro Racquet Bag (BAG92026) (Blue)",
    description: "Can carry up to 6 rackets and a pair of shoes.<br>Size: 78 x 26 x 33 cm",
    price: 12365,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "BAG-92026EX-BLUE.jpg"
  },
  {
    id: "BAG-92031B-BK",
    title: "2020 Pro Two-way Duffle Bag (92031B) (Black)",
    description:
      "This bag possesses a large compartment that will allow you to store all your belongings.<br>Size: 55 x 26 x 28 cm",
    price: 8699,
    discontinued: false,
    categories: ["c4"],
    imageUrl: "BAG-92031B-BK.jpg"
  }
  // *** END OF BAGS ***
];
