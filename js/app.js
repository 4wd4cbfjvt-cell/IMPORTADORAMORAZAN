const defaultProducts = [];

const seededProducts = [
  {
    id: 9001,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1900,
    category: "stuffed",
    images: [
      "images/cojin-cuello-gato.png"
    ]
  },
  {
    id: 9002,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4800,
    category: "stuffed",
    images: [
      "images/peluche-cinnamoroll.png"
    ]
  },
  {
    id: 9003,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1700,
    category: "stuffed",
    images: [
      "images/peluche-tony-tony-chopper.png"
    ]
  },
  {
    id: 9004,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1995,
    category: "stuffed",
    images: [
      "images/peluche-goku.png"
    ]
  },
  {
    id: 9005,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1600,
    category: "stuffed",
    images: [
      "images/peluche-goku-super-saiyan.png"
    ]
  },
  {
    id: 9006,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1600,
    category: "stuffed",
    images: [
      "images/set-peluches-dragon-ball.png"
    ]
  },
  {
    id: 9007,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 2000,
    category: "stuffed",
    images: [
      "images/peluche-payasito.png"
    ]
  },
  {
    id: 9008,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1700,
    category: "stuffed",
    images: [
      "images/peluche-monkey-d-luffy.png"
    ]
  },
  {
    id: 9009,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 2850,
    category: "stuffed",
    images: [
      "images/peluche-woodstock.png"
    ]
  },
  {
    id: 9010,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 8995,
    category: "stuffed",
    images: [
      "images/peluche-woodstock-gigante.png"
    ]
  },
  {
    id: 9011,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4500,
    category: "stuffed",
    images: [
      "images/peluche-gato-gris.png"
    ]
  },
  {
    id: 9012,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4500,
    category: "stuffed",
    images: [
      "images/peluche-gato-acostado.png"
    ]
  },
  {
    id: 9013,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: [
      "images/arco-actividades-oceano.png"
    ]
  },
  {
    id: 9014,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: [
      "images/arco-actividades-abeja.png"
    ]
  },
  {
    id: 9015,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: [
      "images/gimnasio-bebe-bosque.png"
    ]
  },
  {
    id: 9016,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: [
      "images/gimnasio-bebe-oceano.png"
    ]
  },
  {
    id: 9017,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 12000,
    category: "baby",
    images: [
      "images/gimnasio-bebe-dinosaurios.png"
    ]
  },
  {
    id: 9018,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 12000,
    category: "baby",
    images: [
      "images/gimnasio-bebe-rosado.png"
    ]
  },
  {
    id: 9019,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: [
      "images/alfombra-redonda-azul.png"
    ]
  },
  {
    id: 9020,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: [
      "images/alfombra-redonda-rosada.png"
    ]
  },
  {
    id: 9021,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: [
      "images/alfombra-redonda-cafe.png"
    ]
  },
  {
    id: 9022,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: [
      "images/alfombra-redonda-beige.png"
    ]
  },
  {
    id: 9023,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: [
      "images/alfombra-redonda-rosa.png"
    ]
  },
  {
    id: 9024,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: [
      "images/alfombra-redonda-gris.png"
    ]
  },
  {
    id: 9025,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: [
      "images/alfombra-redonda-negra.png"
    ]
  },
  {
    id: 9026,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3350,
    category: "stuffed",
    images: ["images/cojin-tom-hamburguesa.png"]
  },
  {
    id: 9027,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6200,
    category: "stuffed",
    images: ["images/peluche-stitch.png"]
  },
  {
    id: 9028,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6200,
    category: "stuffed",
    images: ["images/peluche-stitch-futbol.png"]
  },
  {
    id: 9029,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3200,
    category: "stuffed",
    images: ["images/peluche-snoopy-dormilon.png"]
  },
  {
    id: 9030,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 5700,
    category: "stuffed",
    images: ["images/peluche-stitch-gigante.png"]
  },
  {
    id: 9031,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 9300,
    category: "stuffed",
    images: ["images/peluche-stitch-gigante.png"]
  },
  {
    id: 9032,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3650,
    category: "stuffed",
    images: ["images/peluche-my-melody-kuromi.png"]
  },
  {
    id: 9033,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 5995,
    category: "stuffed",
    images: ["images/peluche-my-melody-kuromi.png"]
  },
  {
    id: 9034,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4100,
    category: "stuffed",
    images: ["images/peluche-aguacate.png"]
  },
  {
    id: 9035,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 2250,
    category: "stuffed",
    images: ["images/set-patrulla-canina.png"]
  },
  {
    id: 9036,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 7995,
    category: "stuffed",
    images: ["images/peluche-vaca.png"]
  },
  {
    id: 9037,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3800,
    category: "stuffed",
    images: ["images/peluche-chimuelo.png"]
  },
  {
    id: 9038,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4500,
    category: "stuffed",
    images: ["images/peluche-calamardo.png"]
  },
  {
    id: 9039,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 8200,
    category: "stuffed",
    images: ["images/peluche-calamardo.png"]
  },
  {
    id: 9040,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 2650,
    category: "stuffed",
    images: ["images/peluche-cerdito.png"]
  },
  {
    id: 9041,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3350,
    category: "stuffed",
    images: ["images/peluche-popeye.png"]
  },
  {
    id: 9042,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3200,
    category: "stuffed",
    images: ["images/hello-kitty-leopardo-rosa.png"]
  },
  {
    id: 9043,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 5700,
    category: "stuffed",
    images: ["images/peluche-anna.png"]
  },
  {
    id: 9044,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 7995,
    category: "stuffed",
    images: ["images/cojin-mickey-mouse.png"]
  },
  {
    id: 9045,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4995,
    category: "stuffed",
    images: ["images/peluche-pinguino.png"]
  },
  {
    id: 9046,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6900,
    category: "stuffed",
    images: ["images/oso-rosado-corazon.png"]
  },
  {
    id: 9047,
    nameEs: "Accesorios Kuromi",
    nameZh: "库洛米配件",
    price: 3995,
    category: "toys",
    images: ["images/accesorios-kuromi.png"]
  },
  {
    id: 9048,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1800,
    category: "stuffed",
    images: ["images/cojines-viaje.png"]
  },
  {
    id: 9049,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 8995,
    category: "stuffed",
    images: ["images/peluche-pikachu.png"]
  },
  {
    id: 9050,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1500,
    category: "stuffed",
    images: ["images/cojin-cuello-azul.png"]
  },
  {
    id: 9051,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3100,
    category: "stuffed",
    images: ["images/mickey-minnie.png"]
  },
  {
    id: 9052,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6900,
    category: "stuffed",
    images: ["images/peluches-mapache.png"]
  },
  {
    id: 9053,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4550,
    category: "stuffed",
    images: ["images/peluche-mapache-gris.png"]
  },
  {
    id: 9054,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1900,
    category: "stuffed",
    images: ["images/cojines-cuello-variados.png"]
  },
  {
    id: 9055,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1900,
    category: "stuffed",
    images: ["images/cojin-cuello-pato.png"]
  },
  {
    id: 9056,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 1750,
    category: "bags",
    images: ["images/mochila-cruzada-camuflaje.png"]
  },
  {
    id: 9057,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 2850,
    category: "bags",
    images: ["images/bolso-cruzado-negro.png"]
  },
  {
    id: 9058,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 3500,
    category: "bags",
    images: ["images/bolso-cruzado-ejecutivo.png"]
  },
  {
    id: 9059,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 950,
    category: "bags",
    images: ["images/bolso-cruzado-azul.png"]
  },
  {
    id: 9060,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 1450,
    category: "bags",
    images: ["images/mochila-ejecutiva-negra.png"]
  },
  {
    id: 9061,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 1450,
    category: "purses",
    images: ["images/billetera-cuero-clasica-negra.png"]
  },
  {
    id: 9062,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 1450,
    category: "purses",
    images: ["images/billetera-cuero-clasica-cafe.png"]
  },
  {
    id: 9063,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 4800,
    category: "purses",
    images: ["images/billetera-cuero-premium-negra.png"]
  },
  {
    id: 9064,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 2995,
    category: "bags",
    images: ["images/set-mochilas-ejecutivas.png"]
  },
  {
    id: 9065,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 1650,
    category: "bags",
    images: ["images/bolso-deportivo-negro.png"]
  },
  {
    id: 9070,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 5500,
    category: "bags",
    images: ["images/bolsos-lacoste.png"]
  },
  {
    id: 9071,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 5500,
    category: "bags",
    images: ["images/mochilas-outdoor.png"]
  },
  {
    id: 9072,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 4800,
    category: "bags",
    images: ["images/mochila-vintage-cuero.png"]
  },
  {
    id: 9073,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 6995,
    category: "bags",
    images: ["images/mochila-urbana-negra.png"]
  },
  {
    id: 9074,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 4800,
    category: "bags",
    images: ["images/mochila-swiss.png"]
  },
  {
    id: 9075,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 2650,
    category: "stuffed",
    images: ["images/peluche-conejo-blanco.png"]
  },
  {
    id: 9076,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 5995,
    category: "stuffed",
    images: ["images/peluche-conejo-blanco.png"]
  },
  {
    id: 9077,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 8995,
    category: "stuffed",
    images: ["images/peluche-oso-cafe.png"]
  },
  {
    id: 9078,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3400,
    category: "stuffed",
    images: ["images/peluche-dinosaurio-verde.png"]
  },
  {
    id: 9079,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4995,
    category: "stuffed",
    images: ["images/peluche-gato-rayado.png"]
  },
  {
    id: 9080,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 8500,
    category: "stuffed",
    images: ["images/peluche-pluto.png"]
  },
  {
    id: 9081,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 14500,
    category: "stuffed",
    images: ["images/peluche-pluto.png"]
  },
  {
    id: 9082,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 10500,
    category: "stuffed",
    images: ["images/peluche-donald-duck.png"]
  },
  {
    id: 9083,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 9995,
    category: "stuffed",
    images: ["images/peluche-vaca-pdf3.png"]
  },
  {
    id: 9084,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6350,
    category: "stuffed",
    images: ["images/peluche-vaca-pdf3.png"]
  },
  {
    id: 9085,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 3250,
    category: "stuffed",
    images: ["images/peluche-abeja.png"]
  },
  {
    id: 9086,
    nameEs: "Cobija",
    nameZh: "毯子",
    price: 4500,
    size: "180 x 200 cm",
    category: "blankets",
    images: ["images/cobija-peluda-gris.png"]
  },
  {
    id: 9087,
    nameEs: "Cobija",
    nameZh: "毯子",
    price: 4500,
    size: "180 x 200 cm",
    category: "blankets",
    images: ["images/cobija-peluda-azul.png"]
  },
  {
    id: 9088,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 5500,
    size: "30 cm ancho x 38 cm alto",
    category: "bags",
    images: ["images/mochila-vintage-cafe-pdf4.png"]
  },
  {
    id: 9089,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 5500,
    size: "30 cm ancho x 38 cm alto",
    category: "bags",
    images: ["images/mochila-urbana-negra-pdf4.png"]
  },
  {
    id: 9090,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 1750,
    category: "bags",
    images: ["images/bolso-clasico-cafe.png"]
  },
  {
    id: 9091,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 1750,
    category: "bags",
    images: ["images/bolso-clasico-negro.png"]
  },
  {
    id: 9092,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 650,
    category: "purses",
    images: ["images/billetera-cuero-clasica-pdf4.png"]
  },
  {
    id: 9093,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 650,
    category: "purses",
    images: ["images/billetera-ejecutiva-cafe.png"]
  },
  {
    id: 9094,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 950,
    category: "purses",
    images: ["images/billetera-kingbull-cafe.png"]
  },
  {
    id: 9095,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 950,
    category: "purses",
    images: ["images/billetera-kingbull-negra.png"]
  },
  {
    id: 9096,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 550,
    size: "12 cm ancho",
    category: "purses",
    images: ["images/billetera-premium.png"]
  },
  {
    id: 9097,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 550,
    size: "12 cm ancho",
    category: "purses",
    images: ["images/billetera-aguila.png"]
  },
  {
    id: 9098,
    nameEs: "Billetera",
    nameZh: "钱包",
    price: 1450,
    category: "purses",
    images: ["images/billetera-vintage.png"]
  },
  {
    id: 9099,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 900,
    size: "28 cm ancho x 14 cm alto",
    category: "bags",
    images: ["images/rinonera-morada.png"]
  },
  {
    id: 9100,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 900,
    size: "28 cm ancho x 14 cm alto",
    category: "bags",
    images: ["images/rinonera-roja.png"]
  },
  {
    id: 9101,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 900,
    size: "28 cm ancho x 14 cm alto",
    category: "bags",
    images: ["images/rinonera-cafe.png"]
  },
  {
    id: 9102,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 900,
    size: "28 cm ancho x 14 cm alto",
    category: "bags",
    images: ["images/rinonera-gris.png"]
  },
  {
    id: 9103,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 900,
    size: "28 cm ancho x 14 cm alto",
    category: "bags",
    images: ["images/rinonera-roja-deportiva.png"]
  },
  {
    id: 9104,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 900,
    size: "28 cm ancho x 14 cm alto",
    category: "bags",
    images: ["images/rinonera-morada-deportiva.png"]
  },
  {
    id: 9105,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 4995,
    size: "35 cm ancho x 25 cm alto",
    category: "bags",
    images: ["images/maletin-ejecutivo.png"]
  },
  {
    id: 9106,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 3400,
    size: "30 cm ancho x 23 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-negro-pdf4.png"]
  },
  {
    id: 9107,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 5400,
    size: "40 cm ancho x 29 cm alto",
    category: "bags",
    images: ["images/bolso-portatil-gris.png"]
  },
  {
    id: 9108,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 2750,
    size: "21 cm ancho x 26 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-gris.png"]
  },
  {
    id: 9109,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 2750,
    size: "21 cm ancho x 26 cm alto",
    category: "bags",
    images: ["images/set-bolsos-cruzados.png"]
  },
  {
    id: 9110,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 2750,
    size: "21 cm ancho x 26 cm alto",
    category: "bags",
    images: ["images/bolso-casual-verde.png"]
  },
  {
    id: 9111,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 3100,
    size: "31 cm ancho x 27 cm alto",
    category: "bags",
    images: ["images/bolso-casual-negro.png"]
  },
  {
    id: 9112,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 3100,
    size: "31 cm ancho x 27 cm alto",
    category: "bags",
    images: ["images/rinonera-deportiva.png"]
  },
  {
    id: 9113,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 1250,
    size: "30 cm ancho",
    category: "bags",
    images: ["images/rinonera-impermeable.png"]
  },
  {
    id: 9114,
    nameEs: "Sombrilla con figura",
    nameZh: "图案雨伞",
    price: 2100,
    category: "rain",
    images: ["images/sombrilla-hello-kitty-rosa.png"]
  },
  {
    id: 9115,
    nameEs: "Sombrilla con figura",
    nameZh: "图案雨伞",
    price: 2100,
    category: "rain",
    images: ["images/sombrilla-kuromi-hello-kitty.png"]
  },
  {
    id: 9116,
    nameEs: "Sombrilla con figura",
    nameZh: "图案雨伞",
    price: 2100,
    category: "rain",
    images: ["images/sombrilla-sanrio-blanca.png"]
  },
  {
    id: 9117,
    nameEs: "Sombrilla con figura",
    nameZh: "图案雨伞",
    price: 2100,
    category: "rain",
    images: ["images/sombrilla-snoopy-friends.png"]
  },
  {
    id: 9118,
    nameEs: "Sombrilla con figura",
    nameZh: "图案雨伞",
    price: 2100,
    category: "rain",
    images: ["images/sombrilla-snoopy-comic.png"]
  },
  {
    id: 9119,
    nameEs: "Sombrilla con figura",
    nameZh: "图案雨伞",
    price: 2100,
    category: "rain",
    images: ["images/sombrilla-snoopy-blanca.png"]
  },
  {
    id: 9120,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 1450,
    size: "17 cm ancho x 28 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-camuflaje.png"]
  },
  {
    id: 9121,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 1100,
    size: "40 cm ancho",
    category: "bags",
    images: ["images/rinonera-colores.png"]
  },
  {
    id: 9122,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 2400,
    size: "18 cm ancho x 24 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-diseno-urbano.png"]
  },
  {
    id: 9123,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 2900,
    size: "31 cm ancho",
    category: "bags",
    images: ["images/bolso-cruzado-cuatro-colores.png"]
  },
  {
    id: 9124,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 2995,
    size: "26 cm ancho x 20 cm alto",
    category: "bags",
    images: ["images/bolso-casual-colores.png"]
  },
  {
    id: 9125,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 2995,
    size: "26 cm ancho x 20 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-gris-pdf5.png"]
  },
  {
    id: 9126,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 4500,
    size: "24 x 20 cm",
    category: "men",
    images: ["images/bolso-lacoste-azul.png"]
  },
  {
    id: 9127,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 4500,
    size: "24 x 20 cm",
    category: "men",
    images: ["images/bolso-lacoste-gris.png"]
  },
  {
    id: 9128,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 4500,
    size: "24 x 20 cm",
    category: "men",
    images: ["images/bolsos-lacoste-azul-negro.png"]
  },
  {
    id: 9129,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 4500,
    size: "24 x 20 cm",
    category: "men",
    images: ["images/bolso-lacoste-negro.png"]
  },
  {
    id: 9130,
    nameEs: "Artículo hombre",
    nameZh: "男士用品",
    price: 1450,
    category: "men",
    images: ["images/reloj-digital-colores.png"]
  },
  {
    id: 9131,
    nameEs: "Calzado",
    nameZh: "鞋类",
    price: 1650,
    size: "Talla 40-45",
    category: "shoes",
    images: ["images/sandalias-ismile.png"]
  },
  {
    id: 9132,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 1100,
    size: "35 cm ancho",
    category: "bags",
    images: ["images/rinonera-sport-negra.png"]
  },
  {
    id: 9133,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 2000,
    category: "bags",
    images: ["images/rinonera-nike-negra.png"]
  },
  {
    id: 9134,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 3900,
    size: "30 cm ancho x 22 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-cuatro-colores-pdf5.png"]
  },
  {
    id: 9135,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-ardilla-manta.png"]
  },
  {
    id: 9136,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-tigre-manta.png"]
  },
  {
    id: 9137,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-elefante-manta.png"]
  },
  {
    id: 9138,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-gato-manta.png"]
  },
  {
    id: 9139,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-mono-manta.png"]
  },
  {
    id: 9140,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-gorila-manta.png"]
  },
  {
    id: 9141,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-perro-husky-manta.png"]
  },
  {
    id: 9142,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-mapache-manta.png"]
  },
  {
    id: 9143,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 6300,
    size: "Peluche 45-55 cm, cobija 110 x 160 cm",
    category: "stuffed",
    images: ["images/peluche-elefante-sentado.png"]
  },
  {
    id: 9144,
    nameEs: "Figuras de Bloques Pequeños",
    nameZh: "小积木公仔",
    price: 650,
    category: "toys",
    images: ["images/figuras-bloques-pequenos.png"]
  },
  {
    id: 9145,
    nameEs: "Mini Figuras de Bloques",
    nameZh: "迷你积木公仔",
    price: 400,
    category: "toys",
    images: ["images/mini-figuras-bloques.png"]
  },
  {
    id: 9146,
    nameEs: "Cartas Coleccionables",
    nameZh: "收藏卡",
    price: 450,
    category: "toys",
    images: ["images/cartas-coleccionables.png"]
  },
  {
    id: 9147,
    nameEs: "Mochila",
    nameZh: "背包",
    price: 4995,
    size: "31 cm ancho x 47 cm alto",
    category: "bags",
    images: ["images/mochila-escolar-grande.png"]
  },
  {
    id: 9148,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 1250,
    size: "34 cm ancho",
    category: "bags",
    images: ["images/cangurera-deportiva.png"]
  },
  {
    id: 9149,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 1250,
    size: "34 cm ancho",
    category: "bags",
    images: ["images/cangurera-negra.png"]
  },
  {
    id: 9150,
    nameEs: "Canguro",
    nameZh: "腰包",
    price: 1250,
    size: "34 cm ancho",
    category: "bags",
    images: ["images/cangurera-sport.png"]
  },
  {
    id: 9151,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 2995,
    size: "20 cm ancho x 24 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-vertical.png"]
  },
  {
    id: 9152,
    nameEs: "Mochila cruzada",
    nameZh: "男士斜挎包",
    price: 1950,
    size: "25 cm ancho x 20 cm alto",
    category: "bags",
    images: ["images/bolso-cruzado-casual.png"]
  },
  {
    id: 9153,
    nameEs: "Termo",
    nameZh: "保温杯",
    price: 2900,
    size: "25 cm alto",
    category: "termos",
    images: ["images/termo-agarradera.png"]
  },
  {
    id: 9154,
    nameEs: "Termo",
    nameZh: "保温杯",
    price: 2500,
    size: "710 ml, térmico",
    category: "termos",
    images: ["images/vaso-termico-tapa.png"]
  },
  {
    id: 9155,
    nameEs: "Termo",
    nameZh: "保温杯",
    price: 2950,
    size: "900 ml",
    category: "termos",
    images: ["images/termo-degradado-agarradera.png"]
  }
];

