import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products = [
    { id: 1, name: 'LUKA-3 BasketballShoe', price: 8400, image: '/assets/shoes1.jpg',description: 'Comfortable shoes perfect for sports and casual wear.',rating: 5,
      MRP:12000, Offer:30
     },
     { id: 2, name: 'Mens t-shirt', price: 799, image: 'assets/t-shirts.webp',description: 'Mens Super Soft Cotton Oversized T-Shirt.',rating: 4,
       MRP:1499, Offer:47
      },
      { id: 3, name: 'Jean', price: 999, image: 'assets/jean.jpg',description: 'Men Relaxed Fit Mid Rise Blue Jeans',rating: 4, 
       MRP:1999, Offer:50
     },
      { id: 4, name: 'Cycle', price:7698, image: 'assets/Cycle.jpg',description: 'CRADIAC GLOBETROTTER | Fully Fitted | Suspension Fork | Dual Disc 26 T (inch) Mountain Cycle  (7 Gear, Black, Only Front Suspension) ',rating: 4,
        MRP:26199, Offer:70
      },
     { id: 5, name: 'Canon Camera EOS R10', price: 59999, image: 'assets/camera.jpg',description: 'Canon EOS R10 Mirrorless Camera Body with RF-S 18 - 45 mm f/4.5 - 6.3 IS STM Lens  (Black) ',rating: 4,
      MRP:12000, Offer:30
     },
    { id: 6, name: 'iphone 14', price: 59900, image: 'assets/iphone.avif',description: 'Apple iPhone 14 (Blue, 256 GB)' ,rating: 5,
      MRP:79900, Offer:14
    },
    { id: 7, name: 'Samsung TV', price: 26250, image: 'assets/TV.jpg',description: 'Samsung FHD Smart TV' ,rating: 5,
      MRP:35000, Offer:25
    },
    { id: 8, name: 'Lenova Laptop', price: 34999, image: '/assets/Laptop.jpg',description: 'Lenova LaptopLenovo IdeaPad 3 Intel Core i5 12th gen',rating: 5, 
      MRP:49999, Offer:30
    },
    { id: 9, name: 'Watch', price: 4499, image: 'assets/watch.jpg',description: 'Mens watch ',rating: 4,
      MRP:5999, Offer:25
    },
    { id: 10, name: 'Boat Headphones', price: 3999, image: 'assets/headphone.png',description: 'boAt Rockerz 430 w/ Beast Mode Bluetooth',rating: 3,
      MRP:7990, Offer:49
    },
    { id: 11, name: 'Dell Bag', price: 1275, image: 'assets/bag.webp',description: '21.65 L Backpack ',rating: 3,
      MRP:1500, Offer:25
     },
   
    { id: 12, name: 'Mustang car', price: 2975, image: 'assets/car.jpg',description: 'KIDIGO 1 32 Fod Mustang Gt500 Model Car Sports Metal car toy  (Blue, Pack of: 1',rating: 4,
      MRP:3500, Offer:15
     },
  ];

  getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(p => p.id === id);
  }
}