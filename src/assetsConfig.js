/**
 * Cafe de Marco - Central Assets & Copy Configuration
 * 
 * Update this file to easily modify the text, contact details, hours, reviews, 
 * menu items, and image URLs throughout the entire website.
 */

export const restaurantConfig = {
  name: "Café de Marco",
  tagline: "Fine Seafood & Premium Steaks",
  subTagline: "A Marco Island culinary tradition since 1983. Exceptional dining in a warm, sophisticated atmosphere.",
  
  contact: {
    phone: "+1 239 394 6262",
    phoneDisplay: "(239) 394-6262",
    address: "244 Palm St, Marco Island, FL 34145",
    addressUrl: "https://www.google.com/maps/place/Caf%C3%A9+de+Marco/@25.9724392,-81.7296485,17z/data=!3m1!4b1!4m6!3m5!1s0x88daef9f2db64d0b:0x6fe708f87ad816a9!8m2!3d25.9724392!4d-81.7296485!16s%2Fg%2F12m95rls_?authuser=0&entry=ttu&g_ep=EgoyMDI1MDEwNy4wIKXMDSoASAFQAw%3D%3D",
    mapsIframeUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3586.8658631476796!2d-81.7296485!3d25.972439199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88daef9f2db64d0b%3A0x6fe708f87ad816a9!2sCaf%C3%A9%20de%20Marco!5e0!3m2!1sen!2s!4v1735793044691!5m2!1sen!2s",
    email: "cafedemarco23@gmail.com",
    facebook: "https://facebook.com",
    instagram: "https://instagram.com"
  },

  hours: [
    { day: "Monday", time: "5:00 PM - 9:00 PM" },
    { day: "Tuesday", time: "5:00 PM - 9:00 PM" },
    { day: "Wednesday", time: "5:00 PM - 9:00 PM" },
    { day: "Thursday", time: "5:00 PM - 9:00 PM" },
    { day: "Friday", time: "5:00 PM - 9:00 PM" },
    { day: "Saturday", time: "5:00 PM - 9:00 PM" },
    { day: "Sunday", time: "Closed" }
  ],

  // Easily replaceable image URLs. If you host local images in public/images, swap these out!
  images: {
    heroSlides: [
      {
        url: "/images/hero_steak.png", // Elegant Steak
        title: "Savor the Finest Cuts",
        description: "Perfectly seasoned prime steaks grilled to absolute perfection."
      },
      {
        url: "/images/cafe-de-marco-AF1QipM1lQmbmC1qevMhvU0jr74RNbzTG8zyiIlkgxvD~2.jpg", // Real Cafe de Marco Seafood
        title: "Famous Gulf Seafood",
        description: "Fresh coastal catches prepared with decades of culinary passion."
      },
      {
        url: "/images/cafe-de-marco-AF1QipNjCS3ylKup3E6-3BHYCCn-EftlelZhQrNfErwv~2.jpg", // Real Cafe de Marco building
        title: "Elegance & Heritage",
        description: "Located in the historic district of Old Marco Island, welcoming you with timeless charm."
      }
    ],
    aboutImage: "/images/cafe-de-marco-AF1QipNVNCykl8E50zcVB90ESJgif1ztPOP38iacIzPa~3.jpg", // Real Cafe de Marco dining tables
    menuPlaceholder: "", // Blank if not uploaded yet. If empty, the component shows a beautiful empty container layout.
    menuPdfUrl: "/docs/cafe-de-marco-menu.pdf", // Path to the uploaded Menu PDF
    menuRedacted: [
      "/images/menu_redacted_1.jpg",
      "/images/menu_redacted_2.jpg",
      "/images/menu_redacted_3.jpg",
      "/images/menu_redacted_4.jpg",
      "/images/menu_redacted_5.jpg"
    ],
    gallery: [
      "/images/df2029a5-353c-4a5f-b479-3b65cf6cf22c.jfif",
      "/images/9db579f8-eaa0-416e-bb08-6f7e22c0eefb.jfif",
      "/images/e660292d-617f-4ce8-9663-e99526f38d21.jfif",
      "/images/f2e25439-a018-4d88-a9f1-9a7aaee189b6.jfif",
      "/images/76a72424-d950-435d-b334-0b0f94592b57.jfif",
      "/images/00866959-a84e-4c27-b7e4-88431e1e2fed.jfif",
      "/images/13b102b4-26c7-42de-8c70-8bc3416db52a.jfif",
      "/images/18c47053-34e4-4358-8d66-45c36ae6559c.jfif",
      "/images/29f5f7c1-5466-4d31-ae77-c9345dd3be7a.jfif",
      "/images/3fcdba8c-9583-400f-9ea8-c994cba1d321.jfif",
      "/images/7393036e-3f1a-4972-9c0f-cd5c68a29ef0.jfif",
      "/images/9eac646f-ef56-45f0-9a7e-f08d92bf5337.jfif",
      "/images/4e0049f3-ae37-489d-9eca-c4146561a296.jfif",
      "/images/51c92452-acd9-4bf9-92c6-e1b83a94a62b.jfif",
      "/images/701871de-6c62-468e-9445-76eec519fe4c.jfif",
      "/images/7a04b73f-a791-49ed-9374-6dc5d6dfa215.jfif",
      "/images/8a517815-94f4-48d9-9692-26d404ca9912.jfif",
      "/images/9ca74672-a629-4e3f-a258-9e75583385d4.jfif",
      "/images/afe67860-d7a7-490e-a3fd-39971a2f5fec.jfif",
      "/images/c96faf7a-6f4d-47f6-af2f-d1f50d1f6e10.jfif",
      "/images/cafe-de-marco-AF1QipMKD9Wm9NJCsIdKta_279DwSWszZfk5l6tf245p~2.jpg",
      "/images/cafe-de-marco-AF1QipMoz9JUvItK1mbJDyytusn3z_J2oTwaf5CErKMw~2.jpg",
      "/images/cafe-de-marco-AF1QipNoHbtAQzpB0LP33l_0gXr0dmfugTu4ymwQWet6~2.jpg",
      "/images/cafe-de-marco-AF1QipOUsqU4d-3UdVUL9QTOzNuwOErfmtq-hADhzga7~2.jpg",
      "/images/cafe-de-marco-AF1QipP2eFK3f9J6Fu918hHg33g2JWstTHr-7FuoT2ym~2.jpg",
      "/images/e26488b0-9041-4daf-812f-7b1cf50051d7.jfif",
      "/images/f438d0d7-a685-4122-b1c6-87d7fd260ea6.jfif",
      "/images/f4e80917-9755-455f-875e-40f83b18eaaf (1).jfif",
      "/images/f7362d00-7fae-4b12-ac94-c2b077b0ca0b.jfif"
    ]
  },

  about: {
    story: "Café de Marco began its journey as a quaint establishment dedicated to offering a unique dining experience in the historical section of Old Marco Island. With roots deeply embedded in culinary heritage, our restaurant has evolved over the decades while preserving a warm, non-rushed fine dining atmosphere. Our culinary philosophy emphasizes simplicity, passion, and unparalleled quality. We prioritize sourcing the freshest top-tier seafood and locally grown ingredients, combining traditional cooking techniques with creative contemporary twists.",
    mission: "To welcome every guest like family, delivering attentive, knowledgeable tableside service and masterfully prepared dishes that celebrate the pristine bounty of the Gulf Coast.",
    vision: "To remain Marco Island's cherished hidden gem, where exceptional food, authentic hospitality, and elegant candle-lit ambience unite for an unforgettable dining experience."
  },

  // Interactive Digital Menu Preview - simple for owners to update/add items!
  menuPreview: {
    description: "A curated preview of our signature offerings. Our full menus are updated seasonally to showcase the freshest local catch.",
    categories: [
      {
        id: "starters",
        name: "Appetizers & Starters",
        items: [
          {
            name: "Lobster Bisque",
            price: "16",
            description: "Rich, creamy, and slow-simmered with premium cognac and a generous garnish of fresh lobster chunks.",
            tags: ["Signature", "Gluten-Free Available"]
          },
          {
            name: "Caprese Salad",
            price: "15",
            description: "Vine-ripened tomatoes, fresh buffalo mozzarella, fragrant basil leaves, finished with cold-pressed olive oil and balsamic glaze.",
            tags: ["Vegetarian"]
          },
          {
            name: "Sandy's Favorite Salad",
            price: "14",
            description: "Crisp mixed greens, fresh seasonal berries, toasted almonds, and crumbled goat cheese tossed in house vinaigrette."
          },
          {
            name: "De Marco Sampler Platter",
            price: "24",
            description: "A perfect sharing plate featuring a selection of artisanal baked appetizers and crispy calamari."
          }
        ]
      },
      {
        id: "seafood",
        name: "Seafood Specialties",
        items: [
          {
            name: "House Specialty Jumbo Prawns",
            price: "49",
            description: "Our legendary specialty. Colossal prawns prepared like lobster, incredibly tender, and served with a flavorful Tripletail Mango reduction.",
            tags: ["Famous", "House Specialty"]
          },
          {
            name: "Tripletail 'De Marco Style'",
            price: "42",
            description: "Pristine Gulf caught Tripletail, delicately pan-seared and topped with our signature white wine citrus herb emulsion.",
            tags: ["Fresh Catch"]
          },
          {
            name: "Macadamia Catch of the Day (Mahi Mahi)",
            price: "39",
            description: "Freshly caught Mahi Mahi crusted with sweet macadamia nuts, baked golden brown, and served with coconut ginger sauce."
          }
        ]
      },
      {
        id: "steaks",
        name: "Steaks & Entrées",
        items: [
          {
            name: "Prime Aged Ribeye",
            price: "54",
            description: "16oz of hand-selected USDA Prime Ribeye, marbled for maximum flavor, wet-aged 28 days, and fire-grilled to order.",
            tags: ["Prime"]
          },
          {
            name: "Slow-Braised Lamb Osso Buco",
            price: "46",
            description: "Tender, fall-off-the-bone lamb shank slow-braised in red wine, root vegetables, and aromatic spices over saffron risotto."
          },
          {
            name: "Chicken Francese",
            price: "32",
            description: "Tender breast of chicken egg-battered and sautéed in a delicate lemon, butter, and white wine pan-sauce."
          },
          {
            name: "Artisanal Vegetarian Risotto",
            price: "28",
            description: "Creamy Arborio rice slow-cooked with fresh local seasonal mushrooms, roasted asparagus, and aged Parmesan.",
            tags: ["Vegetarian"]
          }
        ]
      }
    ]
  },

  // Patrons reviews preserved from the old site
  reviews: [
    {
      author: "Jesse Tischauser",
      rating: 5,
      avatar: "JT",
      text: "First time dining at Cafe de Marco and it was EXCELLENT!!! Jose was our server and he was top shelf! We tried the lobster bisque 10/10, caprese salad 10/10, Sandy's favorite salad 9/10, and the macadamia catch Mahi Mahi. The jumbo prawns were incredible. We will definitely be back once we finish moving to the island. Super excited we found another great Marco restaurant!!!",
      date: "May 2026"
    },
    {
      author: "Daniel V.",
      rating: 5,
      avatar: "DV",
      text: "This hidden gem located in old Marco has been our go-to spot for years for Prawns, their house specialty. Service is highly responsive compared to other comparable restaurants on the island. Absolutely incredible flavor and atmosphere.",
      date: "April 2026"
    },
    {
      author: "Robin",
      rating: 5,
      avatar: "R",
      text: "The food and service is incredible! We had Robert as our waiter, he was wonderful. The bread was delicious, we had lobster bisque, the sampler platter, and their famous prawns which did not disappoint. 10/10 everything was delicious. If you're not eating dinner here you are missing out!",
      date: "March 2026"
    },
    {
      author: "Lisa K.",
      rating: 5,
      avatar: "LK",
      text: "We discovered Cafe de Marco during our latest trip to Marco Island and will be back! Fine dining in a comfortable, non-rushed atmosphere. Prime rib was absolutely perfect and family members enjoyed the fresh seafood. Server Scott was fantastic.",
      date: "February 2026"
    },
    {
      author: "Scott Preston",
      rating: 5,
      avatar: "SP",
      text: "Great dinner at Cafe de Marco. Our group of four had the Lobster bisque soup (delicious), three different types of salad, two orders of specialty prawns (like lobster but less chewy), the vegetarian plate, and the Tripletail de Marco style (well cooked and tasty). Overall, a great meal.",
      date: "January 2026"
    },
    {
      author: "Marilyn Brown",
      rating: 5,
      avatar: "MB",
      text: "This is a very charming historic building in the historical section of Marco Island. The hospitality was exceptional. Everything was cooked to our liking and the special dessert was awesome. My husband had the fresh catch of the day, Tripletail, and I had the Chicken Francese. Simply delightful.",
      date: "December 2025"
    }
  ]
};