const productSizes = {
  9002: "36 cm alto",
  9005: "100 g",
  9007: "25 cm",
  9008: "20 cm",
  9009: "40 cm",
  9010: "100 cm",
  9011: "35 cm",
  9012: "35 cm",
  9019: "140 cm",
  9020: "140 cm",
  9021: "140 cm",
  9022: "140 cm",
  9023: "140 cm",
  9024: "140 cm",
  9025: "140 cm",
  9030: "60 cm",
  9031: "80 cm",
  9032: "30 cm",
  9033: "40 cm",
  9034: "90 cm",
  9035: "23 cm",
  9036: "100 cm",
  9037: "40 cm",
  9038: "40 cm",
  9039: "60 cm",
  9040: "21 cm",
  9041: "45 cm",
  9042: "30 cm",
  9043: "50 cm",
  9044: "70 cm",
  9045: "40 cm",
  9046: "45 cm",
  9047: "30 cm o 45 cm alto",
  9048: "30 x 30 x 12 cm",
  9049: "60 cm",
  9050: "30 x 30 x 8 cm",
  9051: "40 cm",
  9052: "45 cm",
  9053: "36 cm",
  9054: "30 x 30 x 12 cm",
  9075: "35 cm",
  9076: "50 cm",
  9080: "50 cm",
  9081: "65 cm",
  9083: "66 cm",
  9084: "55 cm"
};

