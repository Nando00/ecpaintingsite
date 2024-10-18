/* interiro dummy data list :-
- Navbar
- Banner
- Feature
- About
- Projects
- Team
- News
- Testimonial
- Gallery
- Newsletter
- Footer
  - menu widget
  - copyright
  - social links
*/
/* ------------------------------------ */
// Menu data
/* ------------------------------------ */
export const menuData = [
  {
    label: "Feature",
    path: "#feature",
    offset: "80",
  },
  {
    label: "About",
    path: "#aboutUs",
    offset: "80",
  },
  {
    label: "Project",
    path: "#project",
    offset: "80",
  },
  {
    label: "Team",
    path: "#team",
    offset: "80",
  },
  {
    label: "News",
    path: "#news",
    offset: "40",
  },
  {
    label: "Testimonial",
    path: "#testimonial",
    offset: "80",
  },
];

/* ------------------------------------ */
// Banner section data
/* ------------------------------------ */
/* ------------------------------------ */
// About section data
/* ------------------------------------ */
import parentImg from "common/assets/image/ecpaintinglogograybackground.png";
/* ------------------------------------ */
// Feature section data
/* ------------------------------------ */
import corporateIcon from "common/assets/image/interior/feature/1.svg";
import landscapeIcon from "common/assets/image/interior/feature/2.svg";
import interiorIcon from "common/assets/image/interior/feature/3.svg";
/* ------------------------------------ */
// Gallery data
/* ------------------------------------ */
import galleryImg1 from "common/assets/image/doorinstall.jpg";
import galleryImg2 from "common/assets/image/ceiling.jpg";
import galleryImg3 from "common/assets/image/house-repaint.jpg";
import galleryImg4 from "common/assets/image/drywall.jpg";
import galleryImg5 from "common/assets/image/livingroom.jpg";
import logo from "common/assets/image/ecpaintinglogo.png";
/* ------------------------------------ */
// Projects section data
/* ------------------------------------ */
import project1 from "common/assets/image/creativework.jpg";
import slide1 from "common/assets/image/interior/slider/slide-1.png";
import slide2 from "common/assets/image/interior/slider/slide-2.png";
import slide3 from "common/assets/image/interior/slider/slide-3.png";
import member1 from "common/assets/image/interior/team/member1.jpg";
import member2 from "common/assets/image/interior/team/member2.jpg";
import member3 from "common/assets/image/interior/team/member3.jpg";
/* ------------------------------------ */
// Team section data
/* ------------------------------------ */
import { Icon } from "react-icons-kit";
import { dribbble } from "react-icons-kit/fa/dribbble";
/* ------------------------------------ */
// Footer data
/* ------------------------------------ */
import { facebook } from "react-icons-kit/fa/facebook";
import { googlePlus } from "react-icons-kit/fa/googlePlus";
import { skype } from "react-icons-kit/fa/skype";
import { twitter } from "react-icons-kit/fa/twitter";
import { socialDribbble } from "react-icons-kit/ionicons/socialDribbble";
import { socialFacebook } from "react-icons-kit/ionicons/socialFacebook";
import { socialGoogleplus } from "react-icons-kit/ionicons/socialGoogleplus";
import { socialSkype } from "react-icons-kit/ionicons/socialSkype";
import { socialTwitter } from "react-icons-kit/ionicons/socialTwitter";

export const bannerData = {
  discount: "10%",
  discountLabel: "Enjoy a discount today WITH US",
  title: "Your Dream Space Painted To Perfection",
  text: "We appeal to the customer's desire to create a home they adore, emphasizing that our painting services deliver stunning, durable finishes that are easy to maintain—an attractive benefit for many customers.",
  carousel: [
    {
      id: 1,
      thumb_url: slide1,
      title: "Restroom",
      link: "#1",
    },
    {
      id: 2,
      thumb_url: slide2,
      title: "Livingroom",
      link: "#1",
    },
    {
      id: 3,
      thumb_url: slide3,
      title: "Corner",
      link: "#1",
    },
  ],
};

export const featureData = {
  title: "OUR SERVICES",
  slogan: "Featured Service that We Provide",
  features: [
    {
      id: 1,
      icon: corporateIcon,
      title: "Custom Paint Jobs",
      description:
        "We offer comprehensive painting services, including interior and exterior painting with quality paint, touch-ups and repainting, as well as accent walls and custom finishes.",
    },
    {
      id: 2,
      icon: landscapeIcon,
      title: "Handy Man Fixes",
      description:
        "Our handyman services include minor repairs and maintenance, fixture installation and replacements, caulking and sealing, as well as basic carpentry and assembly.",
    },
    {
      id: 3,
      icon: interiorIcon,
      title: "Drywall Installation and Repair",
      description:
        "Our drywall services include installation and repair, taping and finishing, texture application, and popcorn ceiling removal.",
    },
  ],
};

