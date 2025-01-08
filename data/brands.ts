// Define interfaces for data structures
interface CarBrand {
  src: string;
  width: number;
  height: number;
  title: string;
  wowDelay: string;
}

interface Car {
  brand: string;
  src: string;
  width: number;
  height: number;
  delay: string;
}

interface CarBrand2 {
  name: string;
  imageSrc: string;
  width: number;
  height: number;
  delay: string;
}

interface BrandBlock {
  iconClass: string;
  title: string;
  link: string;
}

interface CarBrand3 {
  name: string;
  imageSrc: string;
  width: number;
  height: number;
  dataWowDelay: string;
}

interface CarData {
  imgSrc: string;
  title: string;
  width: number;
  height: number;
  delay: string;
}

interface CarBrand4 {
  title: string;
  imageSrc: string;
  width: number;
  height: number;
  wowDelay: string;
}

// Data arrays with type annotations
export const carBrands: CarBrand[] = [
  {
    src: "/images/resource/brand-1.png",
    width: 100,
    height: 100,
    title: "Audi",
    wowDelay: "0ms",
  },
  {
    src: "/images/resource/brand-2.png",
    width: 90,
    height: 90,
    title: "BMW",
    wowDelay: "100ms",
  },
  {
    src: "/images/resource/brand-3.png",
    width: 100,
    height: 100,
    title: "Ford",
    wowDelay: "200ms",
  },
  {
    src: "/images/resource/brand-4.png",
    width: 100,
    height: 100,
    title: "Mercedes Benz",
    wowDelay: "300ms",
  },
  {
    src: "/images/resource/brand-5.png",
    width: 70,
    height: 70,
    title: "Peugeot",
    wowDelay: "400ms",
  },
  {
    src: "/images/resource/brand-6.png",
    width: 80,
    height: 80,
    title: "Volkswagen",
    wowDelay: "500ms",
  },
];

export const cars: Car[] = [
  {
    brand: "Audi",
    src: "/images/resource/brand-1.png",
    width: 100,
    height: 100,
    delay: "0ms",
  },
  {
    brand: "BMW",
    src: "/images/resource/brand-2.png",
    width: 90,
    height: 90,
    delay: "100ms",
  },
  {
    brand: "Ford",
    src: "/images/resource/brand-3.png",
    width: 100,
    height: 100,
    delay: "200ms",
  },
  {
    brand: "Mercedes Benz",
    src: "/images/resource/brand-4.png",
    width: 100,
    height: 100,
    delay: "300ms",
  },
  {
    brand: "Peugeot",
    src: "/images/resource/brand-5.png",
    width: 70,
    height: 70,
    delay: "400ms",
  },
  {
    brand: "Volkswagen",
    src: "/images/resource/brand-6.png",
    width: 80,
    height: 80,
    delay: "500ms",
  },
];

export const carBrands2: CarBrand2[] = [
  {
    name: "Audi",
    imageSrc: "/images/resource/brand-1.png",
    width: 100,
    height: 100,
    delay: "0ms",
  },
  {
    name: "BMW",
    imageSrc: "/images/resource/brand-2.png",
    width: 90,
    height: 90,
    delay: "100ms",
  },
  {
    name: "Ford",
    imageSrc: "/images/resource/brand-3.png",
    width: 100,
    height: 100,
    delay: "200ms",
  },
  {
    name: "Mercedes Benz",
    imageSrc: "/images/resource/brand-4.png",
    width: 100,
    height: 100,
    delay: "300ms",
  },
  {
    name: "Peugeot",
    imageSrc: "/images/resource/brand-5.png",
    width: 70,
    height: 70,
    delay: "400ms",
  },
  {
    name: "Volkswagen",
    imageSrc: "/images/resource/brand-6.png",
    width: 80,
    height: 80,
    delay: "500ms",
  },
];

