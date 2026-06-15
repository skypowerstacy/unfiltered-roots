export type Product = {
  name: string
  brand: string
  description: string
  category: 'home' | 'food' | 'body' | 'water' | 'air'
  affiliateUrl: string
  swap: string // what it replaces
  price: string
}

// Replace affiliateUrl values with your actual affiliate links
// Amazon Associates: https://www.amazon.com/dp/PRODUCT_ID?tag=YOUR-TAG-20
// ShareASale: use your unique affiliate link from each brand dashboard

export const products: Product[] = [
  // HOME
  {
    name: 'Branch Basics Starter Kit',
    brand: 'Branch Basics',
    description: 'One concentrate cleans your entire home. No toxins, no synthetic fragrance.',
    category: 'home',
    affiliateUrl: 'https://branchbasics.com/?rfsn=YOURCODE', // Replace with your affiliate link
    swap: 'Toxic cleaning sprays',
    price: '$69',
  },
  {
    name: 'Lodge Cast Iron Skillet',
    brand: 'Lodge',
    description: 'The original non-toxic cookware. Lasts forever, costs once.',
    category: 'home',
    affiliateUrl: 'https://www.amazon.com/dp/B00006JSUA?tag=YOURTAG-20', // Replace
    swap: 'Non-stick Teflon pans',
    price: '$34',
  },
  {
    name: 'Stasher Reusable Bags',
    brand: 'Stasher',
    description: 'Silicone food storage that replaces plastic bags entirely.',
    category: 'home',
    affiliateUrl: 'https://www.stasherbag.com/?ref=YOURCODE', // Replace
    swap: 'Ziploc plastic bags',
    price: '$12-22',
  },
  {
    name: 'Pyrex Glass Storage Set',
    brand: 'Pyrex',
    description: 'Glass food storage — no leaching, no microplastics, dishwasher safe.',
    category: 'home',
    affiliateUrl: 'https://www.amazon.com/dp/B00AQUFMOO?tag=YOURTAG-20', // Replace
    swap: 'Plastic Tupperware',
    price: '$35',
  },
  // FOOD
  {
    name: 'Thrive Market Membership',
    brand: 'Thrive Market',
    description: 'Organic and clean products delivered. 25-50% below retail prices.',
    category: 'food',
    affiliateUrl: 'https://thrivemarket.com/r/YOURCODE', // Replace
    swap: 'Conventional grocery store',
    price: '$59/yr',
  },
  {
    name: 'Beeswax Wrap Set',
    brand: 'Bee\'s Wrap',
    description: 'Natural alternative to plastic wrap. Reusable, compostable.',
    category: 'food',
    affiliateUrl: 'https://www.amazon.com/dp/B00VGQLEAS?tag=YOURTAG-20', // Replace
    swap: 'Saran wrap / plastic wrap',
    price: '$18',
  },
  // BODY
  {
    name: 'Native Deodorant',
    brand: 'Native',
    description: 'Aluminum-free deodorant that actually works. Clean ingredient list.',
    category: 'body',
    affiliateUrl: 'https://www.amazon.com/dp/B07B4T2R6H?tag=YOURTAG-20', // Replace
    swap: 'Aluminum-based antiperspirant',
    price: '$14',
  },
  {
    name: 'Earthling Co Shampoo Bar',
    brand: 'The Earthling Co',
    description: 'Plastic-free, sulfate-free shampoo bars. Better for your hair and the planet.',
    category: 'body',
    affiliateUrl: 'https://theearthlingco.com/?ref=YOURCODE', // Replace
    swap: 'Conventional shampoo in plastic bottles',
    price: '$12',
  },
  // WATER
  {
    name: 'Berkey Water Filter',
    brand: 'Berkey',
    description: 'Removes fluoride, chlorine, heavy metals, and more. Countertop, no plumbing.',
    category: 'water',
    affiliateUrl: 'https://www.amazon.com/dp/B001RB3FYS?tag=YOURTAG-20', // Replace
    swap: 'Unfiltered tap water',
    price: '$250',
  },
  // AIR
  {
    name: 'Blueland Clean Essentials Kit',
    brand: 'Blueland',
    description: 'Plastic-free cleaning tablets. Just add water. No harsh chemicals.',
    category: 'home',
    affiliateUrl: 'https://www.blueland.com/?ref=YOURCODE', // Replace
    swap: 'Single-use plastic cleaning bottles',
    price: '$45',
  },
]

export const productsByCategory = (category: Product['category']) =>
  products.filter(p => p.category === category)