export const aboutData = {
  thumb_url: parentImg,
  title: "Hi, Meet <br> EC Painting",
  text: "At E.C Painting, we're passionate about transforming spaces with color. We believe the right paint can elevate any environment, creating a more inviting, stylish, and vibrant atmosphere. That's why we provide expert painting services tailored to your style and needs, helping you bring your vision to life.",
};

export const projectData = {
  title: "WORK PROCEDURE",
  slogan: "How We Do Our Projects",
  thumb_url: project1,
  projects: [
    {
      id: 1,
      text: "Feel free to give us a call! Before you do, make sure you’ve selected the colors you want to use for your project. We’ll also work together to plan the best schedule to paint your home, ensuring everything fits smoothly into your timeline. Additionally, if you have any specific design ideas or custom touches you’d like to include, have them ready so we can bring your vision to life!",
    },
  ],
};

export const teamData = {
  title: "OUR TEAM MEMBER",
  slogan: "Meet Our Perfectionist",
  members: [
    {
      id: 1,
      avatar: member1,
      name: "Roman Ul Oman",
      designation: "Project Manager",
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: "#1",
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: "#1",
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: "#1",
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: "#1",
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: "#1",
        },
      ],
    },
    {
      id: 2,
      avatar: member2,
      name: "Jeny Doe",
      designation: "Lead Designer",
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: "#1",
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: "#1",
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: "#1",
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: "#1",
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: "#1",
        },
      ],
    },
    {
      id: 3,
      avatar: member3,
      name: "Naina Cooper",
      designation: "Marketing Manager",
      social_links: [
        {
          id: 1,
          icon: <Icon icon={socialFacebook} />,
          url: "#1",
        },
        {
          id: 2,
          icon: <Icon icon={socialDribbble} />,
          url: "#1",
        },
        {
          id: 3,
          icon: <Icon icon={socialGoogleplus} />,
          url: "#1",
        },
        {
          id: 4,
          icon: <Icon icon={socialSkype} />,
          url: "#1",
        },
        {
          id: 5,
          icon: <Icon icon={socialTwitter} />,
          url: "#1",
        },
      ],
    },
  ],
};

/* ------------------------------------ */
// News section data
/* ------------------------------------ */
export const newsData = [
  {
    id: 1,
    title: "Corporate design is a crucial part of your brand.",
    excerpt:
      "Corporate design is a crucial part of your brand. Our approach corporate design is extraordinary. Please come and visit us",
    link_text: "Read",
    link_url: "#",
  },
  {
    id: 2,
    title: "Learn more about landscape plans, how to design them.",
    excerpt:
      "Learn more about landscape plans, how to design them, what to watch out for in your layout. We deign the appropriate layout for our clients to deliver best",
    link_text: "Read",
    link_url: "#",
  },
  {
    id: 3,
    title: "Discover our design ideas, beautiful photos for interior design.",
    excerpt:
      "Discover our design ideas, beautiful photos and how-to projects to create Interior Design. We try to reflect your personality on our design",
    link_text: "Read",
    link_url: "#",
  },
  {
    id: 4,
    title: "Interior design is an art and we are trying to paint monalisa.",
    excerpt:
      "With the best players in the designing sector, we explore a whole new world of interior design.Our approach corporate design is extraordinary",
    link_text: "Read",
    link_url: "#",
  },
];

