const defaultProducts = [];

const seededProducts = [
  {
    id: 9001,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1900,
    category: "stuffed",
    images: ["images/cojin-cuello-gato.png"]
  },
  {
    id: 9002,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4800,
    category: "stuffed",
    images: ["images/peluche-cinnamoroll.png"]
  },
  {
    id: 9003,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1700,
    category: "stuffed",
    images: ["images/peluche-tony-tony-chopper.png"]
  },
  {
    id: 9004,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1995,
    category: "stuffed",
    images: ["images/peluche-goku.png"]
  },
  {
    id: 9005,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1600,
    category: "stuffed",
    images: ["images/peluche-goku-super-saiyan.png"]
  },
  {
    id: 9006,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1600,
    category: "stuffed",
    images: ["images/set-peluches-dragon-ball.png"]
  },
  {
    id: 9007,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 2000,
    category: "stuffed",
    images: ["images/peluche-payasito.png"]
  },
  {
    id: 9008,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 1700,
    category: "stuffed",
    images: ["images/peluche-monkey-d-luffy.png"]
  },
  {
    id: 9009,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 2850,
    category: "stuffed",
    images: ["images/peluche-woodstock.png"]
  },
  {
    id: 9010,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 8995,
    category: "stuffed",
    images: ["images/peluche-woodstock-gigante.png"]
  },
  {
    id: 9011,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4500,
    category: "stuffed",
    images: ["images/peluche-gato-gris.png"]
  },
  {
    id: 9012,
    nameEs: "Peluche",
    nameZh: "毛绒玩具",
    price: 4500,
    category: "stuffed",
    images: ["images/peluche-gato-acostado.png"]
  },
  {
    id: 9013,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: ["images/arco-actividades-oceano.png"]
  },
  {
    id: 9014,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: ["images/arco-actividades-abeja.png"]
  },
  {
    id: 9015,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: ["images/gimnasio-bebe-bosque.png"]
  },
  {
    id: 9016,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 6500,
    category: "baby",
    images: ["images/gimnasio-bebe-oceano.png"]
  },
  {
    id: 9017,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 12000,
    category: "baby",
    images: ["images/gimnasio-bebe-dinosaurios.png"]
  },
  {
    id: 9018,
    nameEs: "Juguete bebé",
    nameZh: "婴儿玩具",
    price: 12000,
    category: "baby",
    images: ["images/gimnasio-bebe-rosado.png"]
  },
  {
    id: 9019,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: ["images/alfombra-redonda-azul.png"]
  },
  {
    id: 9020,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: ["images/alfombra-redonda-rosada.png"]
  },
  {
    id: 9021,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: ["images/alfombra-redonda-cafe.png"]
  },
  {
    id: 9022,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: ["images/alfombra-redonda-beige.png"]
  },
  {
    id: 9023,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: ["images/alfombra-redonda-rosa.png"]
  },
  {
    id: 9024,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: ["images/alfombra-redonda-gris.png"]
  },
  {
    id: 9025,
    nameEs: "Alfombra",
    nameZh: "地毯",
    price: 5995,
    category: "rugs",
    images: ["images/alfombra-redonda-negra.png"]
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
const SERVER_API_TIMEOUT_MS = 700;
const MAX_UPLOAD_IMAGES = 2;
const MAX_UPLOAD_IMAGE_SIDE = 640;
const UPLOAD_IMAGE_QUALITY = 0.52;
const EMERGENCY_UPLOAD_IMAGE_SIDE = 420;
const EMERGENCY_UPLOAD_IMAGE_QUALITY = 0.38;

let products = seedProducts(normalizeProducts(storedProducts()));
let orders = JSON.parse(localStorage.getItem("im_orders")) || [];
let uploadedImageFiles = [];
let isSavingProduct = false;
let serverApiAvailable = false;

const ADMIN_USER = "admin";
const ADMIN_PASSWORD = "morazan123";
const ADMIN_PASSWORD_HASH = "6677d8db9844a8f629b683b8eaaf7c1a71ed9614fe7909c8d4313e399df4b548";
const ADMIN_SESSION_KEY = "im_admin_session_expires";
const ADMIN_LOCK_KEY = "im_admin_lock_until";
const ADMIN_ATTEMPTS_KEY = "im_admin_failed_attempts";
const ADMIN_SESSION_MS = 2 * 60 * 60 * 1000;
const ADMIN_LOCK_MS = 5 * 60 * 1000;
const ADMIN_MAX_ATTEMPTS = 5;

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

function saveDeletedProductIds(ids) {
  localStorage.setItem(DELETED_PRODUCTS_KEY, JSON.stringify([...ids]));
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

function isStaticHosting() {
  const host = window.location.hostname;
  return window.location.protocol === "file:" || !host || host.endsWith("github.io");
}

function disableServerApi() {
  serverApiAvailable = false;
}

async function serverApiFetch(path, options = {}) {
  if (!serverApiAvailable) {
    const error = new Error("No hay API de servidor disponible.");
    error.localOnly = true;
    throw error;
  }

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), SERVER_API_TIMEOUT_MS);

  try {
    return await fetch(path, {
      ...options,
      signal: controller.signal
    });
  } catch (error) {
    if (error.name === "AbortError") {
      disableServerApi();
    }
    throw error;
  } finally {
    clearTimeout(timeout);
  }
}

async function readServerCatalog() {
  try {
    const response = await fetch(`../catalog.json?v=${Date.now()}`, { cache: "no-store" });
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

async function writeServerCatalog(customProducts, deletedIds) {
  const response = await serverApiFetch("/api/catalog", {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    credentials: "same-origin",
    body: JSON.stringify({ customProducts, deletedIds })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    const error = new Error(errorData.error || "No se pudo guardar en el servidor.");
    error.status = response.status;
    if (response.status !== 401) disableServerApi();
    throw error;
  }

  return response.json();
}

async function loginToServer(username, password) {
  return true;
}

async function saveProductsData() {
  const customProducts = customProductsForStorage();
  await writeProductDatabase(customProducts);

  localStorage.removeItem(LEGACY_PRODUCTS_KEY);
  localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
}

function showAutosaveStatus(message = "Guardado automático.") {
  const status = document.getElementById("autosaveStatus");
  if (!status) return;

  status.textContent = `${message} ${new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit"
  })}`;
}

async function loadSavedProducts() {
  try {
    const serverCatalog = await readServerCatalog();

    if (serverCatalog) {
      let savedProducts = [];

      try {
        savedProducts = await readProductDatabase();
      } catch (error) {
        console.warn("No se pudo cargar IndexedDB.", error);
      }

      const deletedIds = new Set([
        ...(serverCatalog.deletedIds || []),
        ...deletedProductIds()
      ]);
      saveDeletedProductIds(deletedIds);
      products = seedProducts(normalizeProducts(mergeProductLists(
        serverCatalog.customProducts || [],
        savedProducts
      )));
      localStorage.removeItem(LEGACY_PRODUCTS_KEY);
      localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
      return;
    }

    const savedProducts = await readProductDatabase();

    if (savedProducts.length) {
      products = seedProducts(normalizeProducts(savedProducts));
      return;
    }

    const customProducts = customProductsForStorage();

    if (customProducts.length) {
      await writeProductDatabase(customProducts);
      products = seedProducts(normalizeProducts(customProducts));
    }

    localStorage.removeItem(LEGACY_PRODUCTS_KEY);
    localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
  } catch (error) {
    console.warn("No se pudo cargar IndexedDB.", error);
  }
}

function saveData() {
  localStorage.removeItem(LEGACY_PRODUCTS_KEY);
  localStorage.removeItem(CUSTOM_PRODUCTS_KEY);
  localStorage.setItem("im_orders", JSON.stringify(orders));
}

function publishableProducts() {
  return normalizeProducts(products)
    .map(product => {
      const size = productSize(product);
      return {
        ...product,
        ...(size ? { size } : {})
      };
    })
    .sort((a, b) => Number(a.id) - Number(b.id));
}

function exportProducts() {
  if (!requireAdmin()) return;

  const catalog = publishableProducts();
  const catalogData = {
    customProducts: catalog,
    deletedIds: [...deletedProductIds()]
  };
  const blob = new Blob([JSON.stringify(catalogData, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = "catalog.json";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);

  alert("Catálogo descargado como catalog.json. Sube ese archivo a GitHub junto a index.html para publicar los productos.");
}

function readCatalogFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(new Error("No se pudo leer el archivo."));
    reader.readAsText(file);
  });
}

async function importProducts(event) {
  if (!requireAdmin()) return;

  const input = event.target;
  const file = input.files && input.files[0];

  if (!file) return;

  try {
    const text = await readCatalogFile(file);
    const importedCatalog = JSON.parse(text);
    const importedProducts = Array.isArray(importedCatalog)
      ? importedCatalog
      : importedCatalog.customProducts;

    if (!Array.isArray(importedProducts)) {
      throw new Error("El catálogo debe ser una lista de productos.");
    }

    saveDeletedProductIds(new Set(importedCatalog.deletedIds || []));
    products = seedProducts(normalizeProducts(importedProducts));
    await saveProductsData();
    saveData();
    renderProducts();
    showAutosaveStatus("Catálogo importado y guardado.");
    alert("Catálogo importado correctamente.");
  } catch (error) {
    alert(`No se pudo importar el catálogo. ${error.message}`);
  } finally {
    input.value = "";
  }
}

async function hashText(text) {
  if (!window.crypto || !crypto.subtle) {
    throw new Error("Secure password check is not available in this browser.");
  }

  const encoded = new TextEncoder().encode(text);
  const buffer = await crypto.subtle.digest("SHA-256", encoded);
  return Array.from(new Uint8Array(buffer))
    .map(byte => byte.toString(16).padStart(2, "0"))
    .join("");
}

function isAdminLoggedIn() {
  const expires = Number(sessionStorage.getItem(ADMIN_SESSION_KEY));
  return expires && Date.now() < expires;
}

async function showAdmin() {
  sessionStorage.setItem(ADMIN_SESSION_KEY, String(Date.now() + ADMIN_SESSION_MS));
  localStorage.removeItem("im_admin_logged");
  document.getElementById("loginScreen").classList.add("hidden");
  document.getElementById("adminApp").classList.remove("hidden");
  renderProducts();
  loadSavedProducts().then(renderProducts);
}

function requireAdmin() {
  if (isAdminLoggedIn()) return true;

  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  document.getElementById("loginScreen").classList.remove("hidden");
  document.getElementById("adminApp").classList.add("hidden");
  alert("Tu sesión expiró. Inicia sesión otra vez.");
  return false;
}

function recordFailedLogin() {
  const attempts = Number(localStorage.getItem(ADMIN_ATTEMPTS_KEY) || "0") + 1;

  if (attempts >= ADMIN_MAX_ATTEMPTS) {
    localStorage.setItem(ADMIN_LOCK_KEY, String(Date.now() + ADMIN_LOCK_MS));
    localStorage.removeItem(ADMIN_ATTEMPTS_KEY);
    alert("Demasiados intentos. Intenta de nuevo en 5 minutos.");
    return;
  }

  localStorage.setItem(ADMIN_ATTEMPTS_KEY, String(attempts));
  alert("Usuario o contraseña incorrecta.");
}

async function login() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const lockedUntil = Number(localStorage.getItem(ADMIN_LOCK_KEY) || "0");
  let passwordMatches = pass === ADMIN_PASSWORD;
  let passwordHash = "";

  if (!passwordMatches) {
    try {
      passwordHash = await hashText(pass);
      passwordMatches = passwordHash === ADMIN_PASSWORD_HASH;
    } catch (error) {
      passwordMatches = false;
    }
  }

  if (user === ADMIN_USER && passwordMatches) {
    await loginToServer(user, pass);
    localStorage.removeItem(ADMIN_ATTEMPTS_KEY);
    localStorage.removeItem(ADMIN_LOCK_KEY);
    showAdmin();
    return;
  }

  if (Date.now() < lockedUntil) {
    const minutes = Math.ceil((lockedUntil - Date.now()) / 60000);
    alert(`Demasiados intentos. Intenta de nuevo en ${minutes} minuto(s).`);
    return;
  }

  recordFailedLogin();
}

function logout() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  localStorage.removeItem("im_admin_logged");
  location.reload();
}

function showTab(tab) {
  if (!requireAdmin()) return;

  document.getElementById("productsTab").classList.toggle("hidden", tab !== "products");
}

function categoryName(cat) {
  const names = {
    bags: "Mochilas",
    purses: "Carteras",
    socks: "Medias",
    shoes: "Calzado",
    men: "Artículo Hombre",
    rain: "Artículos lluvia",
    home: "Hogar",
    termos: "Termos",
    stuffed: "Peluches",
    toys: "Juguetes",
    baby: "Productos para bebé",
    blankets: "Cobijas",
    pajamas: "Pijamas",
    rugs: "Alfombras"
  };
  return names[cat] || cat;
}

function adminImageSrc(src) {
  return src && src.startsWith("images/") ? `../${src}` : src;
}

function productSize(product) {
  return product.size || productSizes[product.id] || "";
}

function renderProducts() {
  const list = document.getElementById("productList");
  list.innerHTML = "";

  if (products.length === 0) {
    list.innerHTML = "<p>No hay productos.</p>";
    return;
  }

  products.forEach(product => {
    const size = productSize(product);
    const productMeta = [
      categoryName(product.category),
      size ? `Tamaño: ${size}` : "",
      `₡${Number(product.price).toLocaleString("es-CR")}`
    ].filter(Boolean).join(" · ");

    list.innerHTML += `
      <div class="product-card">
        <img src="${adminImageSrc(product.images[0]) || ""}" alt="${product.nameEs}" loading="lazy" decoding="async">
        <div>
          <h3>${product.nameEs}</h3>
          <p>${productMeta}</p>
        </div>
        <div class="actions">
          <button onclick="editProduct(${product.id})">Editar</button>
          <button class="delete" onclick="deleteProduct(${product.id})">Borrar</button>
        </div>
      </div>
    `;
  });
}

function openProductForm() {
  if (!requireAdmin()) return;

  document.getElementById("formTitle").textContent = "Agregar producto";
  document.getElementById("productId").value = "";
  document.getElementById("nameEs").value = "";
  document.getElementById("nameZh").value = "";
  document.getElementById("price").value = "";
  document.getElementById("size").value = "";
  document.getElementById("category").value = "bags";
  document.getElementById("imageUpload").value = "";
  uploadedImageFiles = [];
  hidePreviews();
  document.getElementById("productFormModal").classList.remove("hidden");
}

function closeProductForm() {
  document.getElementById("productFormModal").classList.add("hidden");
}

function fileToBase64(file) {
  return new Promise(resolve => {
    if (!file) {
      resolve("");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(file);
  });
}

function fileToCompressedImage(file, maxSide = MAX_UPLOAD_IMAGE_SIDE, quality = UPLOAD_IMAGE_QUALITY) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }

    const image = new Image();
    const objectUrl = URL.createObjectURL(file);

    image.onload = () => {
      URL.revokeObjectURL(objectUrl);

      const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
      const canvas = document.createElement("canvas");
      canvas.width = Math.max(1, Math.round(image.width * scale));
      canvas.height = Math.max(1, Math.round(image.height * scale));

      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      canvas.toBlob(blob => {
        if (!blob) {
          fileToBase64(file).then(resolve);
          return;
        }

        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject(new Error("No se pudo preparar la imagen."));
        reader.readAsDataURL(blob);
      }, "image/jpeg", quality);
    };

    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("No se pudo leer la imagen. Intenta con una foto JPG o PNG."));
    };

    image.src = objectUrl;
  });
}

