// databaseSchema/TravelDiaryData.js

export const TravelDiaryData = [
  {
    id: 301,
    travelDataId: 101, // One-to-One connection with Taj Mahal (ID: 101)
    destinationName: "Agra Heritage Tour",
    days: [
      {
        dayNumber: 1,
        title: "Arrival in Agra & Sunset at Mehtab Bagh",
        time: "05:30 PM",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
        description: "Checked into the hotel and took an evening rickshaw to Mehtab Bagh. Watched the sunset across the Yamuna River with a glowing back view of the Taj Mahal."
      },
      {
        dayNumber: 2,
        title: "Sunrise at the Taj Mahal & Marble Art Workshop",
        time: "05:45 AM",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=800&q=80",
        description: "Woke up early to catch the first light on the white marble dome. Explored the inner chamber and later visited a local workshop to see Pietra Dura inlay art."
      },
      {
        dayNumber: 3,
        title: "Exploring Agra Fort & Local Bedai Breakfast",
        time: "09:00 AM",
        image: "https://images.unsplash.com/photo-1585135497273-1a86b09fe707?auto=format&fit=crop&w=800&q=80",
        description: "Walked through the red sandstone courtyards of Agra Fort where Shah Jahan spent his final years, followed by famous street food in Sadar Bazaar."
      },
      {
        dayNumber: 4,
        title: "Fatehpur Sikri Excursion & Departure",
        time: "11:15 AM",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=800&q=80",
        description: "Drove to the abandoned Mughal city of Fatehpur Sikri and stood before the massive Buland Darwaza before heading back to the train station."
      }
    ]
  },
  {
    id: 302,
    travelDataId: 102, // One-to-One connection with Alleppey Backwaters (ID: 102)
    destinationName: "Alleppey Backwater Escape",
    days: [
      {
        dayNumber: 1,
        title: "Boarding the Kettuvallam Houseboat",
        time: "12:00 PM",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        description: "Boarded our wooden houseboat at Punnamada Jetty. Enjoyed a traditional welcome drink and settled in as we set sail along palm-lined canals."
      },
      {
        dayNumber: 2,
        title: "Canoe Exploration in Narrow Village Canals",
        time: "04:00 PM",
        image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=800&q=80",
        description: "Switched to a small hand-paddled canoe to navigate quiet village waterways where big houseboats cannot go. Watched ducks and village life along the banks."
      },
      {
        dayNumber: 3,
        title: "Marari Beach Sunset & Fresh Seafood Dinner",
        time: "06:30 PM",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "Took a tuk-tuk to Marari Beach for a peaceful evening walk on white sands, ending the night with grilled Karimeen fish at a local shack."
      }
    ]
  },
  {
    id: 303,
    travelDataId: 103, // One-to-One connection with Jaipur (ID: 103)
    destinationName: "Royal Jaipur Exploration",
    days: [
      {
        dayNumber: 1,
        title: "Hawa Mahal & Johari Bazaar Walking Tour",
        time: "10:00 AM",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        description: "Photographed the intricate honeycomb facade of Hawa Mahal and spent hours exploring textile shops and block-printing stores in the Old City."
      },
      {
        dayNumber: 2,
        title: "Amer Fort & Sheesh Mahal Experience",
        time: "08:30 AM",
        image: "https://images.unsplash.com/photo-1509100194014-d498093963f6?auto=format&fit=crop&w=800&q=80",
        description: "Hiked up to Amer Fort early to avoid crowds. The mirror artwork in Sheesh Mahal lit up brilliantly under morning light."
      },
      {
        dayNumber: 3,
        title: "City Palace Courtyards & Jantar Mantar",
        time: "02:00 PM",
        image: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0f51?auto=format&fit=crop&w=800&q=80",
        description: "Explored the peacock gates inside City Palace and marveled at the massive stone sundials at Jantar Mantar astronomical observatory."
      },
      {
        dayNumber: 4,
        title: "Nahargarh Fort Sunset View over Pink City",
        time: "05:45 PM",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        description: "Drove to Nahargarh Fort on top of the Aravalli hills to catch a panoramic sunset view of the entire illuminated pink city below."
      }
    ]
  },
  {
    id: 304,
    travelDataId: 104, // One-to-One connection with Varanasi (ID: 104)
    destinationName: "Spiritual Days in Varanasi",
    days: [
      {
        dayNumber: 1,
        title: "Sunrise Boat Ride & Ghat Walk",
        time: "05:30 AM",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        description: "Rode a traditional wooden boat as sunrise touched ancient riverbank temples, observing early morning prayers and rituals."
      },
      {
        dayNumber: 2,
        title: "Evening Ganga Aarti at Dashashwamedh Ghat",
        time: "06:45 PM",
        image: "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?auto=format&fit=crop&w=800&q=80",
        description: "Attended the grand evening worship ceremony. Priests held massive brass oil lamps accompanied by chanting and ringing temple bells."
      }
    ]
  },
  {
    id: 305,
    travelDataId: 105, // One-to-One connection with Pangong Tso Lake (ID: 105)
    destinationName: "Ladakh High-Altitude Expedition",
    days: [
      {
        dayNumber: 1,
        title: "Acclimatization & Leh Market Walk",
        time: "04:00 PM",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=800&q=80",
        description: "Rested in Leh to acclimatize to high altitude. Took a gentle walk through the local Tibetan market in the evening."
      },
      {
        dayNumber: 2,
        title: "Drive Across Chang La Pass to Pangong Lake",
        time: "07:00 AM",
        image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=800&q=80",
        description: "Crossed icy mountain roads at 17,500 feet before arriving at the turquoise shores of Pangong Lake."
      },
      {
        dayNumber: 3,
        title: "Stargazing & Camping near Lake Shore",
        time: "09:30 PM",
        image: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?auto=format&fit=crop&w=800&q=80",
        description: "Experienced crystal-clear, pollution-free night skies and photographed the Milky Way over our lake campsite."
      }
    ]
  },
  {
    id: 306,
    travelDataId: 106, // One-to-One connection with Palolem Beach (ID: 106)
    destinationName: "Goa Coastal Beach Diary",
    days: [
      {
        dayNumber: 1,
        title: "Check-in at Beachside Wooden Shack",
        time: "02:00 PM",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        description: "Arrived at Palolem Beach and checked into a cozy beach shack right on the sand facing coconut palm trees."
      },
      {
        dayNumber: 2,
        title: "Early Morning Dolphin Spotting & Kayaking",
        time: "06:30 AM",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2?auto=format&fit=crop&w=800&q=80",
        description: "Rented a kayak and paddled into the quiet bay where we spotted dolphins playing in calm ocean waters."
      },
      {
        dayNumber: 3,
        title: "Candlelight Seafood Dinner on the Beach",
        time: "08:00 PM",
        image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=80",
        description: "Enjoyed a relaxing dinner with ocean waves softly crashing a few feet away under starlit skies."
      }
    ]
  },
  {
    id: 307,
    travelDataId: 107, // One-to-One connection with Darjeeling (ID: 107)
    destinationName: "Darjeeling Tea & Mountain Diary",
    days: [
      {
        dayNumber: 1,
        title: "Tiger Hill Kanchenjunga Sunrise",
        time: "04:30 AM",
        image: "https://images.unsplash.com/photo-1509100194014-d498093963f6?auto=format&fit=crop&w=800&q=80",
        description: "Drove to Tiger Hill summit in freezing cold weather to watch dawn turn Mount Kanchenjunga snow peaks into bright pink."
      },
      {
        dayNumber: 2,
        title: "Riding the UNESCO Toy Train",
        time: "11:00 AM",
        image: "https://images.unsplash.com/photo-1603201236596-eb1a63eb0f51?auto=format&fit=crop&w=800&q=80",
        description: "Took a nostalgic steam engine Toy Train ride from Darjeeling to Ghoom through sharp mountain loops and pine forests."
      },
      {
        dayNumber: 3,
        title: "Tea Tasting Tour in Happy Valley Estate",
        time: "02:30 PM",
        image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=80",
        description: "Walked through terraced green tea slopes, learned about black tea processing, and sampled fresh local brews."
      }
    ]
  }
];