/* ------------------------------------ */
// Testimonial data
/* ------------------------------------ */
export const testimonialData = {
  title: "TESTIMONIAL",
  slogan: "What Our Clients Say",
  reviews: [
    {
      id: 0,
      name: "John Flores",
      designation: "",
      username: "",
      account_url: "#",
      comment:
        "We had a wonderful experience with E.C Painting. They were incredibly helpful in guiding us to choose the perfect colors for our home. The painting process was smooth and seamless.",
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: 1,
      name: "Luara Garza",
      designation: "",
      username: "",
      account_url: "#",
      comment:
        "We were thoroughly impressed with the quality of workmanship and customer service from E.C Painting. Our freshly painted walls look incredible.",
      avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    },
    {
      id: 2,
      name: "Lina Spears",
      designation: "",
      username: "",
      account_url: "#",
      comment:
        "We couldn't be happier with the exceptional work from E.C Painting. The attention to detail and professionalism truly exceeded our expectations. Our home looks amazing!",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ],
};

export const galleryData = [
  {
    id: 1,
    thumb_url: galleryImg1,
    name: "Door Installation",
    link: "#",
  },
  {
    id: 2,
    thumb_url: galleryImg2,
    name: "Living Room Ceiling",
    link: "#",
  },
  {
    id: 3,
    thumb_url: galleryImg3,
    name: "Exterior Painting",
    link: "#",
  },
  {
    id: 4,
    thumb_url: galleryImg4,
    name: "DryWall Installation",
    link: "#",
  },
  {
    id: 5,
    thumb_url: galleryImg5,
    name: "Living Room",
    link: "#",
  },
];

/* ------------------------------------ */
// Newsletter data
/* ------------------------------------ */
export const newsletterData = {
  title: "SUBSCRIBE NEWSLETTER",
  slogan: "Don’t Miss Out Any Offer",
  note: "Note: Please call us at 12pm to 8am. otherwise our customer supporter will not available to reach your call, but you can drop mail anytime.",
};

export const footerData = {
  logo: logo,
  mail: "cardenasesteban27@gmail.com",
  phone: "(832)-853-7441",
  socialLinks: [
    {
      id: 1,
      icon: <Icon icon={facebook} />,
      name: "facebook",
      link: "#",
    },
    {
      id: 2,
      icon: <Icon icon={dribbble} />,
      name: "dribbble",
      link: "#",
    },
    {
      id: 3,
      icon: <Icon icon={googlePlus} />,
      name: "googlePlus",
      link: "#",
    },
    {
      id: 4,
      icon: <Icon icon={skype} />,
      name: "skype",
      link: "#",
    },
    {
      id: 5,
      icon: <Icon icon={twitter} />,
      name: "twitter",
      link: "#",
    },
  ],
  menuWidgets: [
    {
      id: 1,
      title: "ABOUT US",
      menu: [
        // {
        //   id: 1,
        //   text: "Support Center",
        //   link: "#",
        // },
        // {
        //   id: 2,
        //   text: "Customer Support",
        //   link: "#",
        // },
        {
          id: 3,
          text: "About Us",
          link: "#",
        },
        // {
        //   id: 4,
        //   text: "Copyright",
        //   link: "#",
        // },
        // {
        //   id: 5,
        //   text: "Popular Campaign",
        //   link: "#",
        // },
      ],
    },
    // {
    //   id: 2,
    //   title: "OUR INFORMATION",
    //   menu: [
    //     {
    //       id: 1,
    //       text: "Return Policy",
    //       link: "#",
    //     },
    //     {
    //       id: 2,
    //       text: "Privacy Policy",
    //       link: "#",
    //     },
    //     {
    //       id: 3,
    //       text: "Terms & Conditions",
    //       link: "#",
    //     },
    //     {
    //       id: 4,
    //       text: "Site Map",
    //       link: "#",
    //     },
    //     {
    //       id: 5,
    //       text: "Store Hours",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 3,
    //   title: "MY ACCOUNT",
    //   menu: [
    //     {
    //       id: 1,
    //       text: "Press inquiries",
    //       link: "#",
    //     },
    //     {
    //       id: 2,
    //       text: "Social media directories",
    //       link: "#",
    //     },
    //     {
    //       id: 3,
    //       text: "Images & B-roll",
    //       link: "#",
    //     },
    //     {
    //       id: 4,
    //       text: "Permissions",
    //       link: "#",
    //     },
    //     {
    //       id: 5,
    //       text: "Speaker requests",
    //       link: "#",
    //     },
    //   ],
    // },
    // {
    //   id: 4,
    //   title: "POLICY",
    //   menu: [
    //     {
    //       id: 1,
    //       text: "Application security",
    //       link: "#",
    //     },
    //     {
    //       id: 2,
    //       text: "Software principles",
    //       link: "#",
    //     },
    //     {
    //       id: 3,
    //       text: "Unwanted software policy",
    //       link: "#",
    //     },
    //     {
    //       id: 4,
    //       text: "Responsible supply chain",
    //       link: "#",
    //     },
    //   ],
    // },
  ],
};

/* ------------------------------------ */
// social profile
/* ------------------------------------ */
export const socialProfile = [
  {
    id: 1,
    icon: "flaticon-facebook-logo",
    link: "#",
  },
  {
    id: 2,
    icon: "flaticon-twitter-logo-silhouette",
    link: "#",
  },
  {
    id: 3,
    icon: "flaticon-instagram",
    link: "#",
  },
  {
    id: 4,
    icon: "flaticon-tumblr-logo",
    link: "#",
  },
  {
    id: 5,
    icon: "flaticon-dribble-logo",
    link: "#",
  },
];
