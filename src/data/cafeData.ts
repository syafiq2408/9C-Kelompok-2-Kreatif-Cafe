import menuIcedCoffeeImg from '../assets/images/menu_iced_coffee_1794284968602.jpg';
import latteArtCroissantImg from '../assets/images/cafe_latte_art_croissant_1794205419351.jpg';
import menuMatchaDrinkImg from '../assets/images/menu_matcha_drink_1794284969791.jpg';
import matchaSignatureImg from '../assets/images/cafe_matcha_signature_1794205420791.jpg';
import menuRiceBowlImg from '../assets/images/menu_rice_bowl_1794284969794.jpg';
import menuBakeryPastryImg from '../assets/images/menu_bakery_pastry_1794284970350.jpg';

export interface MenuItem {
  id: string;
  name: string;
  category: 'kopi' | 'non-kopi' | 'makanan' | 'snack';
  price: number;
  description: string;
  tag?: string;
  isStudentDeal?: boolean;
  calories?: string;
  tasteNotes?: string;
  popular?: boolean;
  imageUrl?: string;
}

export interface CafeFacility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  detail: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
  favoriteItem: string;
}

export const CAFE_INFO = {
  name: 'House of Laraga',
  subName: 'SMPIT Citra Az-Zahra',
  tagline: 'Where Ideas Meet Specialty Coffee, Inspiration, and Fellowship',
  address: 'Komplek Taman Alfa Indah Blok K-2, RT. 007 / RW. 007, Kelurahan Petukangan Utara, Kecamatan Pesanggrahan, Kota Administrasi Jakarta Selatan, DKI Jakarta 12260',
  shortLocation: 'Creativity Building 1st Floor (Next to Central Library & Campus Mosque)',
  phone: '+62 812 6261 5222',
  whatsappDigits: '6281262615222',
  email: 'houseoflaraga@citraazzahra.sch.id',
  instagram: '@houseoflaraga.citraazzahra',
  hours: [
    { days: 'Monday - Friday', time: '10:00 AM - 10:00 PM', note: 'Open for students, faculty, parents & visitors (Friday prayer break 11:15 AM - 1:00 PM)' },
    { days: 'Saturday & Sunday', time: 'Closed', note: 'Weekend Break' },
    { days: 'National Holidays', time: 'Closed', note: 'Public Holidays' }
  ],
  studentDiscountPct: 15
};