function filesToBase64(fileInput, maxSide = MAX_UPLOAD_IMAGE_SIDE, quality = UPLOAD_IMAGE_QUALITY) {
  const files = uploadedImageFiles.length ? uploadedImageFiles : Array.from(fileInput.files || []);

  if (!files.length) {
    return Promise.resolve([]);
  }

  return Promise.all(files.map(file => fileToCompressedImage(file, maxSide, quality)));
}

function imageFilesFromList(fileList) {
  return Array.from(fileList || []).filter(file =>
    file.type.startsWith("image/") || /\.(jpe?g|png|webp|gif)$/i.test(file.name)
  );
}

function setUploadFiles(files) {
  const input = document.getElementById("imageUpload");
  const selectedFiles = files.slice(0, MAX_UPLOAD_IMAGES);

  if (files.length > MAX_UPLOAD_IMAGES) {
    alert(`Puedes subir máximo ${MAX_UPLOAD_IMAGES} fotos por producto.`);
  }

  uploadedImageFiles = selectedFiles;

  try {
    const dataTransfer = new DataTransfer();
    selectedFiles.forEach(file => dataTransfer.items.add(file));
    input.files = dataTransfer.files;
  } catch (error) {
    input.value = "";
  }

  renderImagePreviews(selectedFiles.map(file => URL.createObjectURL(file)));
}

