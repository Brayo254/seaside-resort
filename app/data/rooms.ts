import {
  FaWifi,
  FaSwimmer,
  FaCoffee,
  FaTv,
  FaSnowflake,
  FaBath,
  FaWineGlass,
  FaUtensils,
  FaUser,
} from "react-icons/fa";

export interface Room {
  id: number;
  name: string;
  description: string;
  longDescription: string;
  price: number;
  maxPeople: number;
  amenities: { name: string; icon: React.ComponentType }[];
  images: string[];
  features: string[];
  roomSize: string;
  bedType: string;
  smokingPolicy: string;
  cancellationPolicy: string;
}

export const rooms: Room[] = [
  {
    id: 1,
    name: "Ocean View Suite",
    description:
      "Wake up to breathtaking ocean views in this spacious suite featuring a private balcony, luxurious bedding, and elegant furnishings designed for ultimate relaxation.",
    longDescription:
      "The Ocean View Suite offers an unparalleled coastal experience with floor-to-ceiling windows that showcase the endless blue horizon. The private balcony provides the perfect spot for morning coffee or evening cocktails while listening to the gentle waves. Inside, you'll find thoughtfully curated furnishings, a king-sized bed with premium linens, and a marble bathroom with a deep soaking tub. The suite also features a work desk for business travelers and a compact seating area for intimate conversations.",
    price: 350,
    maxPeople: 2,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Ocean View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "En-suite Bath", icon: FaBath },
    ],
    images: ["/room1a.jpg", "/room1b.jpg", "/room1c.jpg"],
    features: [
      "Private balcony with ocean views",
      "King-sized bed with premium linens",
      "Marble bathroom with soaking tub",
      "Work desk and chair",
      "Mini refrigerator",
      "Coffee and tea making facilities",
      "In-room safe",
      "Iron and ironing board",
    ],
    roomSize: "45 sq meters",
    bedType: "King",
    smokingPolicy: "Non-smoking room",
    cancellationPolicy:
      "Free cancellation up to 7 days before check-in. Cancellations within 7 days are non-refundable.",
  },
  {
    id: 2,
    name: "Beachfront Villa",
    description:
      "Step directly onto pristine sands from your private villa. Features a separate living area, outdoor shower, and personalized butler service for the discerning guest.",
    longDescription:
      "The Beachfront Villa redefines luxury beach living with direct access to the crystalline shoreline. This standalone villa features a spacious separate living room that opens onto a private terrace, perfect for entertaining or simply soaking in the ocean breeze. The master bedroom boasts a four-poster bed draped in mosquito netting, while the outdoor shower adds an element of tropical freshness. Your dedicated butler is available around the clock to attend to every need, from arranging sunset dinners on the beach to organizing water sports adventures.",
    price: 550,
    maxPeople: 4,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Beach Access", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Private Pool", icon: FaSwimmer },
      { name: "Minibar", icon: FaWineGlass },
      { name: "Butler Service", icon: FaUser },
    ],
    images: ["/room2a.jpg", "/room2b.jpg", "/room2c.jpg"],
    features: [
      "Direct beach access",
      "Private infinity pool",
      "Separate living room",
      "Butler service",
      "Outdoor shower",
      "Private terrace with sun loungers",
      "Full minibar",
      "Premium toiletries",
      "Bose sound system",
    ],
    roomSize: "120 sq meters",
    bedType: "King + Twin",
    smokingPolicy: "Designated smoking area outside",
    cancellationPolicy:
      "Free cancellation up to 14 days before check-in. 50% refund for cancellations within 14 days.",
  },
  {
    id: 3,
    name: "Garden Paradise Room",
    description:
      "Nestled among tropical gardens, this room offers tranquility and privacy. Features a queen-sized bed, modern bathroom, and peaceful garden views.",
    longDescription:
      "The Garden Paradise Room provides a serene escape surrounded by lush tropical vegetation and the soothing sounds of nature. This thoughtfully designed room features a comfortable queen-sized bed, a modern bathroom with rainfall shower, and large windows that frame the verdant gardens. The private terrace offers a quiet spot for morning meditation or reading, while the room's neutral tones and natural materials create a calming atmosphere conducive to rest and rejuvenation.",
    price: 220,
    maxPeople: 2,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Garden View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
    ],
    images: ["/room3a.jpg", "/room3b.jpg", "/room3c.jpg"],
    features: [
      "Private garden terrace",
      "Queen-sized bed",
      "Rainfall shower",
      "Desk and chair",
      "Mini refrigerator",
      "Coffee and tea making facilities",
      "In-room safe",
    ],
    roomSize: "32 sq meters",
    bedType: "Queen",
    smokingPolicy: "Non-smoking room",
    cancellationPolicy:
      "Free cancellation up to 7 days before check-in. Cancellations within 7 days are non-refundable.",
  },
  {
    id: 4,
    name: "Family Suite",
    description:
      "Spacious suite perfect for families. Includes a master bedroom, children's area, kitchenette, and large balcony with partial ocean views.",
    longDescription:
      "The Family Suite is designed with families in mind, offering ample space for everyone to relax and enjoy their beach vacation together. The master bedroom features a comfortable king-sized bed, while the children's area includes twin beds and a dedicated play zone with toys and games. The kitchenette allows for convenient meal preparation for little ones, and the large balcony provides stunning partial ocean views where the whole family can gather for quality time together. Child-friendly amenities and babysitting services ensure parents can unwind while little ones are well cared for.",
    price: 450,
    maxPeople: 5,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Ocean View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Kitchenette", icon: FaUtensils },
      { name: "Kids Area", icon: FaUser },
    ],
    images: ["/room4a.jpg", "/room4b.jpg", "/room4c.jpg"],
    features: [
      "Master bedroom with king bed",
      "Children's area with twin beds",
      "Full kitchenette",
      "Large balcony with ocean views",
      "Kids' play area with toys",
      "Baby cot available",
      "Child-friendly bathroom amenities",
      "Family dining area",
      "Washing machine",
    ],
    roomSize: "85 sq meters",
    bedType: "King + 2 Twin + Baby Cot",
    smokingPolicy: "Non-smoking room",
    cancellationPolicy:
      "Free cancellation up to 10 days before check-in. 50% refund for cancellations within 10 days.",
  },
  {
    id: 5,
    name: "Honeymoon Suite",
    description:
      "Celebrate love in our most romantic suite. Features a four-poster bed, private jacuzzi, champagne service, and stunning sunset views from the terrace.",
    longDescription:
      "The Honeymoon Suite is an intimate sanctuary crafted for newlyweds and couples celebrating their love. The centerpiece is a magnificent four-poster bed draped in sheer curtains, creating an atmosphere of romance and privacy. The private jacuzzi offers stunning sunset views, and champagne service awaits to toast to your future together. The expansive terrace features comfortable loungers perfect for stargazing, while the suite's elegant décor combines classic luxury with modern comforts. Couples can enjoy in-room spa treatments, private dinners on the terrace, and curated experiences designed to create lasting memories.",
    price: 750,
    maxPeople: 2,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Ocean View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Private Jacuzzi", icon: FaBath },
      { name: "Champagne Service", icon: FaWineGlass },
      { name: "Butler Service", icon: FaUser },
    ],
    images: ["/room5a.jpg", "/room5b.jpg", "/room5c.jpg"],
    features: [
      "Four-poster king bed",
      "Private jacuzzi with ocean views",
      "Champagne on arrival",
      "Butler service",
      "Expansive sunset terrace",
      "Couples spa treatments",
      "Private dining available",
      "Romantic turndown service",
      "Premium champagne selection",
    ],
    roomSize: "65 sq meters",
    bedType: "Four-poster King",
    smokingPolicy: "Non-smoking room",
    cancellationPolicy:
      "Free cancellation up to 14 days before check-in. 50% refund for cancellations within 14 days.",
  },
  {
    id: 6,
    name: "Presidential Suite",
    description:
      "The pinnacle of luxury. This expansive suite features panoramic ocean views, two bedrooms, formal dining room, personal chef option, and dedicated concierge.",
    longDescription:
      "The Presidential Suite represents the epitome of luxury hospitality, offering an unparalleled experience for the most discerning guests. Spanning the entire top floor, this magnificent suite features two bedrooms, each with its own ensuite bathroom, a formal dining room that seats eight, and a grand living room with floor-to-ceiling windows showcasing panoramic ocean views. The suite includes a personal chef option for those who desire exquisite culinary experiences, while a dedicated concierge is on hand to arrange any desire. From private helicopter transfers to exclusive island excursions, every aspect of your stay is curated to exceed expectations.",
    price: 1200,
    maxPeople: 6,
    amenities: [
      { name: "Free WiFi", icon: FaWifi },
      { name: "Panoramic View", icon: FaSwimmer },
      { name: "Breakfast Included", icon: FaCoffee },
      { name: "Smart TV", icon: FaTv },
      { name: "Air Conditioning", icon: FaSnowflake },
      { name: "Private Pool", icon: FaSwimmer },
      { name: "Minibar", icon: FaWineGlass },
      { name: "Personal Chef", icon: FaUtensils },
      { name: "Concierge", icon: FaUser },
    ],
    images: ["/room6a.jpg", "/room6b.jpg", "/room6c.jpg"],
    features: [
      "Panoramic ocean views",
      "Two master bedrooms",
      "Formal dining room (seats 8)",
      "Private infinity pool",
      "Personal chef option",
      "Dedicated concierge",
      "Private infinity pool",
      "Grand living room",
      "Butler service",
      "Full kitchen",
      "Wine cellar",
      "Private gym space",
    ],
    roomSize: "250 sq meters",
    bedType: "2 King beds",
    smokingPolicy: "Designated smoking area outside",
    cancellationPolicy:
      "Free cancellation up to 21 days before check-in. 50% refund for cancellations within 21 days.",
  },
];

