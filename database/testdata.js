const styles = [
  {
    id: "1",
    productId: "1",
    name: "Forest Green & Black",
    sale_price: "null",
    original_price: "140",
    default_style: "1",
  },
  {
    id: "2",
    productId: "1",
    name: "Desert Brown & Tan",
    sale_price: "null",
    original_price: "140",
    default_style: "0",
  },
  {
    id: "3",
    productId: "1",
    name: "Ocean Blue & Grey",
    sale_price: "100",
    original_price: "140",
    default_style: "0",
  },
  {
    id: "4",
    productId: "1",
    name: "Digital Red & Black",
    sale_price: "null",
    original_price: "140",
    default_style: "0",
  },
  {
    id: "5",
    productId: "1",
    name: "Sky Blue & White",
    sale_price: "100",
    original_price: "140",
    default_style: "0",
  },
  {
    id: "6",
    productId: "1",
    name: "Dark Grey & Black",
    sale_price: "null",
    original_price: "170",
    default_style: "0",
  },
  {
    id: "7",
    productId: "2",
    name: "Black Lenses & Black Frame",
    sale_price: "null",
    original_price: "69",
    default_style: "0",
  },
  {
    id: "8",
    productId: "2",
    name: "Black Lenses & Gold Frame",
    sale_price: "null",
    original_price: "69",
    default_style: "1",
  },
  {
    id: "9",
    productId: "2",
    name: "Gold Lenses & Black Frame",
    sale_price: "null",
    original_price: "69",
    default_style: "0",
  },
  {
    id: "10",
    productId: "2",
    name: "Gold Lenses & Gold Frame",
    sale_price: "null",
    original_price: "69",
    default_style: "0",
  },
];

const features = [
  { id: "1", product_id: "1", feature: "Fabric", value: "Canvas" },
  { id: "2", product_id: "1", feature: "Buttons", value: "Brass" },
  { id: "3", product_id: "2", feature: "Lenses", value: "Ultrasheen" },
  { id: "4", product_id: "2", feature: "UV Protection", value: "null" },
  {
    id: "5",
    product_id: "2",
    feature: "Frames",
    value: "LightCompose",
  },
  { id: "6", product_id: "3", feature: "Fabric", value: "100% Cotton" },
  { id: "7", product_id: "3", feature: "Cut", value: "Skinny" },
  {
    id: "8",
    product_id: "4",
    feature: "Fabric",
    value: "99% Cotton 1% Elastic",
  },
  { id: "9", product_id: "4", feature: "Cut", value: "Loose" },
  { id: "10", product_id: "5", feature: "Sole", value: "Rubber" },
];

