// Mock data for the application
// This would typically come from an API

export const programs = [
  {
    id: 1,
    name: "HIIT Revolution",
    description: "High-intensity interval training to maximize calorie burn and boost metabolism in just 45 minutes.",
    duration: 45,
    image: "/public/image19.webp"
  },
  {
    id: 2,
    name: "Power Yoga",
    description: "Dynamic yoga sequences that build strength, flexibility and mindfulness for total body wellness.",
    duration: 60,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 3,
    name: "Strength Mastery",
    description: "Focused strength training with expert coaching to build muscle and power for all fitness levels.",
    duration: 50,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 4,
    name: "Cycle Intensity",
    description: "Rhythm-based indoor cycling with dynamic music and motivating instruction for cardio fitness.",
    duration: 45,
    image: "https://images.unsplash.com/photo-1579126038374-6064e9370f0f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 5,
    name: "Combat Cardio",
    description: "High-energy boxing and kickboxing combinations to build endurance, strength, and confidence.",
    duration: 60,
    image: "https://images.unsplash.com/photo-1520445740767-946d5793b5b4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  },
  {
    id: 6,
    name: "Mind & Body Balance",
    description: "Restorative practices combining meditation, stretching, and breathwork for stress reduction.",
    duration: 55,
    image: "https://images.unsplash.com/photo-1518644730709-0835105d9daa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  }
];

export const trainers = [
  {
    id: 1,
    name: "Alex Torres",
    specialty: "HIIT Specialist",
    bio: "ACE Certified with 8+ years experience in high-intensity training and functional fitness.",
    quote: "I believe in pushing boundaries and helping you discover your true potential through challenging, effective workouts.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    specialty: "Yoga Instructor",
    bio: "RYT 500 with specializations in Power Yoga, Vinyasa Flow, and mindfulness practices.",
    quote: "My approach combines physical postures with mindfulness to create a practice that strengthens both body and mind.",
    image: "https://images.unsplash.com/photo-1609899464926-c34598335a59?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 3,
    name: "Marcus Williams",
    specialty: "Strength Coach",
    bio: "NSCA-CSCS certified with expertise in powerlifting, functional strength, and athletic performance.",
    quote: "I focus on building functional strength with proper form and progressive programming to help you achieve sustainable results.",
    image: "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  },
  {
    id: 4,
    name: "Elena Rodriguez",
    specialty: "Cycle Instructor",
    bio: "Certified cycling coach with background in competitive racing and performance training.",
    quote: "My high-energy rides combine rhythm, resistance, and motivation to create a challenging and exhilarating fitness experience.",
    image: "https://images.unsplash.com/photo-1593476123561-9516f2097158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
  }
];

export const schedule = {
  monday: [
    {
      name: "HIIT Revolution",
      trainer: "Alex Torres",
      time: "6:00 AM",
      description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
      location: "Studio A"
    },
    {
      name: "Power Yoga",
      trainer: "Sarah Johnson",
      time: "9:00 AM",
      description: "Dynamic yoga sequences that build strength, flexibility and mindfulness.",
      location: "Studio B"
    },
    {
      name: "Strength Mastery",
      trainer: "Marcus Williams",
      time: "12:00 PM",
      description: "Focused strength training with expert coaching to build muscle and power.",
      location: "Weight Room"
    },
    {
      name: "Cycle Intensity",
      trainer: "Elena Rodriguez",
      time: "5:30 PM",
      description: "Rhythm-based indoor cycling with dynamic music and motivating instruction.",
      location: "Cycle Studio"
    },
    {
      name: "Combat Cardio",
      trainer: "Jason Lee",
      time: "6:30 PM",
      description: "High-energy boxing and kickboxing combinations to build endurance and strength.",
      location: "Studio A"
    },
    {
      name: "Mind & Body Balance",
      trainer: "Olivia Chen",
      time: "7:30 PM",
      description: "Restorative practices combining meditation, stretching, and breathwork.",
      location: "Studio B"
    }
  ],
  tuesday: [
    {
      name: "Strength Mastery",
      trainer: "Marcus Williams",
      time: "7:00 AM",
      description: "Focused strength training with expert coaching to build muscle and power.",
      location: "Weight Room"
    },
    {
      name: "Cycle Intensity",
      trainer: "Elena Rodriguez",
      time: "9:00 AM",
      description: "Rhythm-based indoor cycling with dynamic music and motivating instruction.",
      location: "Cycle Studio"
    },
    {
      name: "Power Yoga",
      trainer: "Sarah Johnson",
      time: "12:00 PM",
      description: "Dynamic yoga sequences that build strength, flexibility and mindfulness.",
      location: "Studio B"
    },
    {
      name: "HIIT Revolution",
      trainer: "Alex Torres",
      time: "5:30 PM",
      description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
      location: "Studio A"
    },
    {
      name: "Mind & Body Balance",
      trainer: "Olivia Chen",
      time: "7:00 PM",
      description: "Restorative practices combining meditation, stretching, and breathwork.",
      location: "Studio B"
    }
  ],
  wednesday: [
    {
      name: "Combat Cardio",
      trainer: "Jason Lee",
      time: "6:00 AM",
      description: "High-energy boxing and kickboxing combinations to build endurance and strength.",
      location: "Studio A"
    },
    {
      name: "Mind & Body Balance",
      trainer: "Olivia Chen",
      time: "9:00 AM",
      description: "Restorative practices combining meditation, stretching, and breathwork.",
      location: "Studio B"
    },
    {
      name: "Cycle Intensity",
      trainer: "Elena Rodriguez",
      time: "12:00 PM",
      description: "Rhythm-based indoor cycling with dynamic music and motivating instruction.",
      location: "Cycle Studio"
    },
    {
      name: "Strength Mastery",
      trainer: "Marcus Williams",
      time: "5:30 PM",
      description: "Focused strength training with expert coaching to build muscle and power.",
      location: "Weight Room"
    },
    {
      name: "HIIT Revolution",
      trainer: "Alex Torres",
      time: "6:30 PM",
      description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
      location: "Studio A"
    },
    {
      name: "Power Yoga",
      trainer: "Sarah Johnson",
      time: "7:30 PM",
      description: "Dynamic yoga sequences that build strength, flexibility and mindfulness.",
      location: "Studio B"
    }
  ],
  thursday: [
    {
      name: "Strength Mastery",
      trainer: "Marcus Williams",
      time: "7:00 AM",
      description: "Focused strength training with expert coaching to build muscle and power.",
      location: "Weight Room"
    },
    {
      name: "Power Yoga",
      trainer: "Sarah Johnson",
      time: "9:00 AM",
      description: "Dynamic yoga sequences that build strength, flexibility and mindfulness.",
      location: "Studio B"
    },
    {
      name: "Combat Cardio",
      trainer: "Jason Lee",
      time: "12:00 PM",
      description: "High-energy boxing and kickboxing combinations to build endurance and strength.",
      location: "Studio A"
    },
    {
      name: "Cycle Intensity",
      trainer: "Elena Rodriguez",
      time: "5:30 PM",
      description: "Rhythm-based indoor cycling with dynamic music and motivating instruction.",
      location: "Cycle Studio"
    },
    {
      name: "Mind & Body Balance",
      trainer: "Olivia Chen",
      time: "7:00 PM",
      description: "Restorative practices combining meditation, stretching, and breathwork.",
      location: "Studio B"
    }
  ],
  friday: [
    {
      name: "HIIT Revolution",
      trainer: "Alex Torres",
      time: "6:00 AM",
      description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
      location: "Studio A"
    },
    {
      name: "Cycle Intensity",
      trainer: "Elena Rodriguez",
      time: "9:00 AM",
      description: "Rhythm-based indoor cycling with dynamic music and motivating instruction.",
      location: "Cycle Studio"
    },
    {
      name: "Power Yoga",
      trainer: "Sarah Johnson",
      time: "12:00 PM",
      description: "Dynamic yoga sequences that build strength, flexibility and mindfulness.",
      location: "Studio B"
    },
    {
      name: "Strength Mastery",
      trainer: "Marcus Williams",
      time: "5:30 PM",
      description: "Focused strength training with expert coaching to build muscle and power.",
      location: "Weight Room"
    },
    {
      name: "Combat Cardio",
      trainer: "Jason Lee",
      time: "6:30 PM",
      description: "High-energy boxing and kickboxing combinations to build endurance and strength.",
      location: "Studio A"
    }
  ],
  saturday: [
    {
      name: "HIIT Revolution",
      trainer: "Alex Torres",
      time: "8:00 AM",
      description: "High-intensity interval training to maximize calorie burn and boost metabolism.",
      location: "Studio A"
    },
    {
      name: "Power Yoga",
      trainer: "Sarah Johnson",
      time: "9:30 AM",
      description: "Dynamic yoga sequences that build strength, flexibility and mindfulness.",
      location: "Studio B"
    },
    {
      name: "Cycle Intensity",
      trainer: "Elena Rodriguez",
      time: "11:00 AM",
      description: "Rhythm-based indoor cycling with dynamic music and motivating instruction.",
      location: "Cycle Studio"
    },
    {
      name: "Strength Mastery",
      trainer: "Marcus Williams",
      time: "1:00 PM",
      description: "Focused strength training with expert coaching to build muscle and power.",
      location: "Weight Room"
    }
  ],
  sunday: [
    {
      name: "Mind & Body Balance",
      trainer: "Olivia Chen",
      time: "9:00 AM",
      description: "Restorative practices combining meditation, stretching, and breathwork.",
      location: "Studio B"
    },
    {
      name: "Cycle Intensity",
      trainer: "Elena Rodriguez",
      time: "10:30 AM",
      description: "Rhythm-based indoor cycling with dynamic music and motivating instruction.",
      location: "Cycle Studio"
    },
    {
      name: "Strength Mastery",
      trainer: "Marcus Williams",
      time: "12:00 PM",
      description: "Focused strength training with expert coaching to build muscle and power.",
      location: "Weight Room"
    }
  ]
};

export const testimonials = [
  {
    id: 1,
    name: "Jennifer K.",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    status: "Member for 2 years",
    rating: 5,
    text: "Joining Elevate was the best fitness decision I've ever made. The trainers are incredibly knowledgeable and supportive, pushing me to achieve goals I never thought possible. The facility is beautiful and always clean!"
  },
  {
    id: 2,
    name: "Michael T.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    status: "Member for 1 year",
    rating: 5,
    text: "The variety of classes at Elevate keeps my fitness routine exciting and challenging. I've seen incredible improvements in my strength and endurance. The community is so welcoming - it feels like a fitness family!"
  },
  {
    id: 3,
    name: "Samantha R.",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    status: "Member for 6 months",
    rating: 5,
    text: "I was intimidated to start my fitness journey, but the team at Elevate made me feel comfortable from day one. The personalized attention and encouraging environment have transformed not just my body but my confidence as well."
  }
];
