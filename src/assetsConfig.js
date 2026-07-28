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
        url: "/images/gallery_1.png",
        title: "Award-Winning Oysters",
        description: "Our celebrated Oysters Rockefeller baked with spinach, bacon, and cheese."
      },
      {
        url: "/images/hero_2.png",
        title: "Famous Gulf Seafood",
        description: "Fresh coastal catches prepared with decades of culinary passion."
      },
      {
        url: "/images/hero_3.png",
        title: "Elegance & Heritage",
        description: "Located in the historic district of Old Marco Island, welcoming you with timeless charm."
      }
    ],
    aboutImage: "/images/about.png",
    menuPlaceholder: "",
    menuPdfUrl: "/docs/cafe-de-marco-menu.pdf",
    menuRedacted: [
      "/images/menu_sheet.jpeg"
    ],
    gallery: [
      "/images/gallery_1.png",
      "/images/hero_2.png",
      "/images/hero_3.png",
      "/images/about.png",
      "/images/specialty_crab_legs.png",
      "/images/specialty_cheesecake.png",
      "/images/gallery_2.png",
      "/images/gallery_3.png",
      "/images/gallery_4.png",
      "/images/gallery_5.png",
      "/images/gallery_6.png",
      "/images/gallery_7.jpeg",
      "/images/gallery_10.jpeg",
      "/images/gallery_11.jpeg"
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
            name: "Oysters Rockefeller",
            description: "Award-winning recipe baked with a rich blend of bacon, spinach, cheeses, and anisette.",
            tags: ["Award Winner", "Signature"]
          },
          {
            name: "Lobster Bisque",
            description: "Rich, creamy, and slow-simmered with premium cognac and a generous garnish of fresh lobster chunks.",
            tags: ["Signature", "Gluten-Free Available"]
          },
          {
            name: "Caprese Salad",
            description: "Vine-ripened tomatoes, fresh buffalo mozzarella, fragrant basil leaves, finished with cold-pressed olive oil and balsamic glaze.",
            tags: ["Vegetarian"]
          },
          {
            name: "Café de Marco's Favorite Salad",
            description: "Crisp mixed greens, fresh seasonal berries, toasted almonds, and crumbled goat cheese tossed in house vinaigrette."
          },
          {
            name: "De Marco Sampler Platter",
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
            description: "Our legendary specialty. Colossal prawns prepared like lobster, incredibly tender, and served with a flavorful Tripletail Mango reduction.",
            tags: ["Famous", "House Specialty"]
          },
          {
            name: "Seasonal Catch of the Day",
            description: "Our fresh local catch of the day, prepared in one of our signature styles depending on seasonality: 'De Marco Style' (pan-seared Gulf Tripletail with a white wine citrus herb emulsion) or 'Macadamia Crusted' (Mahi Mahi crusted with sweet macadamia nuts and coconut ginger sauce).",
            tags: ["Fresh Catch", "Seasonal Selection"]
          }
        ]
      },
      {
        id: "steaks",
        name: "Steaks & Entrées",
        items: [
          {
            name: "Slow-Braised Lamb Osso Buco",
            description: "Tender, fall-off-the-bone lamb shank slow-braised in red wine, root vegetables, and aromatic spices over saffron risotto."
          },
          {
            name: "Chicken Francese",
            description: "Tender breast of chicken egg-battered and sautéed in a delicate lemon, butter, and white wine pan-sauce."
          },
          {
            name: "Artisanal Vegetarian Risotto",
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