const products = [
  {
    id: '1',
    name: 'Camo Onesie',
    slogan: 'Blend in to your crowd',
    description: 'The So Fatigues will wake you up and fit you in. This high energy camo will have you blending in to even the wildest surroundings.',
    category: 'Jackets',
    default_price: '140'
  },
  {
    id: '2',
    name: 'Bright Future Sunglasses',
    slogan: "You've got to wear shades",
    description: "Where you're going you might not need roads, but you definitely need some shades. Give those baby blues a rest and let the future shine bright on these timeless lenses.",
    category: 'Accessories',
    default_price: '69'
  },
  {
    id: '3',
    name: 'Morning Joggers',
    slogan: 'Make yourself a morning person',
    description: "Whether you're a morning person or not.  Whether you're gym bound or not.  Everyone looks good in joggers.",
    category: 'Pants',
    default_price: '40'
  },
  {
    id: '4',
    name: "Slacker's Slacks",
    slogan: 'Comfortable for everything, or nothing',
    description: "I'll tell you how great they are after I nap for a bit.",
    category: 'Pants',
    default_price: '65'
  },
  {
    id: '5',
    name: 'Heir Force Ones',
    slogan: 'A sneaker dynasty',
    description: "Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I'm just a sneaker pro, I love Pumas and shell toes, but can't nothin compare to a fresh crispy white pearl",
    category: 'Kicks',
    default_price: '99'
  },
  {
    id: '6',
    name: 'Pumped Up Kicks',
    slogan: 'Faster than a just about anything',
    description: 'The Pumped Up serves up crisp court style with a modern look. These shoes show off tennis-whites shades and are constructed with a supple leather upper and a classic rubber cupsole.',
    category: 'Kicks',
    default_price: '89'
  },
  {
    id: '7',
    name: 'Blues Suede Shoes',
    slogan: '2019 Stanley Cup Limited Edition',
    description: 'Touch down in the land of the Delta Blues in the middle of the pouring rain',
    category: 'Dress Shoes',
    default_price: '120'
  },
  {
    id: '8',
    name: 'YEasy 350',
    slogan: 'Just jumped over jumpman',
    description: 'These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.',
    category: 'Kicks',
    default_price: '450'
  },
  {
    id: '9',
    name: 'Summer Shoes',
    slogan: 'A risky call in the spring or fall',
    description: 'Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.',
    category: 'Kicks',
    default_price: '59'
  },
  {
    id: '10',
    name: 'Infinity Stone',
    slogan: 'Reality is often disappointing. That is, it was. Now, reality can be whatever I want.',
    description: 'The Infinity Stones are six immensely powerful stone-like objects tied to different aspects of the universe, created by the Cosmic Entities. Each of the stones possesses unique capabilities that have been enhanced and altered by various alien civilizations for millennia.',
    category: 'Accessories',
    default_price: '5000000'
  }]


  const skus = [
    { id: '1', styleId: '1', size: 'XS', quantity: '8' },
    { id: '2', styleId: '1', size: 'S', quantity: '16' },
    { id: '3', styleId: '1', size: 'M', quantity: '17' },
    { id: '4', styleId: '1', size: 'L', quantity: '10' },
    { id: '5', styleId: '1', size: 'XL', quantity: '15' },
    { id: '6', styleId: '1', size: 'XL', quantity: '4' },
    { id: '8', styleId: '2', size: 'XS', quantity: '8' },
    { id: '7', styleId: '2', size: 'S', quantity: '16' },
    { id: '9', styleId: '2', size: 'M', quantity: '17' },
    { id: '10', styleId: '2', size: 'L', quantity: '10' }]

    const related = [{ id: '1', current_product_id: '1', related_product_id: '2' },
    { id: '2', current_product_id: '1', related_product_id: '3' },
    { id: '3', current_product_id: '1', related_product_id: '8' },
    { id: '4', current_product_id: '1', related_product_id: '7' },
    { id: '5', current_product_id: '2', related_product_id: '3' },
    { id: '6', current_product_id: '2', related_product_id: '7' },
    { id: '7', current_product_id: '2', related_product_id: '6' },
    { id: '8', current_product_id: '2', related_product_id: '5' },
    { id: '9', current_product_id: '3', related_product_id: '5' },
    { id: '10', current_product_id: '3', related_product_id: '9' }];

    const photos = [
      {
        id: '1',
        styleId: '1',
        url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1501088430049-71c79fa3283e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '2',
        styleId: '1',
        url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '3',
        styleId: '1',
        url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1549831243-a69a0b3d39e0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '4',
        styleId: '1',
        url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1527522883525-97119bfce82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '5',
        styleId: '1',
        url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1556648202-80e751c133da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '6',
        styleId: '1',
        url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1532543491484-63e29b3c1f5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '8',
        styleId: '2',
        url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1533779183510-8f55a55f15c1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '7',
        styleId: '2',
        url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1560567546-4c6dbc16877b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '9',
        styleId: '2',
        url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1458253329476-1ebb8593a652?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      },
      {
        id: '10',
        styleId: '2',
        url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
        thumbnail_url: 'https://images.unsplash.com/photo-1422557379185-474fa15bf770?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80'
      }]

    module.exports = {styles, features, related, products, skus, photos}