function productFromForm(idValue, images, oldProduct, nameEs, nameZh, price) {
  return {
    id: idValue ? Number(idValue) : Date.now(),
    nameEs,
    nameZh: nameZh || nameEs,
    price,
    size: document.getElementById("size").value.trim(),
    category: document.getElementById("category").value,
    images: images.length ? images : oldProduct?.images || ["https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=900"]
  };
}

function applyProductToList(product, idValue) {
  if (idValue) {
    products = products.map(p => p.id === Number(idValue) ? product : p);
  } else {
    products = [...products, product];
  }
}

function isStorageFullError(error) {
  return error && (
    error.name === "QuotaExceededError" ||
    error.name === "NS_ERROR_DOM_QUOTA_REACHED" ||
    error.code === 22 ||
    error.code === 1014
  );
}

async function saveProduct() {
  if (!requireAdmin()) return;
  if (isSavingProduct) return;

  const saveButton = document.querySelector(".save-btn");
  const idValue = document.getElementById("productId").value;
  const oldProduct = products.find(p => p.id === Number(idValue));
  const nameEs = document.getElementById("nameEs").value.trim();
  const nameZh = document.getElementById("nameZh").value.trim();
  const price = Number(document.getElementById("price").value);

  if (!nameEs || !price) {
    alert("Completa el nombre, precio y categoría.");
    return;
  }

  isSavingProduct = true;
  if (saveButton) {
    saveButton.disabled = true;
    saveButton.textContent = "Guardando...";
  }

  try {
    const imageInput = document.getElementById("imageUpload");
    const uploadedImages = await filesToBase64(imageInput);
    const images = uploadedImages.length ? uploadedImages : oldProduct?.images || [];
    let product = productFromForm(idValue, images, oldProduct, nameEs, nameZh, price);

    const oldProducts = products;
    applyProductToList(product, idValue);

    try {
      await saveProductsData();
      saveData();
    } catch (error) {
      products = oldProducts;

      if (uploadedImageFiles.length && isStorageFullError(error)) {
        try {
          const smallImages = await filesToBase64(
            imageInput,
            EMERGENCY_UPLOAD_IMAGE_SIDE,
            EMERGENCY_UPLOAD_IMAGE_QUALITY
          );

          product = productFromForm(idValue, smallImages, oldProduct, nameEs, nameZh, price);
          applyProductToList(product, idValue);
          await saveProductsData();
          saveData();
          showAutosaveStatus("Producto guardado automáticamente.");
          alert("La foto era muy pesada, entonces la guardé más pequeña.");
        } catch (retryError) {
          products = oldProducts;
          alert("Todavía no se pudo guardar. El navegador está lleno. Borra un producto viejo o usa una foto más pequeña.");
          return;
        }
      } else {
        alert("No se pudo guardar el producto. Intenta otra vez.");
        return;
      }
    }

    uploadedImageFiles = [];
    closeProductForm();
    renderProducts();
    showAutosaveStatus("Producto guardado automáticamente.");
  } catch (error) {
    alert(error.message || "No se pudo guardar el producto.");
  } finally {
    isSavingProduct = false;
    if (saveButton) {
      saveButton.disabled = false;
      saveButton.textContent = "Guardar producto";
    }
  }
}

