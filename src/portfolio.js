/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Navin",
  title: "Navin Chaudhary",
  role: "PHP Laravel Developer",
  subTitle:
    "I build Laravel APIs and web applications, from MySQL queries and authentication to responsive interfaces in React and Blade.",
  resumeLink: `${process.env.PUBLIC_URL}/Resume.pdf`,
  displayGreeting: true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Navin1012",
  linkedin: "https://www.linkedin.com/in/navin1012/",
  gmail: "nc13760@gmail.com",
  instagram:
    "https://www.instagram.com/navin_chaudhary___?igsh=OXZrbHpsc3IwdzBl",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle:
    "My work spans database design, application development, and deployment.",
  skills: [
    {
      title: "Laravel APIs",
      icon: "fas fa-server",
      description:
        "Build REST APIs for web and mobile apps, including orders, payments, and authentication."
    },
    {
      title: "Database Optimization",
      icon: "fas fa-database",
      description:
        "Model application data in MySQL and MongoDB, and tune queries."
    },
    {
      title: "React & Blade Interfaces",
      icon: "fas fa-code",
      description:
        "Develop responsive interfaces using React.js and Blade templates."
    },
    {
      title: "Authentication & Access",
      icon: "fas fa-lock",
      description:
        "Implement authentication, roles, and permissions with Laravel Breeze, Jetstream, and Sanctum."
    },
    {
      title: "Service Integrations",
      icon: "fas fa-plug",
      description:
        "Connect payment gateways, shipping APIs, and cloud services."
    },
    {
      title: "Deployment & CI/CD",
      icon: "fas fa-code-branch",
      description: "Manage deployment, version control, and CI/CD pipelines."
    }
  ],
  softwareSkills: [
    {skillName: "PHP", fontAwesomeClassname: "fab fa-php"},
    {skillName: "Laravel", fontAwesomeClassname: "fab fa-laravel"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "ReactJS", fontAwesomeClassname: "fab fa-react"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "Tailwind CSS", fontAwesomeClassname: "fas fa-paint-brush"},
    {skillName: "VS Code", fontAwesomeClassname: "fas fa-code"},
    {skillName: "AWS", fontAwesomeClassname: "fab fa-aws"}
  ],
  display: true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "Gokul Global University",
      logo: require("./assets/images/ggu.png"),
      subHeader: "Master of Computer Applications (MCA)",
      duration: "2023 - 2025",
      desc: "Focused on advanced software development, database management, and full-stack web technologies.",
      descBullets: [
        "Specialized in web application development using PHP Laravel and React.js",
        "Worked on real-world academic projects involving RESTful API integration"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {Stack: "Frontend/Design", progressPercentage: "70%"},
    {Stack: "Backend", progressPercentage: "90%"},
    {Stack: "Programming", progressPercentage: "80%"}
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: false, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Facebook",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "June 2018 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2017 – May 2018",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Notes on Laravel APIs, query performance, and building interfaces with React.",
  displayMediumBlogs: "false",
  blogs: [
    {
      title: "Building RESTful APIs with Laravel 10",
      description:
        "Learn to design secure, scalable REST APIs in Laravel 10 using best practices."
    },
    {
      title: "Optimizing Laravel Performance for Production",
      description:
        "Guide on caching, query optimization, and performance tuning in Laravel."
    },
    {
      title: "Integrating React with Laravel using Inertia.js",
      description:
        "Step-by-step guide for building full-stack apps with Laravel + React."
    }
  ],
  display: true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: "Contact Me",
  headline: "Let’s talk about your project.",
  subtitle:
    "Building a Laravel app, integrating an API, or improving an existing backend? Tell me what you’re working on and where you could use a hand. I’m also happy to connect about developer roles and collaborations.",
  number: "+91-9313404276",
  email_address: "nc13760@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
