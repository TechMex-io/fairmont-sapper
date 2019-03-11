export const pages = [
  {
    id: 1,
    name: 'home',
    title: 'The Fairmont Condominiums',
    content: 'home content',
    images: [],
    intro1: `The Fairmont Condominiums provide a one of a kind high rise living
    lifestyle for those individuals seeking a relatively maintenance-free
    lifestyle in a secure and elegant community. Our 11 story building was
    converted from luxury apartments to condominiums in 1979, is governed by
    a board of condominium owners and is managed by FPM Management, L.L.C.
    Floorplans include One, Two and Three Bedrooms condominiums as well as
    Studios and Penthouses.`,
    intro2: `The North / South orientation of our building provides condominiums on
    either side of our building unique panoramic view of the City of El
    Paso, the Franklin Mountain and Juarez, Mexico. We are conveniently
    located in central El Paso on the corner of Rim Road and Stanton Street.
    Our location provides easy access to I-10, Downtown, Science Road,
    Hospitals, and is within walking distance to the University of Texas at
    El Paso (UTEP), Tom Lea Park and the Kern Place restaurants.`,
    img_fairmont: 'fairmontbuilding.jpg',
    img_pool: 'fairmont-pool.jpg',
    living: `<h3 class="text-3xl mb-4 border-after border-after-left">Living</h3>
    <ul class="pl-4">
      <li class="mb-2">Floor to ceiling windows and sliding doors to patio</li>
      <li class="mb-2">Covered patios for each unit, (XX sq ft - xx sq ft)</li>
      <li class="mb-2">2 elevators</li>
      <li class="mb-2">HVAC maintained by building</li>
      <li class="mb-2">Resident choice for cable and internet provider</li>
      <li class="mb-2">Public wifi available on 1st floor lobby and guest rooms</li>
      <li class="mb-2">Pet-friendly</li>
    </ul>`,
    community: `<h3 class="text-3xl mb-4 border-after border-after-left">Community</h3>
    <ul class="pl-4">
      <li class="mb-2">Pool &amp; outdoor lounge area</li>
      <li class="mb-2">Gym &amp; Sauna</li>
      <li class="mb-2">Party Room available for rent (XX sq ft)</li>
      <li class="mb-2">2 Guest Suites, double queen beds, available for rent</li>
      <li class="mb-2">On site laundry facility</li>
    </ul>`,
    security: `<h3 class="text-3xl mb-4 border-after border-after-left">Security</h3>
    <ul class="pl-4">
      <li class="mb-2">24 hour locked entry doors</li>
      <li class="mb-2">Voice &amp; video communication and entry access control from units</li>
      <li class="mb-2">Video monitoring</li>
      <li class="mb-2">Secure parking areas for residence</li>
    </ul>`
  },
  {
    id: 2,
    name: 'leasing',
    title: 'Fairmont Properties for Lease',
    content: 'leasing content',
    images: [],
    properties: [
      {
        unit_number: 'Unit #904',
        unit_bedbath: '1 Bedroom/1 Bath',
        unit_sqft: '770.36 square feet',
        unit_rent: 'Monthly Rent - $950.00',
        unit_extrainfo: [
          'Electricity and Cable paid by tenant',
          'By appointment only.'
        ],
        unit_images: [
          '904-2.jpg',
          '904-7.jpg',
          '904-8.jpg',
          '904-9.jpg',
          '904-11.jpg',
          '904-13.jpg',
          '904-15.jpg',
          '904-20.jpg',
        ]
      },
      {
        unit_number: 'Unit #607',
        unit_bedbath: '2 Bedroom/2 Bath',
        unit_sqft: '1,144.07 square feet',
        unit_rent: 'Monthly Rent - $1600.00',
        unit_extrainfo: [
          'Electricity and Cable paid by tenant',
          'By appointment only.',
          'Also available for sale',
        ],
        unit_images: [
          'Unit607-1.jpg',
          'Unit607-2.jpg',
          'Unit607-3.jpg',
          'Unit607-4.jpg',
          'Unit607-5.jpg',
          'Unit607-6.jpg',
          'Unit607-7.jpg',
          'Unit607-8.jpg',
          'Unit607-9.jpg',
          'Unit607-10.jpg',
          'Unit607-11.jpg',
          'Unit607-12.jpg',
          'Unit607-13.jpg',
          'Unit607-14.jpg',
          'Unit607-15.jpg',
          'Unit607-16.jpg',
        ]
      },
      {
        unit_number: 'Unit #501',
        unit_bedbath: '2 Bedroom/2 Bath',
        unit_sqft: '1143.24 square feet',
        unit_rent: 'Monthly Rent - $1600.00',
        unit_extrainfo: [
          'By appointment only.'
        ],
        unit_images: [
          'Unit501-07.JPG',
          'Unit501-08.JPG',
          'Unit501-12.JPG',
          'Unit501-14.JPG',
          'Unit501-15.JPG',
          'Unit501-16.JPG',
          'Unit501-17.JPG',
          'Unit501-18.JPG',
          'Unit501-19.JPG',
          'Unit501-21.JPG',
          'Unit501-24.JPG',
          'Unit501-30.JPG',
          'Unit501-32.JPG',
        ]
      },
      {
        unit_number: 'Unit #306',
        unit_bedbath: '2 Bedroom/2 Bath',
        unit_sqft: '1,123.51 square feet',
        unit_rent: 'Monthly Rent - $1750.00',
        unit_extrainfo: [
          'By appointment only.',
          'Also available for sale'
        ],
        unit_images: [
          '306-1.jpg',
          '306-2.jpg',
          '306-3.jpg',
          '306-4.jpg',
          '306-5.jpg',
          '306-6.jpg',
          '306-7.jpg',
          '306-8.jpg',
          '306-9.jpg',
          '306-10.jpg',
          '306-11.jpg',
          '306-12.jpg',
          '306-13.jpg',
          '306-15.jpg',
          '306-16.jpg',
        ]
      },
    ]
  },
  {
    id: 3,
    name: 'purchasing',
    title: 'Fairmont Properties for Sale',
    content: 'leasing content',
    images: [],
    properties: [
      {
        unit_title: 'Unit #306 for Sale',
        unit_number: 'Unit #306',
        unit_bedbath: '2 Bedroom/2 Bath',
        unit_sqft: '1,123.51 square feet',
        unit_rent: 'For Sale - $145,000',
        unit_extrainfo: [
          'By appointment only.',
          'HOA Fee - $559.16',
        ],
        unit_images: [
          '306-1.jpg',
          '306-2.jpg',
          '306-3.jpg',
          '306-4.jpg',
          '306-5.jpg',
          '306-6.jpg',
          '306-7.jpg',
          '306-8.jpg',
          '306-9.jpg',
          '306-10.jpg',
          '306-11.jpg',
          '306-12.jpg',
          '306-13.jpg',
          '306-15.jpg',
          '306-16.jpg',
        ]
      },
      {
        unit_title: 'Unit #308 for Sale',
        unit_number: 'Unit #308',
        unit_bedbath: '2 Bedroom/2 Bath',
        unit_sqft: '1,152.88 square feet',
        unit_rent: 'For Sale - $190,000',
        unit_extrainfo: [
          'By appointment only.',
          'Monthly HOA Fee - $525.76',
        ],
        unit_images: [
          '308-1.jpg',
          '308-2.jpg',
          '308-3.jpg',
          '308-4.jpg',
          '308-5.jpg',
          '308-6.jpg',
          '308-7.jpg',
          '308-8.jpg',
          '308-9.jpg',
          '308-10.jpg',
          '308-11.jpg',
          '308-12.jpg',
          '308-13.jpg',
        ]
      },
      {
        unit_title: 'Unit #607 for Sale',
        unit_number: 'Unit #607',
        unit_bedbath: '2 Bedroom/2 Bath',
        unit_sqft: '1,144.07 square feet',
        unit_rent: 'For Sale - $180,000',
        unit_extrainfo: [
          'By appointment only.',
          'Monthly HOA Fee - $521.78',
        ],
        unit_images: [
          'Unit607-1.jpg',
          'Unit607-2.jpg',
          'Unit607-3.jpg',
          'Unit607-4.jpg',
          'Unit607-5.jpg',
          'Unit607-6.jpg',
          'Unit607-7.jpg',
          'Unit607-8.jpg',
          'Unit607-9.jpg',
          'Unit607-10.jpg',
          'Unit607-11.jpg',
          'Unit607-12.jpg',
          'Unit607-13.jpg',
          'Unit607-14.jpg',
          'Unit607-15.jpg',
          'Unit607-16.jpg',
        ]
      },
    ],
  },
  {
    id: 4,
    name: 'corporate',
    title: 'Fairmont Corporate Units for Lease',
    content: 'corporate content',
    images: [],
    properties: [
      {
        unit_title: 'Unit #1004 for Lease',
        unit_number: 'Unit #1004',
        unit_bedbath: '2 Bedroom/2 Bath',
        unit_sqft: '1,134.37 square feet',
        unit_rent: '$2,850/mo',
        unit_extrainfo: [
          'By appointment only.'
        ],
        unit_corp_info: `Our top of the line two bedroom two bath Corporate Condominium is $2,850 per month with a three month minimum.  Monthly rental rates include all utilities and services, including electric, gas, water, cable TV, high speed Internet with wireless and weekly maid service. Fine linens and towels are provided and laundered with weekly housekeeping.
        <br><br>This Corporate is on par with luxury penthouse hotel suites with a full length balcony and spectacular views, refrigerated air conditioning, covered parking and are nonsmoking.  Pets are not allowed. Prices are all inclusive with no additional taxes or fees or charges.
        <br><br>You can contact us at (915) 577-9186 or my cell at (915)204-9505 or e-mail at <a class="text-orange-fairmont" href="mailto:bob@camelotcorporates.com">bob@camelotcorporates.com</a>.`,
        unit_images: [
          '1004-1.jpg',
          '1004-2.jpg',
          '1004-3.jpg',
          '1004-4.jpg',
          '1004-5.jpg',
          '1004-6.jpg',
          '1004-7.jpg',
          '1004-8.jpg',
          '1004-9.jpg',
          '1004-10.jpg',
          '1004-11.jpg',
          '1004-12.jpg',
          '1004-13.jpg',
          '1004-14.jpg',
          '1004-15.jpg',
          '1004-16.jpg',
          '1004-17.jpg',
          '1004-18.jpg',
          '1004-19.jpg',
        ]
      },
    ],
  }
];