function editProduct(id) {
  if (!requireAdmin()) return;

  const product = products.find(p => p.id === id);
  if (!product) return;

  document.getElementById("formTitle").textContent = "Editar producto";
  document.getElementById("productId").value = product.id;
  document.getElementById("nameEs").value = product.nameEs;
  document.getElementById("nameZh").value = product.nameZh;
  document.getElementById("price").value = product.price;
  document.getElementById("size").value = productSize(product);
  document.getElementById("category").value = product.category;
  document.getElementById("imageUpload").value = "";
  uploadedImageFiles = [];

  showExistingPreviews(product.images);

  document.getElementById("productFormModal").classList.remove("hidden");
}

async function deleteProduct(id) {
  if (!requireAdmin()) return;

  if (!confirm("¿Seguro que quieres borrar este producto?")) return;

  if (seededProducts.some(product => product.id === id)) {
    const deletedIds = deletedProductIds();
    deletedIds.add(id);
    saveDeletedProductIds(deletedIds);
  }

  products = products.filter(p => p.id !== id);
  await saveProductsData();
  saveData();
  renderProducts();
  showAutosaveStatus("Producto borrado y guardado.");
}

function renderImagePreviews(images) {
  const previewList = document.getElementById("imagePreviewList");
  previewList.innerHTML = "";

  if (!images.length) {
    previewList.style.display = "none";
    return;
  }

  images.forEach(src => {
    const preview = document.createElement("img");
    preview.src = adminImageSrc(src);
    preview.className = "image-preview";
    previewList.appendChild(preview);
  });

  previewList.style.display = "grid";
}

function setupImagePreview(inputId) {
  const input = document.getElementById(inputId);
  const dropZone = document.getElementById("imageDropZone");

  input.addEventListener("change", () => {
    setUploadFiles(imageFilesFromList(input.files));
  });

  dropZone.addEventListener("click", () => input.click());

  dropZone.addEventListener("dragover", event => {
    event.preventDefault();
    dropZone.classList.add("drag-over");
  });

  dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("drag-over");
  });

  dropZone.addEventListener("drop", event => {
    event.preventDefault();
    dropZone.classList.remove("drag-over");

    const files = imageFilesFromList(event.dataTransfer.files);

    if (!files.length) {
      alert("Arrastra solo imágenes.");
      return;
    }

    setUploadFiles(files);
  });
}

function showExistingPreviews(images = []) {
  renderImagePreviews(images.filter(Boolean));
}

function hidePreviews() {
  renderImagePreviews([]);
}

setupImagePreview("imageUpload");

localStorage.removeItem("im_admin_logged");

if (isAdminLoggedIn()) {
  showAdmin();
} else {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
}
