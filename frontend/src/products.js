import img1 from './assets/images/airpods.jpg';
import img2 from './assets/images/alexa.jpeg';
import img3 from './assets/images/camera.jpeg';
import img4 from './assets/images/mouse.jpg';
import img5 from './assets/images/phone.jpg';
import img6 from './assets/images/playstation.jpg';


const products = [
    {
      _id: '1',
      name: 'Apple Airpods Pro (2nd Generation)',
      image: img1,
      description:
        'Bluetooth technology lets you connect it with compatible devices wirelessly High-quality AAC audio offers immersive listening experience Built-in microphone allows you to take calls while working',
      brand: 'Apple',
      category: 'Electronics',
      price: 282.99,
      countInStock: 10,
      rating: 4.5,
      numReviews: 12,
    },
    {
        _id: '2',
        name: 'Amazon Echo Dot 4th Generation',
        image: img2,
        description:
          'Meet Echo Dot - Our most popular smart speaker with a fabric design. It is our most compact smart speaker that fits perfectly into small space',
        brand: 'Amazon',
        category: 'Electronics',
        price: 29.99,
        countInStock: 0,
        rating: 4,
        numReviews: 12,
    },
    
    {
      _id: '3',
      name: 'Cannon EOS 90D DSLR Camera',
      image: img3,
      description:
        'Characterized by versatile imaging specs, the Canon EOS 90D further clarifies itself using a pair of robust focusing systems and an intuitive design',
      brand: 'Cannon',
      category: 'Electronics',
      price: 1438.99,
      countInStock: 5,
      rating: 3,
      numReviews: 12,
    },
    {
        _id: '4',
        name: 'Logitech G-102',
        image: img4,
        description:
          'Get a better handle on your games with this Logitech LIGHTSYNC gaming mouse. The six programmable buttons allow customization for a smooth playing experience',
        brand: 'Logitech',
        category: 'Electronics',
        price: 14.99,
        countInStock: 7,
        rating: 3.5,
        numReviews: 10,
    },
    {
        _id: '5',
        name: 'iPhone 15',
        image: img5,
        description:
          'Introducing the iPhone 15. A transformative double-camera system that adds tons of capability without complexity. An unprecedented leap in battery life',
        brand: 'Apple',
        category: 'Electronics',
        price: 808.99,
        countInStock: 7,
        rating: 4.0,
        numReviews: 8,
    },
    {
      _id: '6',
      name: 'Sony Playstation 5 Digital Edition',
      image: img6,
      description:
        'The ultimate home entertainment center starts with PlayStation. Whether you are into gaming, HD movies, television, music',
      brand: 'Sony',
      category: 'Electronics',
      price: 534.99,
      countInStock: 11,
      rating: 5,
      numReviews: 12,
    },
    
    
  ]
  
  export default products
  