const LEGACY_PRODUCTS_KEY = "im_products";
const CUSTOM_PRODUCTS_KEY = "im_custom_products";
const DELETED_PRODUCTS_KEY = "im_deleted_product_ids";
const PRODUCT_DB_NAME = "importadora_morazan_products";
const PRODUCT_DB_VERSION = 1;
const PRODUCT_STORE_NAME = "catalog";
const PRODUCT_STORE_KEY = "custom_products";

let products = seedProducts([]);
let cart = JSON.parse(localStorage.getItem("im_cart")) || [];
let orders = JSON.parse(localStorage.getItem("im_orders")) || [];
let favorites = JSON.parse(localStorage.getItem("im_favorites")) || [];
let currentCategory = "all";
let currentLang = localStorage.getItem("im_lang") || "es";
const hiddenMainCategories = ["backpacks", "handbags"];

const productGrid = document.getElementById("productGrid");
const favoriteGrid = document.getElementById("favoriteGrid");
const searchInput = document.getElementById("searchInput");
const langBtn = document.getElementById("langBtn");
const favoriteNavBtn = document.getElementById("favoriteNavBtn");
const statusName = document.getElementById("statusName");
const statusPhone = document.getElementById("statusPhone");
const statusResult = document.getElementById("statusResult");

function catalogNameForProduct(product) {
  const oldName = (product.nameEs || "").toLowerCase();
  const imageName = ((product.images && product.images[0]) || "").toLowerCase();
  const fixedNames = {
    bags: ["Mochila", "背包"],
    shoes: ["Calzado", "鞋类"],
    rain: ["Sombrilla con figura", "图案雨伞"],
    home: ["Hogar", "家居"],
    termos: ["Termo", "保温杯"],
    stuffed: ["Peluche", "毛绒玩具"],
    baby: ["Juguete bebé", "婴儿玩具"],
    blankets: ["Cobija", "毯子"],
    rugs: ["Alfombra", "地毯"]
  };

  if (imageName.includes("billetera") || oldName.includes("billetera")) {
    return { nameEs: "Billetera", nameZh: "钱包" };
  }

  if (
    imageName.includes("rinonera") ||
    imageName.includes("cangurera") ||
    oldName.includes("riñon") ||
    oldName.includes("rinon") ||
    oldName.includes("cangur")
  ) {
    return { nameEs: "Canguro", nameZh: "腰包" };
  }

  if (product.category === "men" && (imageName.includes("reloj") || oldName.includes("reloj"))) {
    return { nameEs: "Artículo hombre", nameZh: "男士用品" };
  }

  if (
    product.category === "men" ||
    imageName.includes("bolso-cruzado") ||
    imageName.includes("lacoste")
  ) {
    return { nameEs: "Mochila cruzada", nameZh: "男士斜挎包" };
  }

  if (fixedNames[product.category]) {
    return {
      nameEs: fixedNames[product.category][0],
      nameZh: fixedNames[product.category][1]
    };
  }

  if (product.category === "purses" && oldName.includes("billetera")) {
    return { nameEs: "Billetera", nameZh: "钱包" };
  }

  if (product.category === "men") {
    if (oldName.includes("billetera")) {
      return { nameEs: "Billetera", nameZh: "钱包" };
    }

    if (oldName.includes("cangur") || oldName.includes("riñon") || oldName.includes("rinon")) {
      return { nameEs: "Canguro", nameZh: "腰包" };
    }

    if (oldName.includes("bolso") || oldName.includes("mochila") || oldName.includes("lacoste")) {
      return { nameEs: "Mochila cruzada", nameZh: "男士斜挎包" };
    }

    return { nameEs: "Artículo hombre", nameZh: "男士用品" };
  }

  return {};
}

