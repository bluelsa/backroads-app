import tourOne from '../images/tour-1.jpeg'
import tourTwo from "../images/tour-2.jpeg";
import tourThree from "../images/tour-3.jpeg";
import tourFour from "../images/tour-4.jpeg";

export const pageLinks = [
  { id: 1, href: "#home", text: "home" },
  { id: 2, href: "#about", text: "about" },
  { id: 3, href: "#services", text: "services" },
  { id: 4, href: "#tours", text: "tours" },
];

export const socialLinks = [
  { id: 1, href: "https://www.twitter.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.twitter.com", icon: "fab fa-squarespace" },
];

export const services = [
  {
    id: 1,
    icon: "fas fa-wallet fa-fw",
    title: "saving money",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 2,
    icon: "fas fa-tree fa-fw",
    title: "endless hiking",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
  {
    id: 3,
    icon: "fas fa-socks fa-fw",
    title: "amazing comfort",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, officia.",
  },
];

export const tours = [
  {
    id: 1,
    img: tourOne,
    title: "Tibet Adventure",
    date: "august 26th, 2020",
    location: "china",
    length: 6,
    price: 2100,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 2,
    img: tourTwo,
    title: "Best of Java",
    date: "October 1st, 2020",
    location: "indonesia",
    length: 11,
    price: 1400,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
  {
    id: 3,
    img: tourThree,
    title: "Explore Hong Kond",
    date: "september 15th, 2020",
    location: "Hong Kong",
    length: 8,
    price: 5000,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },

  {
    id: 4,
    img: tourFour,
    title: "kenya highlights",
    date: "december 5th, 2019",
    location: "kenya",
    length: 20,
    price: 3300,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maxime reprehenderit eum quod exercitationem fugit, qui corporis.",
  },
];