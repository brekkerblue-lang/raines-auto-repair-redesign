// Every value below is a real, sourced business fact -- see README for the
// exact source of each. No placeholder or invented data.

export const business = {
  name: 'Raines Auto Repair',
  legalListing: 'Darrell Raines Auto Repair', // how it's indexed on Google/Facebook
  tagline: 'Foreign and domestic repair, honest labor rates, since 1984.',
  phone: '(360) 275-3685',
  phoneHref: 'tel:+13602753685',
  address: {
    line1: '210 NE Hill Rd',
    city: 'Belfair',
    state: 'WA',
    zip: '98528',
  },
  mapEmbedQuery: '210 NE Hill Rd, Belfair, WA 98528',
  mapsUrl: 'https://www.google.com/maps/place/Raines+Auto+Repair/@47.4771005,-122.818385,17z',
  rating: 4.7,
  reviewCount: 13,
  yearsInBusiness: 42, // "42 Years in Business" -- Yellow Pages, founded 1984
  foundedYear: 1984,
  facebookUrl: 'https://www.facebook.com/Rainesauto',
  hours: [
    { day: 'Monday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Tuesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Wednesday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Thursday', hours: '8:00 AM – 5:00 PM' },
    { day: 'Friday', hours: '8:00 AM – 12:00 PM' },
    { day: 'Saturday', hours: 'Closed' },
    { day: 'Sunday', hours: 'Closed' },
  ],
}
