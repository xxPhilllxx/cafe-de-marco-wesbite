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
        url: "/images/specialty_oysters.png",
        title: "Award-Winning Oysters",
        description: "Our celebrated Oysters Rockefeller baked with spinach, bacon, and cheese."
      },
      {
        url: "/images/gallery_lobster.jpg",
        title: "Famous Gulf Seafood",
        description: "Fresh coastal catches prepared with decades of culinary passion."
      },
      {
        url: "/images/gallery_prawns.jpg",
        title: "House Specialty Jumbo Prawns",
        description: "Our legendary specialty. Colossal prawns prepared like lobster, incredibly tender, and served with a flavorful Tripletail Mango reduction."
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
      "/images/menu_page_1.jpg",
      "/images/menu_page_2.jpg",
      "/images/menu_page_3.jpg"
    ],

    // Gallery category filter tabs
    galleryCategories: [
      { id: "all", name: "All Photos" },
      { id: "specials", name: "Specials" },
      { id: "starters", name: "Appetizers & Starters" },
      { id: "seafood", name: "Seafood Selections" },
      { id: "land_lovers", name: "Land Lovers Selections" },
      { id: "desserts", name: "Desserts" },
      { id: "wine", name: "Wine" },
      { id: "kids_menu", name: "Kids Menu" },
      { id: "ambience", name: "Atmosphere & Dining" }
    ],

    // Visual Image Gallery items categorized with name cards
    gallery: [
      {
        title: "House Specialty Jumbo Prawns",
        category: "specials",
        categoryName: "Specials",
        image: "/images/gallery/specials/jumbo_prawns.jpg",
        description: "Colossal prawns prepared like lobster with a flavorful Tripletail Mango reduction."
      },
      {
        title: "Alaskan King Crab Legs",
        category: "specials",
        categoryName: "Specials",
        image: "/images/gallery/specials/king_crab_legs.png",
        description: "Sweet colossal King Crab legs served hot with drawn butter and lemon."
      },
      {
        title: "Oysters Rockefeller",
        category: "starters",
        categoryName: "Appetizers & Starters",
        image: "/images/gallery/starters/oysters_rockefeller.png",
        description: "Award-winning recipe baked with spinach, bacon, rich cheeses, and anisette."
      },
      {
        title: "Sesame Pacific Ahi Tuna Tartare",
        category: "starters",
        categoryName: "Appetizers & Starters",
        image: "/images/gallery/starters/tuna_tartare.jpg",
        description: "Fresh Ahi tuna with avocado, ginger flower, wasabi peas, and crispy taro chips."
      },
      {
        title: "Mussels Italiano",
        category: "starters",
        categoryName: "Appetizers & Starters",
        image: "/images/gallery/starters/steamed_mussels.jpg",
        description: "Sautéed in white wine garlic butter broth with artichoke hearts and herb croutons."
      },
      {
        title: "Broiled Florida Lobster Tail",
        category: "seafood",
        categoryName: "Seafood Selections",
        image: "/images/gallery/seafood/broiled_lobster_tail.jpg",
        description: "Succulent broiled lobster tail with au gratin potatoes and seasonal vegetables."
      },
      {
        title: "Center Cut Filet Mignon with Mushrooms",
        category: "land_lovers",
        categoryName: "Land Lovers Selections",
        image: "/images/gallery/land_lovers/filet_mignon.jpg",
        description: "Tender filet with rich port wine mushroom reduction, puff pastry, and potatoes."
      },
      {
        title: "Tomahawk Prime Rib Steak",
        category: "land_lovers",
        categoryName: "Land Lovers Selections",
        image: "/images/gallery/land_lovers/tomahawk_steak.jpg",
        description: "Carved bone-in prime steak grilled to perfection with garden accompaniments."
      },
      {
        title: "Artisanal Cannoli Siciliano",
        category: "desserts",
        categoryName: "Desserts",
        image: "/images/gallery/desserts/cannoli.jpg",
        description: "Crisp pastry shell filled with sweet ricotta cream, chocolate chips, and raspberry."
      },
      {
        title: "Italian Ricotta Cheesecake",
        category: "desserts",
        categoryName: "Desserts",
        image: "/images/gallery/desserts/ricotta_cheesecake.png",
        description: "House-made authentic ricotta cheesecake with rich chocolate swirl and fresh berries."
      },
      {
        title: "Covered Outdoor Patio Dining",
        category: "ambience",
        categoryName: "Atmosphere & Dining",
        image: "/images/gallery/ambience/outdoor_patio.jpg",
        description: "Lively al fresco dining under the blue canopy with ambient evening string lights."
      },
      {
        title: "Historic Stained Glass Entrance",
        category: "ambience",
        categoryName: "Atmosphere & Dining",
        image: "/images/gallery/ambience/stained_glass_entrance.jpg",
        description: "Welcoming interior with our iconic vintage Café de Marco stained glass sign."
      },
      {
        title: "Historic Old Marco Cottage",
        category: "ambience",
        categoryName: "Atmosphere & Dining",
        image: "/images/gallery/ambience/historic_cottage_exterior.png",
        description: "Historic early-1900s Florida cottage in the charming district of Old Marco Island."
      },
      {
        title: "Main Dining Room",
        category: "ambience",
        categoryName: "Atmosphere & Dining",
        image: "/images/gallery/ambience/main_dining_room.png",
        description: "Warm, candle-lit fine dining setting with elegant tableside service."
      },
      {
        title: "Intimate Dining Room",
        category: "ambience",
        categoryName: "Atmosphere & Dining",
        image: "/images/gallery/ambience/intimate_dining.jpeg",
        description: "Cozy, charming historic dining room setting for memorable evenings."
      }
    ]
  },

  about: {
    story: "This old Florida style building enjoys a rich part of Marco Island's history. In the early 1900s, The Old Marco Inn functioned as a bed and breakfast to travelers exploring Marco Island. This building served as housing for the chambermaids working at the Inn. When the Inn ceased to function as a bed and breakfast, this building was emptied out and used for the Inn's overflow of items needing storage.\n\nIn 1973, the capital Basik family moved to Marco, purchased this property and a motel across the way. They developed the first shopping center which included two associated restaurants. Collectively it was called: Port of Marco's Shopping Village. From 1974 through 1983 this building was a seafood restaurant called Delaney's. In 1983 the restaurant was sold to Sandy Scheeler-Franchino and it became Café de Marco.\n\nI am proud to carry on its legacy. As for the structure of the building, I wouldn't change it one bit! Bon Appétit!",
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
