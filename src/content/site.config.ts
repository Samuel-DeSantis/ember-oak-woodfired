// src/content/site.config.ts
// ── PER-CLIENT SWAP FILE ──────────────────────────────────────

export const SITE = {
  name:        'Ember & Oak',
  tagline:     'Wood-fired kitchen in the heart of the city',
  url:         'https://emberandoak.com',
  description: 'Ember & Oak is a wood-fired neighborhood restaurant serving seasonal American cuisine. Dine in, takeout, and private events.',

  // Contact & Location
  email:       'hello@emberandoak.com',
  phone:       '(208) 555-0182',
  address:     {
    street:  '412 W Myrtle St',
    city:    'Boise',
    state:   'ID',
    zip:     '83702',
    full:    '412 W Myrtle St, Boise, ID 83702',
  },

  // Google Maps — replace with client embed URL
  mapsEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2888.0!2d-116.2023!3d43.6150!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDPCsDM2JzU0LjAiTiAxMTbCsDEyJzA4LjMiVw!5e0!3m2!1sen!2sus!4v1699999999999',
  mapsDirectionsUrl: 'https://maps.google.com/?q=412+W+Myrtle+St+Boise+ID',

  // Hours
  hours: [
    { days: 'Mon – Tue',  time: 'Closed' },
    { days: 'Wed – Thu',  time: '4:00 pm – 9:00 pm' },
    { days: 'Fri – Sat',  time: '4:00 pm – 10:00 pm' },
    { days: 'Sunday',     time: '11:00 am – 8:00 pm' },
  ],

  // Social
  social: {
    instagram: 'https://instagram.com/',
    facebook:  'https://facebook.com/',
    yelp:      'https://yelp.com/',
  },

  // Hero
  hero: {
    eyebrow:  'Wood-Fired • Seasonal • Local',
    headline: 'Food worth gathering around',
    headlineEm: 'gathering',
    subline:  'Seasonal American cuisine cooked over live fire. Sourced from Idaho farms. Open Wednesday through Sunday.',
    ctaPrimary:   { label: 'Reserve a Table',  href: '#reservations' },
    ctaSecondary: { label: 'View Our Menu',    href: '#menu' },
  },

  // Menu sections
  menu: [
    {
      section: 'Starters',
      icon: '🌿',
      items: [
        { name: 'Ember Bread',         desc: 'Wood-fired sourdough, whipped lard, honey butter',   price: '$9' },
        { name: 'Beet & Burrata',      desc: 'Roasted beets, burrata, pistachio, aged balsamic',   price: '$16' },
        { name: 'Wood-Grilled Oysters',desc: 'Half dozen, garlic herb butter, mignonette',         price: '$22' },
        { name: 'Chicken Liver Toast', desc: 'Mousse, pickled cherry, sourdough crostini',         price: '$14' },
      ],
    },
    {
      section: 'Mains',
      icon: '🔥',
      items: [
        { name: 'Oak-Smoked Half Chicken', desc: 'Preserved lemon jus, roasted garlic, seasonal greens', price: '$32' },
        { name: 'Cast Iron Ribeye',        desc: '12 oz Idaho beef, bone marrow butter, crispy shallots', price: '$54' },
        { name: 'Roasted Salmon',          desc: 'Snake River salmon, fennel, capers, herb oil',          price: '$36' },
        { name: 'Fire-Roasted Cauliflower',desc: 'Romesco, almonds, golden raisins, herb yogurt (v)',     price: '$24' },
      ],
    },
    {
      section: 'Sides',
      icon: '🌽',
      items: [
        { name: 'Cast Iron Potatoes',  desc: 'Duck fat, rosemary, sea salt',          price: '$9' },
        { name: 'Grilled Broccolini',  desc: 'Chili oil, lemon, parmesan',            price: '$10' },
        { name: 'Creamed Corn',        desc: 'Hatch green chile, cotija, lime',       price: '$9' },
        { name: 'House Salad',         desc: 'Mixed greens, radish, sherry vinaigrette', price: '$12' },
      ],
    },
    {
      section: 'Desserts',
      icon: '🍮',
      items: [
        { name: 'Basque Cheesecake',   desc: 'Seasonal berry compote, crème fraîche', price: '$12' },
        { name: 'Chocolate Budino',    desc: 'Salted caramel, candied hazelnuts',      price: '$11' },
        { name: 'Sorbet Trio',         desc: 'Ask your server for today\'s flavors',   price: '$10' },
      ],
    },
  ],

  // Features / why us
  features: [
    { icon: '🔥', title: 'Live Fire Cooking',    desc: 'Every dish kissed by our custom wood-burning hearth.' },
    { icon: '🌾', title: 'Idaho-Sourced',        desc: 'Ingredients from farms within 200 miles, seasonally rotated.' },
    { icon: '🍷', title: 'Curated Wine List',    desc: 'Small producers, natural wines, craft cocktails.' },
    { icon: '🎉', title: 'Private Events',       desc: 'Full buyout and semi-private dining for up to 60 guests.' },
  ],

  // Reservations — swap for OpenTable / Resy embed or link
  reservationsUrl: 'https://www.opentable.com/', // or Resy, or mailto

  // SEO
  seo: {
    defaultTitle:       'Ember & Oak — Wood-Fired Restaurant in Boise, ID',
    titleTemplate:      '%s | Ember & Oak',
    defaultDescription: 'Seasonal American cuisine cooked over live fire. Dine in, takeout, and private events in Boise, Idaho.',
    ogImage:            '/og-image.jpg',
  },
};