export const brandBlocks: BrandBlock[] = [
  { iconClass: "flaticon-car", title: "SUV", link: "#" },
  { iconClass: "flaticon-car-1", title: "Sedan", link: "#" },
  { iconClass: "flaticon-van", title: "Hatchback", link: "#" },
  { iconClass: "flaticon-convertible-car", title: "Coupe", link: "#" },
  { iconClass: "flaticon-electric-car-1", title: "Hybrid", link: "#" },
  { iconClass: "flaticon-electric-car-1", title: "Convertible", link: "#" },
  { iconClass: "flaticon-van", title: "Van", link: "#" },
  { iconClass: "flaticon-pick-up-truck", title: "Truck", link: "#" },
  { iconClass: "flaticon-electric-car-2", title: "Electric", link: "#" },
];

export const carBrands3: CarBrand3[] = [
  {
    name: "Audi",
    imageSrc: "/images/resource/brand-1.png",
    width: 100,
    height: 100,
    dataWowDelay: "",
  },
  {
    name: "BMW",
    imageSrc: "/images/resource/brand-2.png",
    width: 90,
    height: 90,
    dataWowDelay: "100ms",
  },
  {
    name: "Ford",
    imageSrc: "/images/resource/brand-3.png",
    width: 100,
    height: 100,
    dataWowDelay: "200ms",
  },
  {
    name: "Mercedes Benz",
    imageSrc: "/images/resource/brand-4.png",
    width: 100,
    height: 100,
    dataWowDelay: "300ms",
  },
  {
    name: "Peugeot",
    imageSrc: "/images/resource/brand-5.png",
    width: 70,
    height: 70,
    dataWowDelay: "400ms",
  },
  {
    name: "Volkswagen",
    imageSrc: "/images/resource/brand-6.png",
    width: 80,
    height: 80,
    dataWowDelay: "500ms",
  },
];

export const carData: CarData[] = [
  {
    imgSrc: "/images/resource/brand5-1.png",
    title: "Audi",
    width: 70,
    height: 70,
    delay: "0ms",
  },
  {
    imgSrc: "/images/resource/brand5-2.png",
    title: "BMW",
    width: 66,
    height: 66,
    delay: "100ms",
  },
  {
    imgSrc: "/images/resource/brand5-3.png",
    title: "Ford",
    width: 76,
    height: 76,
    delay: "200ms",
  },
  {
    imgSrc: "/images/resource/brand5-4.png",
    title: "Mercedes Benz",
    width: 78,
    height: 78,
    delay: "300ms",
  },
  {
    imgSrc: "/images/resource/brand5-5.png",
    title: "Peugeot",
    width: 46,
    height: 46,
    delay: "400ms",
  },
  {
    imgSrc: "/images/resource/brand5-6.png",
    title: "Volkswagen",
    width: 50,
    height: 50,
    delay: "500ms",
  },
  {
    imgSrc: "/images/resource/brand5-7.png",
    title: "Bentley",
    width: 76,
    height: 37,
    delay: "500ms",
  },
  {
    imgSrc: "/images/resource/brand5-8.png",
    title: "Nissan",
    width: 54,
    height: 45,
    delay: "500ms",
  },
  {
    imgSrc: "/images/resource/brand5-9.png",
    title: "Jeep",
    width: 62,
    height: 24,
    delay: "500ms",
  },
  {
    imgSrc: "/images/resource/brand10-10.png",
    title: "Skoda",
    width: 100,
    height: 11,
    delay: "500ms",
  },
];

export const carBrands4: CarBrand4[] = [
  {
    title: "Audi",
    imageSrc: "/images/resource/brand-1.png",
    width: 100,
    height: 100,
    wowDelay: "0ms",
  },
  {
    title: "BMW",
    imageSrc: "/images/resource/brand-2.png",
    width: 90,
    height: 90,
    wowDelay: "100ms",
  },
  {
    title: "Ford",
    imageSrc: "/images/resource/brand-3.png",
    width: 100,
    height: 100,
    wowDelay: "200ms",
  },
  {
    title: "Mercedes Benz",
    imageSrc: "/images/resource/brand-4.png",
    width: 100,
    height: 100,
    wowDelay: "300ms",
  },
  {
    title: "Peugeot",
    imageSrc: "/images/resource/brand-5.png",
    width: 70,
    height: 70,
    wowDelay: "400ms",
  },
  {
    title: "Volkswagen",
    imageSrc: "/images/resource/brand-6.png",
    width: 80,
    height: 80,
    wowDelay: "500ms",
  },
];
