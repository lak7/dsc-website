export const teamMembers: TeamMember[] =  [
    { id:1,
      name: "Shivansh Das", 
      role:"Lead", 
      bio:"As the Lead of the DSC, Shivansh takes charge of driving the society's mission to foster a tech-driven community, leading a range of innovative projects and initiatives. His strong leadership, organizational, and problem-solving abilities enable him to effectively steer the team towards success and impactful outcomes." ,
      imageUrl: "/build.jpg",
      featured: true,
    },
    {
      id:1,
      name: "Shivansh Das", 
      role:"Lead", 
      bio:"As the Lead of the DSC, Shivansh takes charge of driving the society's mission to foster a tech-driven community, leading a range of innovative projects and initiatives. His strong leadership, organizational, and problem-solving abilities enable him to effectively steer the team towards success and impactful outcomes." ,
      imageUrl: "/build.jpg",
    },
    { id:2,
      name: "Kashish Tyagi", 
      role: "Vice-Lead" ,
      bio : "Kashish is a true visionary, and she blends creativity with technical acumen, bringing fresh perspectives to innovative projects. As the Vice Lead of DSC, Kashish is eager to collaborate and drive technological advancement.",
      imageUrl: "/build.jpg",
    },
    { id:3,
      name: "Aayush Raj", role: "Creative Lead" , bio: "Aayush, as the Creative Lead for DSC, combines his technical skills with a strong creative vision.With a deep passion for design and innovation, Aayush leads the creative direction of the society’s projects, ensuring that every initiative is visually captivating and impactful.",
      imageUrl: "/build.jpg",
    },
    { id:4,
      name: "Paanav Puri", 
      role: "Event Management Lead", 
      bio: "As the Event Management Lead for DSC, Paanav excels in planning and executing impactful events that foster learning and collaboration among tech enthusiasts. His dedication to teamwork and meticulous attention to detail ensure the success of every initiative he undertakes, driving the vision of the society forward.",
      imageUrl: "/build.jpg",},
    { id:5,
      name: "Mayank Goel", 
      role: "Sponsorship Lead" ,
      bio : "Mayank brings his strategic mindset and persuasive communication skills to his role as the Sponsorship Lead for DSC. With a passion for fostering partnerships and driving mutual growth, Mayank excels at building relationships with sponsors to support the society’s initiatives.",
      imageUrl: "/build.jpg",
    },
    { id:6,
      name: "Lakshay Gupta", 
      role: "Technical Lead",
      bio: "As the Technical Lead for DSC, Lakshay plays a pivotal role in driving the technical direction of the society's projects, utilizing his strong foundation in programming and development.His collaborative approach and deep technical expertise make him an integral part of the team.",
      imageUrl: "/build.jpg",
     }
  ]
export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  imageUrl: string
  featured?: boolean
}
const Departments = [
  {
    name: "Content and Documentation",
    description: "Responsible for creating engaging content and maintaining accurate records for seamless communication.",
    Heads: ["Anisha Garg", "Manasi S Pillai"],
    Executives: [
      "Anant Sharma",
      "Aryan Kumar",
      "Manik Jindal",
      "Niharika",
      "Shaivi Goyal"
    ],
    Volunteers: ["Abhilasha Negi", "Pritha", "Saamiya", "Saksham Chandela"]
  },
  {
    name: "Design and Video Editing",
    description: "Creating compelling visuals and multimedia content to capture and share the essence of projects.",
    Heads: ["Faraz Khan", "Mehul Gupta", "Swechchha Patel"],
    Executives: [
      "Aditya Tyagi",
      "Anjali Mittal",
      "Chahal",
      "Chhavi Gupta",
      "Dhruv Kashyap",
      "Himanshu Singh",
      "Nishtha Agarwal",
      "Parth Ahuja",
      "Piyush Chauhan",
      "Pratyush Kumar Rai",
      "Satpal",
      "Shubham"
    ],
    Volunteers: ["Aryan Tyagi", "Pranay Chaudhary"]
  },
  {
    name: "Publicity and Social Media",
    description: "Enhancing the team’s presence through impactful social media campaigns and publicity.",
    Heads: ["Anshul Gupta", "Vidhi Setiya", "Uditya Raj Singh"],
    Executives: [
      "Amit Kumar",
      "Asmit Patel",
      "Jatin Prabhakar",
      "Mukul",
      "Nilesh Bassi",
      "Sagar Kumar Jha",
      "Sambhav",
      "Vansh Tandon"
    ],
    Volunteers: [
      "Aditya Tyagi",
      "Ayush Vibhor",
      "Deepti Gautam",
      "Md Yusuf Masood",
      "Rakshit Shokeen",
      "Rohit Kumar",
      "Sparsh Bhardwaj",
      "Sahil Garg",
      "Vivek Singh"
    ]
  },
  {
    name: "Sponsorship",
    description: "Building and managing relationships with sponsors to ensure financial and resource support.",
    Heads: ["Pari Gupta", "Kartik Gupta"],
    Executives: [
      "Aagam Jain",
      "Bhanu Prakash",
      "Daksh Chopra",
      "Lakshay Kaushik",
      "Lakshita Verma",
      "Shaad Abdullah",
      "Shyam Agarwal",
      "S Siddhant",
      "Varun Kaushik",
      "Yash Nagpal",
      "Yashika Gandhi"
    ]
  },
  {
    name: "Event Management",
    description: "Planning and executing events with precision and creativity.",
    Heads: ["Aryan Tyagi", "Bhavisya Ratna"],
    Executives: [
      "Ayush Bansal",
      "Harsh",
      "Harsh Sharma",
      "Manav Manhas",
      "Om Tripathi",
      "Shivansh Suryan"
    ],
    Volunteers: [
      "Devika Malhotra",
      "Govind Gupta",
      "Krish Gupta",
      "Shiv Arora",
      "Vanshika Bansal"
    ]
  },
  {
    name: "Full Stack (Web Dev + UI/UX)",
    description: "The backbone of technological innovation, creating robust systems and platforms.",
    Heads: ["Archit Jain"],
    Executives: [
      "Dhruv Roy",
      "Lakshay Jain",
      "Rishi Kumar Nayak",
      "Vasundhra Yadav",
      "Ishika Gupta",],
    Volunteers: [
      "Kaushal",
      "Saparya Jagannath",
      "Suhavi Jain"
    ]
  },
  {
    name: "DevOps (Android Dev + Cloud Dev)",
    description: "Streamlining operations with efficient systems and processes to ensure smooth execution.",
    Heads: ["Tanishq Raj"],
    Executives: ["Ishika", "Tanishq", "Ujjawal", "Aarjav Jain"],
    Volunteers: ["Shazan Hussain Zaidi", "Samvid Chawla", "Vaibhav Sharma"]
  },
  {
    name: "Machine Learning and Analytics (AI/ML + Data Science)",
    description: "Exploring cutting-edge AI and analytics to support data-driven decision-making.",
    Heads: ["Aditya Batra"],
    Executives: ["Aditya Yadav", "Mukul Kumar"],
    Volunteers: [
      "Devanshu Anand",
      "Lakshya Saxena",
      "Nityam Gupta",
      "Nitin Kumar Singh",
      "Piyush Baweja"
    ]
  }
];


export { Departments};