export const MENU_ITEMS: MenuItem[] = [
  // COFFEE
  {
    id: 'k-1',
    name: 'Signature Laraga Palm Sugar Coffee',
    category: 'kopi',
    price: 18000,
    description: 'Indonesian Arabica-Robusta espresso blend, velvety fresh milk, and organic liquid palm sugar with roasted undertones.',
    tag: 'Signature Best Seller',
    isStudentDeal: true,
    calories: '180 kcal',
    tasteNotes: 'Caramelly, bold, velvety balance',
    popular: true,
    imageUrl: menuIcedCoffeeImg
  },
  {
    id: 'k-2',
    name: 'Artisan Caffe Latte (Hot / Iced)',
    category: 'kopi',
    price: 20000,
    description: 'Double ristretto with silky microfoam steamed milk and leaf latte art handcrafted by student baristas.',
    tag: 'Barista Choice',
    isStudentDeal: false,
    calories: '140 kcal',
    tasteNotes: 'Nutty, smooth, hint of chocolate',
    popular: true,
    imageUrl: latteArtCroissantImg
  },
  {
    id: 'k-3',
    name: 'Manual Brew V60 Flores Bajawa',
    category: 'kopi',
    price: 22000,
    description: 'Single-origin Arabica from the volcanic highlands of Flores Bajawa, pour-over brewed for floral aromatics and clean body.',
    tag: 'Single Origin',
    isStudentDeal: false,
    calories: '5 kcal',
    tasteNotes: 'Floral, citrusy, sweet tobacco note',
    popular: false,
    imageUrl: latteArtCroissantImg
  },
  {
    id: 'k-4',
    name: 'Az-Zahra Iced Americano',
    category: 'kopi',
    price: 15000,
    description: 'Double shot pure espresso pulled over crystal-clear ice and chilled mineral water. An ideal study companion.',
    tag: 'Study Focus',
    isStudentDeal: true,
    calories: '5 kcal',
    tasteNotes: 'Bright acidity, clean finish, refreshing',
    popular: false,
    imageUrl: menuIcedCoffeeImg
  },
  {
    id: 'k-5',
    name: 'Laraga Caramel Macchiato',
    category: 'kopi',
    price: 24000,
    description: 'Rich espresso layered over vanilla-infused milk, finished with a house-crafted buttery caramel sauce drizzle.',
    tag: 'Sweet & Savory',
    isStudentDeal: false,
    calories: '220 kcal',
    tasteNotes: 'Sweet buttery caramel, rich espresso layer',
    popular: true,
    imageUrl: menuIcedCoffeeImg
  },
  {
    id: 'k-6',
    name: 'Pandan Fragrant Coffee Latte',
    category: 'kopi',
    price: 19000,
    description: 'Real screwpine pandan leaf extract paired smoothly with cold fresh milk and espresso for a nostalgic botanical aroma.',
    tag: 'Botanical Aroma',
    isStudentDeal: true,
    calories: '175 kcal',
    tasteNotes: 'Pandan aromatic, creamy, nostalgic',
    popular: false,
    imageUrl: menuIcedCoffeeImg
  },

  // NON-COFFEE
  {
    id: 'nk-1',
    name: 'Kyoto Uji Matcha Latte',
    category: 'non-kopi',
    price: 22000,
    description: 'Pure ceremonial-grade green tea matcha whisked traditionally with choice dairy or oat milk.',
    tag: 'Student Favorite',
    isStudentDeal: true,
    calories: '160 kcal',
    tasteNotes: 'Earthy umami, velvet sweetness, creamy',
    popular: true,
    imageUrl: menuMatchaDrinkImg
  },
  {
    id: 'nk-2',
    name: 'Sparkling Citrus Berry Cooler',
    category: 'non-kopi',
    price: 18000,
    description: 'Gentle sparkling cooler with fresh lemon wedges, wild strawberry infusion, and garden-picked mint sprigs.',
    tag: 'Fresh Mood Booster',
    isStudentDeal: true,
    calories: '95 kcal',
    tasteNotes: 'Zesty, tangy, bubbly fruit burst',
    popular: true,
    imageUrl: matchaSignatureImg
  },
  {
    id: 'nk-3',
    name: 'Belgian Dark Chocolate Melt',
    category: 'non-kopi',
    price: 21000,
    description: 'Premium 70% Belgian dark chocolate melted into warm milk with rich bittersweet cocoa powder dusting.',
    tag: 'Comfort Drink',
    isStudentDeal: false,
    calories: '210 kcal',
    tasteNotes: 'Deep cocoa, bittersweet, velvety rich',
    popular: false,
    imageUrl: latteArtCroissantImg
  },
  {
    id: 'nk-4',
    name: 'Artisan Earl Grey Peach Milk Tea',
    category: 'non-kopi',
    price: 19000,
    description: 'Aromatic bergamot black tea brewed fresh with juicy sweet peach nectar and silky steamed milk.',
    tag: 'Artisan Tea',
    isStudentDeal: false,
    calories: '130 kcal',
    tasteNotes: 'Bergamot floral, juicy peach, delicate tea note',
    popular: false,
    imageUrl: menuMatchaDrinkImg
  },
  {
    id: 'nk-5',
    name: 'Warm Forest Honey Ginger Lemon',
    category: 'non-kopi',
    price: 14000,
    description: 'Wholesome restorative brew from crushed Indonesian red ginger, pure forest honey, and freshly squeezed lemon.',
    tag: 'Herbal Wellness',
    isStudentDeal: true,
    calories: '80 kcal',
    tasteNotes: 'Warming ginger kick, sweet honey, citrus zest',
    popular: false,
    imageUrl: matchaSignatureImg
  },

  // MAINS / MEALS
  {
    id: 'm-1',
    name: 'Crispy Chicken Bowl with Sambal Matah',
    category: 'makanan',
    price: 25000,
    description: 'Warm fluffy jasmine rice topped with crispy boneless chicken fillets and freshly tossed lemongrass shallot chili relish.',
    tag: 'Hearty Meal',
    isStudentDeal: true,
    calories: '450 kcal',
    tasteNotes: 'Crispy chicken, fragrant lemongrass, spicy kick',
    popular: true,
    imageUrl: menuRiceBowlImg
  },
  {
    id: 'm-2',
    name: 'Japanese Beef Teriyaki Rice Bowl',
    category: 'makanan',
    price: 28000,
    description: 'Tender beef slices simmered in savory-sweet teriyaki glaze, served over warm rice with a sunny egg and toasted sesame.',
    tag: 'Top Pick',
    isStudentDeal: false,
    calories: '490 kcal',
    tasteNotes: 'Savory-sweet glaze, tender beef slices, warm rice',
    popular: true,
    imageUrl: menuRiceBowlImg
  },
  {
    id: 'm-3',
    name: 'Citra Az-Zahra Special Fried Rice',
    category: 'makanan',
    price: 23000,
    description: 'Traditional Indonesian wok fried rice seasoned with roasted spices, shredded chicken, sunny egg, and pickled relish.',
    tag: 'Heritage Recipe',
    isStudentDeal: true,
    calories: '470 kcal',
    tasteNotes: 'Smoky wok aroma, savory shallot, balanced spice',
    popular: false,
    imageUrl: menuRiceBowlImg
  },
  {
    id: 'm-4',
    name: 'Smoked Beef Spaghetti Aglio Olio',
    category: 'makanan',
    price: 24000,
    description: 'Al dente spaghetti tossed in extra virgin olive oil, minced garlic, chili flakes, and savory smoked beef slices.',
    tag: 'Casual Dining',
    isStudentDeal: false,
    calories: '380 kcal',
    tasteNotes: 'Garlicky olive oil, mild chili flakes, savory beef',
    popular: false,
    imageUrl: menuRiceBowlImg
  },

  // SNACK & PASTRY
  {
    id: 's-1',
    name: 'French Butter Croissant',
    category: 'snack',
    price: 16000,
    description: 'Crisp, golden laminated pastry baked fresh every morning with pure French butter. Flaky crust, airy interior.',
    tag: 'Freshly Baked',
    isStudentDeal: false,
    calories: '240 kcal',
    tasteNotes: 'Flaky crust, golden butter richness',
    popular: true,
    imageUrl: menuBakeryPastryImg
  },
  {
    id: 's-2',
    name: 'Fudgy Melt Chocolate Brownie',
    category: 'snack',
    price: 15000,
    description: 'Dense, chewy chocolate brownie baked with molten dark chocolate chunks in every single bite.',
    tag: 'Decadent Melt',
    isStudentDeal: true,
    calories: '260 kcal',
    tasteNotes: 'Rich fudge texture, intensely chocolaty',
    popular: true,
    imageUrl: menuBakeryPastryImg
  },
  {
    id: 's-3',
    name: 'Powdered Snow Sugar Donuts (2 pcs)',
    category: 'snack',
    price: 12000,
    description: 'Traditional fluffy potato donuts with an airy texture, dusted with fine cool powdered snow sugar.',
    tag: 'School Classic',
    isStudentDeal: true,
    calories: '210 kcal',
    tasteNotes: 'Pillow-soft potato dough, gentle sweetness',
    popular: false,
    imageUrl: menuBakeryPastryImg
  },
  {
    id: 's-4',
    name: 'Herb Salt Fries with Garlic Mayo',
    category: 'snack',
    price: 15000,
    description: 'Golden shoestring fries seasoned with oregano sea salt herbs, served with house garlic mayonnaise and chili sauce.',
    tag: 'Discussion Snack',
    isStudentDeal: true,
    calories: '280 kcal',
    tasteNotes: 'Golden crisp exterior, fragrant herb salt',
    popular: false,
    imageUrl: menuBakeryPastryImg
  },
  {
    id: 's-5',
    name: 'Chicken & Melted Cheese Ragout Risoles',
    category: 'snack',
    price: 14000,
    description: 'Delicate pastry crust coated in crisp panko breadcrumbs, filled with savory chicken vegetable ragout and melted mozzarella.',
    tag: 'Warm & Savory',
    isStudentDeal: false,
    calories: '220 kcal',
    tasteNotes: 'Creamy savory ragout filling, stretchy cheese',
    popular: false,
    imageUrl: menuBakeryPastryImg
  }
];