function hasCustomProductName(product) {
  const seedProduct = seededProducts.find(seed => seed.id === product.id);

  if (!seedProduct) return true;

  return product.nameEs !== seedProduct.nameEs || product.nameZh !== seedProduct.nameZh;
}

function normalizeProducts(productList) {
  return productList
    .filter(product => product.id > 8 && product.id !== 7600)
    .map(({ stock, soldOut, agotado, available, ...product }) => {
      const fixedName = hasCustomProductName(product) ? {} : catalogNameForProduct(product);

      return {
        ...product,
        ...fixedName,
        images: (product.images || []).map(image => image.replace("../images/", "images/"))
      };
    });
}

function storedProducts() {
  try {
    const customProducts = JSON.parse(localStorage.getItem(CUSTOM_PRODUCTS_KEY));
    if (customProducts) return customProducts;

    const legacyProducts = JSON.parse(localStorage.getItem(LEGACY_PRODUCTS_KEY));
    if (!legacyProducts) return defaultProducts;

    const seedIds = new Set(seededProducts.map(product => product.id));
    return legacyProducts.filter(product =>
      !seedIds.has(product.id) &&
      !(product.images || []).some(image => String(image).startsWith("data:"))
    );
  } catch (error) {
    return defaultProducts;
  }
}

function deletedProductIds() {
  try {
    return new Set(JSON.parse(localStorage.getItem(DELETED_PRODUCTS_KEY)) || []);
  } catch (error) {
    return new Set();
  }
}

