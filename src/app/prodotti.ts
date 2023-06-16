export interface Cellulare {
  id: number;
  modello: string;
  img: string;
  prezzo: number;
  informazioni: string;
}

export const cellulari = [
  {
    id: 0,
    modello: 'iPhone 14 Pro Max',
    img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-pro-max-colors.png',
    prezzo: 899,
    informazioni:
      'iPhone 14 Pro Max ha uno schermo Super Retina XDR all-screen da 6,7 pollici. La parte posteriore è in vetro opaco di alta qualità e presenta una struttura con profilo in acciaio inossidabile dai bordi piatti',
  },
  {
    id: 1,
    modello: 'iPhone 14',
    img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-14-colors-spring-2023.png',
    prezzo: 799,
    informazioni:
      'iPhone 14 ha uno schermo Super Retina XDR all-screen da 6,1 pollici. La parte posteriore è in vetro e presenta una struttura con profilo in alluminio anodizzato dai bordi piatti. Il tasto laterale è sul lato destro del dispositivo',
  },
  {
    id: 2,
    modello: 'iPhone SE 2020',
    img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone-se-3rd-gen-colors.png',
    prezzo: 499,
    informazioni:
      'Lo schermo è da 4,7 pollici (diagonale). La parte anteriore in vetro è piatta con i bordi arrotondati. La parte posteriore è in vetro e presenta una struttura con profilo in alluminio anodizzato.',
  },
  {
    id: 3,
    modello: 'iPhone 13 Pro',
    img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/2022-spring-iphone13-pro-colors.png',
    prezzo: 599,
    informazioni:
      'iPhone 13 Pro ha uno schermo Super Retina XDR all-screen da 6,1 pollici con tecnologia ProMotion. La parte posteriore è in vetro opaco e presenta una struttura con profilo in acciaio inossidabile dai bordi piatti.',
  },
  {
    id: 4,
    modello: 'iPhone 13 Mini',
    img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/2022-iphone13-mini-colors.png',
    prezzo: 399,
    informazioni:
      'iPhone 13 mini ha uno schermo Super Retina XDR all-screen da 5,4 pollici. La parte posteriore è in vetro e presenta una struttura con profilo in alluminio anodizzato dai bordi piatti. Il tasto laterale è sul lato destro del dispositivo.',
  },
  {
    id: 5,
    modello: 'iPhone 12 Pro',
    img: 'https://support.apple.com/library/content/dam/edam/applecare/images/en_US/iphone/iphone12pro/iphone12-pro-colors.jpg',
    prezzo: 299,
    informazioni:
      'iPhone 12 Pro ha un display Super Retina XDR all-screen da 6,1 pollici. La parte posteriore è in vetro opaco e presenta una struttura con profilo in acciaio inossidabile dai bordi piatti. Il tasto laterale è sul lato destro del dispositivo.',
  },
];