export const CAFE_FACILITIES: CafeFacility[] = [
  {
    id: 'fac-1',
    title: 'High-Speed Dedicated Fiber Wi-Fi',
    description: 'Lag-free broadband up to 100 Mbps with dedicated bandwidth to support digital study, student research, and relaxed browsing.',
    iconName: 'Wifi',
    detail: 'SSID: HouseOfLaraga_Guest | Automatic QR login on each table'
  },
  {
    id: 'fac-2',
    title: 'Power Outlets & USB Charging at Every Desk',
    description: 'Never worry about running out of battery. Every workstation is equipped with dual AC sockets and USB Type-C fast charging.',
    iconName: 'Zap',
    detail: 'Available at 18 table points across indoor and terrace areas'
  },
  {
    id: 'fac-3',
    title: 'Curated Reading Nook & Mini Library',
    description: 'Bookshelves featuring educational graphic novels, Islamic literature, biographies of innovators, science, and startup guides.',
    iconName: 'BookOpen',
    detail: 'Over 250 curated titles available for free reading on-site'
  },
  {
    id: 'fac-4',
    title: 'Communal Discussion Table & Glass Whiteboard',
    description: 'Dedicated teamwork corner designed for student group projects and brainstorming, equipped with colored dry-erase markers.',
    iconName: 'Users',
    detail: 'Comfortable seating for groups up to 10 people'
  },
  {
    id: 'fac-5',
    title: 'Semi-Outdoor Garden Terrace',
    description: 'Airy open-air seating overlooking the school green courtyards and serene fountain water features.',
    iconName: 'Trees',
    detail: '100% non-smoking, lush, and naturally ventilated space'
  },
  {
    id: 'fac-6',
    title: 'Direct Walkway to Campus Mosque & Facilities',
    description: 'Seamlessly connected to the main corridors of SMPIT Citra Az-Zahra, just a few steps from the campus prayer hall.',
    iconName: 'Compass',
    detail: 'Only 20 steps to ablution facilities and main campus mosque'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    name: 'Sofyan Dwi Prasetyo',
    role: 'Islamic Studies (PAI) Teacher, SMPIT Citra Az-Zahra',
    text: 'Alhamdulillah, House of Laraga reflects authentic Islamic business ethics and hospitality. The food is certified halal and wholesome, service is polite, and the ambiance is peaceful for religious study sessions with our students.',
    rating: 5,
    favoriteItem: 'Signature Laraga Palm Sugar Coffee & Chicken Risoles'
  },
  {
    id: 't-2',
    name: 'Rahmatullah',
    role: 'Science (IPA) Teacher, SMPIT Citra Az-Zahra',
    text: 'It is fascinating to see fundamental science applied here—from precise brew temperature extraction to coffee fermentation. It is an exceptionally conductive space for students discussing science research projects.',
    rating: 5,
    favoriteItem: 'Manual Brew V60 Flores & Az-Zahra Iced Americano'
  },
  {
    id: 't-3',
    name: 'Aida Mufliha',
    role: 'Mathematics Teacher, SMPIT Citra Az-Zahra',
    text: 'The cafe provides students with real-world applied math, from digital cashier balancing to cost-of-goods calculations. It is also my favorite quiet place to grade student assignments while enjoying a Kyoto Matcha Latte.',
    rating: 5,
    favoriteItem: 'Kyoto Uji Matcha Latte & French Butter Croissant'
  }
];