function seedProducts(productList) {
  const mergedProducts = [...productList];
  const deletedIds = deletedProductIds();

  seededProducts.forEach(seedProduct => {
    const exists = mergedProducts.some(product => product.id === seedProduct.id);

    if (!exists && !deletedIds.has(seedProduct.id)) {
      mergedProducts.push(seedProduct);
    }
  });

  return mergedProducts;
}

function productStorageSnapshot(product) {
  const size = productSize(product);

  return {
    id: product.id,
    nameEs: product.nameEs,
    nameZh: product.nameZh,
    price: product.price,
    size: size || "",
    category: product.category,
    images: product.images || []
  };
}

function productChangedFromSeed(product) {
  const seedProduct = seededProducts.find(seed => seed.id === product.id);

  if (!seedProduct) return true;

  return JSON.stringify(productStorageSnapshot(product)) !==
    JSON.stringify(productStorageSnapshot(seedProduct));
}

function customProductsForStorage() {
  return products.filter(productChangedFromSeed);
}

function openProductDatabase() {
  return new Promise((resolve, reject) => {
    if (!window.indexedDB) {
      reject(new Error("Este navegador no permite guardar productos grandes."));
      return;
    }

    const request = indexedDB.open(PRODUCT_DB_NAME, PRODUCT_DB_VERSION);

    request.onupgradeneeded = () => {
      request.result.createObjectStore(PRODUCT_STORE_NAME);
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function readProductDatabase() {
  const database = await openProductDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(PRODUCT_STORE_NAME, "readonly");
    const store = transaction.objectStore(PRODUCT_STORE_NAME);
    const request = store.get(PRODUCT_STORE_KEY);

    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => database.close();
  });
}

async function writeProductDatabase(customProducts) {
  const database = await openProductDatabase();

  return new Promise((resolve, reject) => {
    const transaction = database.transaction(PRODUCT_STORE_NAME, "readwrite");
    const store = transaction.objectStore(PRODUCT_STORE_NAME);
    const request = store.put(customProducts, PRODUCT_STORE_KEY);

    request.onsuccess = () => resolve();
    request.onerror = () => reject(request.error);
    transaction.oncomplete = () => database.close();
  });
}

async function readServerCatalog() {
  try {
    const apiResponse = await fetch(`/api/catalog?v=${Date.now()}`, {
      cache: "no-store",
      credentials: "same-origin"
    });

    if (apiResponse.ok) {
      return await apiResponse.json();
    }
  } catch (error) {
  }

  try {
    const response = await fetch(`catalog.json?v=${Date.now()}`, { cache: "no-store" });
    if (!response.ok) return null;
    const catalog = await response.json();

    if (Array.isArray(catalog)) {
      return { customProducts: catalog, deletedIds: [] };
    }

    return catalog;
  } catch (error) {
    return null;
  }
}

function mergeProductLists(...productLists) {
  const mergedProducts = new Map();

  productLists.flat().forEach(product => {
    if (product && product.id) {
      mergedProducts.set(Number(product.id), product);
    }
  });

  return [...mergedProducts.values()];
}

async function loadSavedProducts() {
  try {
    const serverCatalog = await readServerCatalog();

    if (serverCatalog) {
      const deletedIds = new Set(serverCatalog.deletedIds || []);
      localStorage.setItem(DELETED_PRODUCTS_KEY, JSON.stringify([...deletedIds]));
      products = seedProducts(normalizeProducts(serverCatalog.customProducts || []));
      try {
        await writeProductDatabase(customProductsForStorage());
        localStorage.removeItem(LEGACY_PRODUCTS_KEY);
        localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
      } catch (error) {
        console.warn("No se pudo actualizar el respaldo local de productos.", error);
      }
      applyLanguage();
      return;
    }

    localStorage.removeItem(LEGACY_PRODUCTS_KEY);
    localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
    applyLanguage();
  } catch (error) {
    console.warn("No se pudo cargar IndexedDB.", error);
  }
}

function saveData() {
  localStorage.removeItem(LEGACY_PRODUCTS_KEY);
  localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
  localStorage.setItem("im_cart", JSON.stringify(cart));
  localStorage.setItem("im_orders", JSON.stringify(orders));
  localStorage.setItem("im_favorites", JSON.stringify(favorites));
  localStorage.setItem("im_lang", currentLang);
}

function t(es, zh) {
  return currentLang === "es" ? es : zh;
}

function productName(product) {
  return currentLang === "es" ? product.nameEs : product.nameZh;
}

function productSize(product) {
  return product.size || productSizes[product.id] || "";
}

function productSizeHtml(product) {
  const size = productSize(product);
  return size ? `<p class="product-size">${t("Tamaño", "尺寸")}: ${size}</p>` : "";
}

function productOptions(product) {
  return Array.isArray(product.options)
    ? product.options.map(option => String(option).trim()).filter(Boolean)
    : [];
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function productOptionsHtml(product) {
  const options = productOptions(product);
  return options.length
    ? `<p class="product-options">${t("Opciones", "选项")}: ${options.map(escapeHtml).join(" / ")}</p>`
    : "";
}

function productOptionPickerHtml(product) {
  const options = productOptions(product);
  if (!options.length) return "";

  return `
    <div class="option-picker" aria-label="${t("Elige opciones", "选择选项")}">
      <p class="option-label">${t("Elige opciones y cantidad", "选择选项和数量")}</p>
      ${options.map(option => `
        <label class="option-choice">
          <input type="checkbox" name="productOption" value="${escapeHtml(option)}">
          <span class="option-circle"></span>
          <span>${escapeHtml(option)}</span>
          <input class="option-qty-input" type="number" min="1" value="1" aria-label="${t("Cantidad", "数量")}">
        </label>
      `).join("")}
    </div>
  `;
}

function productInlineOptionsHtml(product) {
  const options = productOptions(product);
  if (!options.length) return productOptionsHtml(product);

  return `
    <div class="inline-option-picker" aria-label="${t("Opciones", "选项")}">
      <p class="product-options">${t("Opciones", "选项")}:</p>
      ${options.map(option => `
        <label class="inline-option-choice">
          <input type="checkbox" name="productOption-${product.id}" value="${escapeHtml(option)}">
          <span class="option-circle"></span>
          <span>${escapeHtml(option)}</span>
          <input class="inline-option-qty" type="number" min="1" value="1" aria-label="${t("Cantidad", "数量")}">
        </label>
      `).join("")}
    </div>
  `;
}

function money(price) {
  return Number(price).toLocaleString("es-CR");
}

function normalizePhone(phone) {
  return String(phone).replace(/\D/g, "");
}

function normalizeName(name) {
  return String(name).trim().toLowerCase().replace(/\s+/g, " ");
}

function generateOrderId() {
  const lastOrderSeed = JSON.parse(localStorage.getItem("im_last_order_seed") || "{}");
  const now = Date.now();
  let sequence = lastOrderSeed.time === now ? Number(lastOrderSeed.sequence || 0) + 1 : 0;
  let orderId = `${now}${String(sequence).padStart(3, "0")}`;

  while (orders.some(order => String(order.id) === orderId)) {
    sequence++;
    orderId = `${now}${String(sequence).padStart(3, "0")}`;
  }

  localStorage.setItem("im_last_order_seed", JSON.stringify({ time: now, sequence }));
  return orderId;
}

function orderStatusClass(status) {
  return status === "Completado" ? "completed" : "pending";
}

function isFavorite(id) {
  return favorites.includes(id);
}

function toggleFavorite(id) {
  if (isFavorite(id)) {
    favorites = favorites.filter(favoriteId => favoriteId !== id);
  } else {
    favorites.push(id);
  }

  saveData();
  showProducts();
  showFavorites();

  const modal = document.getElementById("productModal");
  if (modal) {
    const favoriteBtn = modal.querySelector(".favorite-btn");
    if (favoriteBtn) {
      favoriteBtn.classList.toggle("active", isFavorite(id));
      favoriteBtn.textContent = isFavorite(id) ? "♥" : "♡";
    }
  }
}

function applyLanguage() {
  document.querySelectorAll("[data-es]").forEach(el => {
    el.textContent = el.dataset[currentLang];
  });

  searchInput.placeholder = t("Buscar productos...", "搜索产品...");
  document.getElementById("customerName").placeholder = t("Nombre completo", "姓名");
  document.getElementById("customerPhone").placeholder = t("Teléfono", "电话");
  document.getElementById("customerAddress").placeholder = t("Dirección", "地址");
  document.getElementById("customerNote").placeholder = t("Nota(opcional)", "备注（可选）");
  statusName.placeholder = t("Nombre cliente", "客户姓名");
  statusPhone.placeholder = t("Teléfono", "电话");
  langBtn.textContent = currentLang === "es" ? "中文" : "Español";

  showProducts();
  showFavorites();
  updateCart();
}

function showProducts() {
  const searchText = searchInput.value.toLowerCase();
  productGrid.innerHTML = "";

  const filtered = products.filter(product => {
    if (!product.price) return false;
    if (hiddenMainCategories.includes(product.category)) return false;

    const matchesSearch =
      product.nameEs.toLowerCase().includes(searchText) ||
      product.nameZh.toLowerCase().includes(searchText);

    const matchesCategory =
      currentCategory === "all" || product.category === currentCategory;

    return matchesSearch && matchesCategory;
  });

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p class="empty-message">${t("No se encontraron productos.", "没有找到产品。")}</p>`;
    return;
  }

  filtered.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <button class="favorite-btn ${isFavorite(product.id) ? "active" : ""}" onclick="event.stopPropagation(); toggleFavorite(${product.id})">
        ${isFavorite(product.id) ? "♥" : "♡"}
      </button>
      <img src="${product.images[0]}" alt="${productName(product)}" onclick="openProduct(${product.id})" loading="lazy" decoding="async">
      <div class="product-info">
        <h3 onclick="openProduct(${product.id})">${productName(product)}</h3>
        ${productSizeHtml(product)}
        ${productInlineOptionsHtml(product)}
        <p class="price">₡${money(product.price)}</p>
        <button onclick="${productOptions(product).length ? `addInlineProductOptions(${product.id}, this)` : `addToCart(${product.id}, this)`}">
          ${t("Agregar al carrito", "加入购物车")}
        </button>
      </div>
    `;

    productGrid.appendChild(card);
  });
}

function showFavorites() {
  if (!favoriteGrid) return;

  favoriteGrid.innerHTML = "";

  favorites = favorites.filter(id => products.some(product =>
    product.id === id &&
    product.price &&
    !hiddenMainCategories.includes(product.category)
  ));
  localStorage.setItem("im_favorites", JSON.stringify(favorites));

  const favoriteProducts = products.filter(product =>
    isFavorite(product.id) &&
    product.price &&
    !hiddenMainCategories.includes(product.category)
  );

  if (favoriteProducts.length === 0) {
    favoriteGrid.innerHTML = `<p class="empty-message">${t("No tienes favoritos todavía.", "你还没有收藏产品。")}</p>`;
    return;
  }

  favoriteProducts.forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <button class="favorite-btn active" onclick="event.stopPropagation(); toggleFavorite(${product.id})">♥</button>
      <img src="${product.images[0]}" alt="${productName(product)}" onclick="openProduct(${product.id})" loading="lazy" decoding="async">
      <div class="product-info">
        <h3 onclick="openProduct(${product.id})">${productName(product)}</h3>
        ${productSizeHtml(product)}
        ${productInlineOptionsHtml(product)}
        <p class="price">₡${money(product.price)}</p>
        <button onclick="${productOptions(product).length ? `addInlineProductOptions(${product.id}, this)` : `addToCart(${product.id}, this)`}">
          ${t("Agregar al carrito", "加入购物车")}
        </button>
      </div>
    `;

    favoriteGrid.appendChild(card);
  });
}

function filterProducts(category) {
  currentCategory = category;
  document.querySelectorAll(".category-card").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === category);
  });
  showProducts();
}

function addToCart(id, button, quantity = 1, option = "") {
  const product = products.find(p => Number(p.id) === Number(id));
  if (!product) return;

  const amount = Math.max(1, Number(quantity || 1));
  const selectedOption = String(option || "").trim();
  const options = productOptions(product);

  if (options.length && !selectedOption) {
    openProduct(id);
    return;
  }

  const existing = cart.find(item => sameCartItem(item, id, selectedOption));

  if (existing) {
    existing.quantity = Number(existing.quantity || 0) + amount;
  } else {
    cart.push({ id: Number(id), quantity: amount, option: selectedOption });
  }

  saveData();
  updateCart();

  if (button) {
    flyToCart(button);
  }
}

function addSelectedProductOption(id, button) {
  const selectedOptions = Array.from(document.querySelectorAll('input[name="productOption"]:checked'));

  if (!selectedOptions.length) {
    alert(t("Elige al menos una opción.", "请至少选择一个选项。"));
    return false;
  }

  selectedOptions.forEach(optionInput => {
    const row = optionInput.closest(".option-choice");
    const quantity = Number(row?.querySelector(".option-qty-input")?.value || 1);
    addToCart(id, null, quantity, optionInput.value);
  });

  if (button) {
    flyToCart(button);
  }

  return true;
}

function addInlineProductOptions(id, button) {
  const card = button.closest(".product-card");
  const selectedOptions = Array.from(card?.querySelectorAll(`input[name="productOption-${id}"]:checked`) || []);

  if (!selectedOptions.length) {
    alert(t("Elige al menos una opción.", "请至少选择一个选项。"));
    return false;
  }

  selectedOptions.forEach(optionInput => {
    const row = optionInput.closest(".inline-option-choice");
    const quantity = Number(row?.querySelector(".inline-option-qty")?.value || 1);
    addToCart(id, null, quantity, optionInput.value);
  });

  if (button) {
    flyToCart(button);
  }

  return true;
}

function flyToCart(button) {
  const card = button.closest(".product-card") || button.closest(".modal-card");
  if (!card) return;

  const img = card.querySelector("img");
  const cartBtn = document.getElementById("cartBtn");
  if (!img || !cartBtn) return;

  const imgRect = img.getBoundingClientRect();
  const cartRect = cartBtn.getBoundingClientRect();

  const clone = img.cloneNode(true);
  clone.classList.add("fly-img");

  clone.style.left = imgRect.left + "px";
  clone.style.top = imgRect.top + "px";

  document.body.appendChild(clone);

  requestAnimationFrame(() => {
    clone.style.left = cartRect.left + "px";
    clone.style.top = cartRect.top + "px";
    clone.style.width = "25px";
    clone.style.height = "25px";
    clone.style.opacity = "0";
  });

  setTimeout(() => {
    clone.remove();

    cartBtn.classList.add("cart-bounce");

    setTimeout(() => {
      cartBtn.classList.remove("cart-bounce");
    }, 450);

  }, 850);
}


function sameCartItem(item, id, option = "") {
  return Number(item.id) === Number(id) && String(item.option || "") === String(option || "");
}

function changeQty(id, amount, option = "") {
  const item = cart.find(i => sameCartItem(i, id, option));
  const product = products.find(p => Number(p.id) === Number(id));
  if (!item || !product) return;

  item.quantity = Math.max(0, Number(item.quantity || 0) + Number(amount || 0));

  if (item.quantity <= 0) {
    cart = cart.filter(i => !sameCartItem(i, id, option));
  }


  saveData();
  updateCart();
}

function removeFromCart(id, option = "") {
  cart = cart.filter(i => !sameCartItem(i, id, option));
  saveData();
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const cartCount = document.getElementById("cartCount");
  const cartTotal = document.getElementById("cartTotal");

  const cleanedCart = cart.map(item => ({
    ...item,
    id: Number(item.id),
    quantity: Number(item.quantity || 0),
    option: String(item.option || "")
  })).filter(item => {
    const quantity = Number(item.quantity);
    return products.some(product => Number(product.id) === Number(item.id)) && quantity > 0;
  });

  if (cleanedCart.length !== cart.length) {
    cart = cleanedCart;
    saveData();
  }

  const totalItems = cart.reduce((sum, item) => sum + Number(item.quantity || 0), 0);
  cartCount.textContent = totalItems;
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-message">${t("Tu carrito está vacío.", "您的购物车是空的。")}</p>`;
    cartTotal.textContent = "0";
    return;
  }

  let total = 0;

  cart.forEach(item => {
    const product = products.find(p => Number(p.id) === Number(item.id));
    if (!product) return;

    const itemTotal = product.price * item.quantity;
    total += itemTotal;

    cartItems.innerHTML += `
      <div class="cart-item">
        <div class="cart-row">
          <img class="cart-item-img" src="${product.images[0] || ""}" alt="${productName(product)}" loading="lazy" decoding="async">
          <div>
            <strong>${productName(product)}</strong>
            ${productSizeHtml(product)}
            ${item.option ? `<p class="product-option-line">${t("Opción", "选项")}: ${item.option}</p>` : ""}
            <p>₡${money(product.price)}</p>
            <p class="item-total">${t("Total de este producto", "此产品总计")}: ₡${money(itemTotal)}</p>
            <button class="remove-btn" onclick="removeFromCart(${product.id}, ${JSON.stringify(item.option || "")})">${t("Quitar", "移除")}</button>
          </div>
          <div class="qty-controls">
            <button class="qty-btn" onclick="changeQty(${product.id}, -1, ${JSON.stringify(item.option || "")})">-</button>
            <span>${item.quantity}</span>
            <button class="qty-btn" onclick="changeQty(${product.id}, 1, ${JSON.stringify(item.option || "")})">+</button>
          </div>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = money(total);
}

function openProduct(id) {
  const product = products.find(p => p.id === id);
  if (!product) return;

  const modal = document.createElement("div");
  modal.className = "modal";
  modal.id = "productModal";

  const gallery = product.images.map(img => `<img src="${img}" onclick="document.getElementById('modalMainImg').src='${img}'" loading="lazy" decoding="async">`).join("");

  modal.innerHTML = `
    <div class="modal-card">
      <button class="close-btn" onclick="closeProduct()">×</button>
      <button class="favorite-btn modal-favorite ${isFavorite(product.id) ? "active" : ""}" onclick="toggleFavorite(${product.id})">
        ${isFavorite(product.id) ? "♥" : "♡"}
      </button>
      <div class="modal-grid">
        <div>
          <img id="modalMainImg" class="modal-main-img" src="${product.images[0]}" alt="${productName(product)}" decoding="async">
          <div class="gallery">${gallery}</div>
        </div>
        <div>
          <h2>${productName(product)}</h2>
          ${productSizeHtml(product)}
          ${productOptionsHtml(product)}
          ${productOptionPickerHtml(product)}
<p class="price">₡${money(product.price)}</p>
          <button class="main-btn" onclick="if (addSelectedProductOption(${product.id}, this)) { closeProduct(); }">
            ${t("Agregar al carrito", "加入购物车")}
          </button>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modal);
}

function closeProduct() {
  const modal = document.getElementById("productModal");
  if (modal) modal.remove();
}

function checkout() {
  updateCart();

  if (cart.length === 0) {
    alert(t("Tu carrito está vacío.", "您的购物车是空的。"));
    return;
  }

  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("customerPhone").value.trim();
  const address = document.getElementById("customerAddress").value.trim();
  const note = document.getElementById("customerNote").value.trim();

  if (!name || !phone || !address) {
    alert(t("Completa tu nombre, teléfono y dirección.", "请填写姓名、电话和地址。"));
    return;
  }

  let total = 0;
  const orderProducts = cart.reduce((items, item) => {
    const product = products.find(p => p.id === item.id);
    if (!product) return items;

    total += product.price * item.quantity;
    items.push({
      nameEs: product.nameEs,
      nameZh: product.nameZh,
      size: productSize(product),
      option: item.option || "",
      quantity: item.quantity,
      price: product.price,
      image: product.images[0] || ""
    });
    return items;
  }, []);

  const order = {
    id: generateOrderId(),
    name,
    phone,
    phoneKey: normalizePhone(phone),
    address,
    note,
    products: orderProducts,
    total,
    status: "Pendiente",
    date: new Date().toLocaleString()
  };

  orders.push(order);

  cart = [];
  saveData();

  const noteText = note ? `. Nota: ${note}` : "";
  const productsText = orderProducts.map(product =>
    `${product.nameEs}${product.size ? ` (${product.size})` : ""}${product.option ? ` - ${product.option}` : ""} x${product.quantity}`
  ).join(", ");
  const message = encodeURIComponent(
    `Nuevo pedido IMPORTADORA MORAZÁN. Nombre: ${name}. Teléfono: ${phone}. Dirección: ${address}. Productos: ${productsText}${noteText}. Total: ₡${money(total)}`
  );

  alert(t(
    "Pedido guardado. Puedes consultar el estado con tu nombre y teléfono. Se abrirá WhatsApp para enviarlo.",
    "订单已保存。你可以用姓名和电话查询状态。WhatsApp 将打开以发送订单。"
  ));
  window.open(`https://wa.me/50671776487?text=${message}`, "_blank");

  updateCart();
  showProducts();
}

function checkOrderStatus() {
  const name = normalizeName(statusName.value);
  const phone = normalizePhone(statusPhone.value);

  statusResult.className = "status-result";

  if (!name || !phone) {
    statusResult.innerHTML = t(
      "Ingresa el nombre cliente y teléfono.",
      "请输入客户姓名和电话。"
    );
    return;
  }

  const matchingOrders = orders.filter(item =>
    normalizeName(item.name) === name && normalizePhone(item.phoneKey || item.phone) === phone
  );

  if (matchingOrders.length === 0) {
    statusResult.classList.add("not-found");
    statusResult.innerHTML = t(
      "No encontramos pedidos con ese nombre y teléfono.",
      "未找到使用该姓名和电话的订单。"
    );
    return;
  }

  const results = matchingOrders.slice().reverse().map(order => {
    const items = order.products.map(product =>
      `${product.nameEs}${product.size ? ` (${product.size})` : ""}${product.option ? ` - ${product.option}` : ""} x${product.quantity}`
    ).join(", ");

    return `
      <div class="status-order ${orderStatusClass(order.status)}">
        <h3>${t("Pedido", "订单")}</h3>
        <p><strong>${t("Estado", "状态")}:</strong> ${order.status}</p>
        <p><strong>${t("Productos", "产品")}:</strong> ${items}</p>
        ${order.note ? `<p><strong>${t("Nota", "备注")}:</strong> ${order.note}</p>` : ""}
        <p><strong>Total:</strong> ₡${money(order.total)}</p>
      </div>
    `;
  }).join("");

  statusResult.classList.add("found");
  statusResult.innerHTML = `
    <h3>${t("Pedidos encontrados", "找到的订单")}</h3>
    ${results}
  `;
}

searchInput.addEventListener("input", showProducts);

langBtn.addEventListener("click", () => {
  currentLang = currentLang === "es" ? "zh" : "es";
  saveData();
  applyLanguage();
});

document.getElementById("cartBtn").addEventListener("click", () => {
  document.getElementById("cartPanel").classList.remove("hidden");
  updateCart();
});

document.getElementById("closeCart").addEventListener("click", () => {
  document.getElementById("cartPanel").classList.add("hidden");
});

document.getElementById("checkoutBtn").addEventListener("click", checkout);
document.getElementById("checkStatusBtn").addEventListener("click", checkOrderStatus);
if (favoriteNavBtn) {
  favoriteNavBtn.addEventListener("click", () => {
    const favoritesSection = document.getElementById("favorites");
    if (favoritesSection) {
      favoritesSection.scrollIntoView({ behavior: "smooth" });
    }
  });
}

applyLanguage();
loadSavedProducts();

const menuBtn=document.getElementById("menuBtn");
const navLinks=document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});