export const roomFaqs: Record<number, { question: string; answer: string }[]> = {
  1: [
    {
      question: "Is early check-in available?",
      answer:
        "Early check-in is available upon request and subject to availability. Please contact our reservations team in advance.",
    },
    {
      question: "Can I get room service?",
      answer:
        "Yes, room service is available from 7:00 AM to 11:00 PM. A delivery fee applies for orders to the Ocean View Suite.",
    },
    {
      question: "Is the balcony safe for children?",
      answer:
        "The balcony is equipped with safety railings. However, we recommend close supervision of young children at all times.",
    },
  ],
  2: [
    {
      question: "What is included in butler service?",
      answer:
        "Your butler can assist with packing, unpacking, arranging activities, restaurant reservations, and any special requests throughout your stay.",
    },
    {
      question: "How far is the villa from the main building?",
      answer:
        "The Beachfront Villa is located approximately 50 meters from the main building, offering privacy while remaining easily accessible.",
    },
    {
      question: "Can I have guests visit my villa?",
      answer:
        "Day visitors are welcome at the villa. Please inform the butler in advance to arrange guest access and amenities.",
    },
  ],
  3: [
    {
      question: "Are the garden rooms close to the pool?",
      answer:
        "The Garden Paradise Rooms are located near the main pool area, approximately a 2-minute walk from the pool facilities.",
    },
    {
      question: "Can I request a room on the ground floor?",
      answer:
        "Yes, ground floor rooms are available upon request. Please specify your preference when making your reservation.",
    },
    {
      question: "Are pets allowed in this room?",
      answer:
        "We love our furry friends, but unfortunately pets are not allowed in the Garden Paradise Rooms.",
    },
  ],
  4: [
    {
      question: "Are children's meals included?",
      answer:
        "Breakfast is included for all guests. Children's lunch and dinner are available at our family restaurant at reduced prices.",
    },
    {
      question: "Is babysitting available?",
      answer:
        "Yes, professional babysitting services can be arranged through our concierge. Please book at least 24 hours in advance.",
    },
    {
      question: "Do you provide baby equipment?",
      answer:
        "Yes, we provide baby cots, high chairs, strollers, and child-proofing amenities upon request.",
    },
  ],
  5: [
    {
      question: "What spa treatments are available?",
      answer:
        "We offer a range of couples treatments including massage, facials, and romantic spa packages. In-room services are available.",
    },
    {
      question: "Can we arrange a private dinner on the terrace?",
      answer:
        "Yes, private terrace dining can be arranged for special occasions. Please contact the concierge to plan your experience.",
    },
    {
      question: "Is the jacuzzi private?",
      answer:
        "Yes, the jacuzzi is located on your private terrace and is exclusively for suite guests.",
    },
  ],
  6: [
    {
      question: "What is included with personal chef service?",
      answer:
        "The personal chef can prepare breakfast, lunch, and dinner in your suite. Grocery shopping and menu planning are included.",
    },
    {
      question: "Can we host events in the suite?",
      answer:
        "The Presidential Suite can host small gatherings of up to 12 guests. Event planning services are available through our concierge.",
    },
    {
      question: "Is helicopter transfer available?",
      answer:
        "Yes, private helicopter transfers can be arranged from the airport or nearby locations. Please contact the concierge for pricing.",
    },
  ],
};