export const FAQS = [
  {
    q: 'Is House of Laraga open to parents and the general public?',
    a: 'Yes, absolutely! House of Laraga welcomes the entire SMPIT Citra Az-Zahra family (students, teachers, and staff), parents picking up their children or attending meetings, and verified campus guests by signing in at the main security lobby.'
  },
  {
    q: 'How do students and teachers claim the 15% discount?',
    a: 'Simply present your SMPIT Citra Az-Zahra Student ID card or school uniform at the cashier, or enable the student/faculty discount toggle when placing an order through this website.'
  },
  {
    q: 'What payment methods are accepted?',
    a: 'We accept Cash, QRIS (all major banks and e-wallets including BCA, Mandiri, BSI, GoPay, OVO, ShopeePay, Dana), as well as the school RFID student card tap system.'
  },
  {
    q: 'Can we reserve communal tables for group study or school meetings?',
    a: 'Yes! We provide complimentary reservations for communal tables and whiteboard facilities for positive academic collaboration and parent committee discussions via the Reserve button.'
  },
  {
    q: 'Are all food and beverages guaranteed Halal and wholesome?',
    a: '100% Halal and Thayyib. All ingredients are sourced strictly from certified halal producers (MUI / BPJPH) and prepared with high hygiene standards without alcohol or non-halal additives.'
  }
];
