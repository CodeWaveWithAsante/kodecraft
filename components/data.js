import { LuSmartphoneNfc } from "react-icons/lu";
import { FaUserCheck } from "react-icons/fa";
import { SiFsecure } from "react-icons/si";
import { BsLaptop, BsFillCartDashFill, BsPhone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { CiMobile1 } from "react-icons/ci";
import { AiOutlineAntDesign } from "react-icons/ai";

export const stats = [
  { id: "01", value: 2500, title: "Clients", start: 2400, suffix: "+" },
  { id: "02", value: 12, title: "Projects", start: 0, suffix: "K+" },
  { id: "03", value: 200, title: "Team Members", start: 0, suffix: "+" },
];

export const aboutData = [
  {
    id: "01",
    title: "Smart, Seamless Operations",
    text: "In this category, we focus on developing software solutions that optimize and streamline your business operations.",
    icon: <LuSmartphoneNfc />,
  },
  {
    id: "02",
    title: "Empowering User Experiences",
    text: "This category revolves around creating intuitive and user-centric software applications. ",
    icon: <FaUserCheck />,
  },
  {
    id: "03",
    title: "Secure Software Solutions",
    text: "Security is paramount in the digital world, and this category is dedicated to providing robust software solutions.",
    icon: <SiFsecure />,
  },
];

export const services = [
  {
    id: "01",
    title: "Custom Software Development",
    text: "Tailor-made software solutions designed to meet your specific business requirements, providing enhanced functionality and scalability.",
    icon: (
      <BsLaptop className='text-4xl text-white p-2 bg-[#c0054da7] rounded-full hover:scale-100' />
    ),
  },
  {
    id: "02",
    title: "Mobile App Development",
    text: "Create engaging and intuitive mobile applications for iOS and Android platforms, empowering you to connect with your target audience on the go.",
    icon: (
      <BsPhone className='text-4xl text-white p-2 bg-[#0b05c0a7] rounded-full hover:scale-100' />
    ),
  },
  {
    id: "03",
    title: "Web Development",
    text: "Develop visually appealing and user-friendly websites that effectively showcase your brand, products, and services, while ensuring a seamless browsing experience.",
    icon: (
      <CgWebsite className='text-4xl text-white p-2 bg-[#8205c0a7] rounded-full hover:scale-100' />
    ),
  },
  {
    id: "04",
    title: "E-commerce Solutions",
    text: "Build robust and secure e-commerce platforms, enabling you to expand your online presence, streamline sales processes, and maximize revenue.",
    icon: (
      <BsFillCartDashFill className='text-4xl text-white p-2 bg-[#0566c0a7] rounded-full' />
    ),
  },
  {
    id: "05",
    title: "UI/UX Design",
    text: "Craft visually stunning and user-centric interfaces that enhance user experience, improve customer engagement, and drive brand loyalty.",
    icon: (
      <AiOutlineAntDesign className='text-4xl text-white p-2 bg-[#c00505a7] rounded-full' />
    ),
  },
  {
    id: "06",
    title: "Software Testing and Quality Assurance",
    text: "Conduct comprehensive testing and quality assurance processes to ensure the reliability, performance, and security of your software applications, minimizing risks and maximizing customer satisfaction.",
    icon: (
      <SiFsecure className='text-4xl text-white p-2 bg-[#c0b005] rounded-full' />
    ),
  },
];

export const teamMembers = [
  {
    id: "01",
    name: "Jonathan Brown",
    title: "CEO/Founder",
    email: "jbrown@dayrep.com",
    image: "/asante.png",
  },
  {
    id: "02",
    name: "Francisco N. Wolfe",
    title: "Senior Software Engineer",
    email: "FranciscoNWolfe@dayrep.com",
    image: "/tim.jpg",
  },
  {
    id: "03",
    name: "Danielle R. Tallman",
    title: "Graphics/HR Managerr",
    email: "DanielleRTallman@dayrep.com",
    image: "/ellen.jpg",
  },
  {
    id: "04",
    name: "Phillip J. Carter",
    title: "UI/UX Designer",
    email: "PhillipJCarter@dayrep.com",
    image: "/john.jpg",
  },
  {
    id: "05",
    name: "Betty C. Freeman",
    title: "Product Manager",
    email: "BettyCFreeman@dayrep.com",
    image: "/ellen.jpg",
  },
  {
    id: "06",
    name: "Fred K. Santiago",
    title: "QA Engineer",
    email: "FredKSantiago@dayrep.com",
    image: "/asante1.png",
  },
];

export const reviews = [
  {
    id: 1,
    name: "John Smith",
    rating: 5,
    image: "/asante.png",
    review:
      "KodeCraft Solutions delivered an exceptional custom software solution that perfectly met our business needs. Their team was highly professional, efficient, and responsive throughout the entire development process. We are extremely satisfied with the results and would highly recommend their services.",
  },
  {
    id: 2,
    name: "Emily Johnson",
    rating: 4.5,
    image: "/ellen.jpg",
    review:
      "I hired KodeCraft Solutions for mobile app development, and they exceeded my expectations. Their team displayed excellent technical expertise and attention to detail. The app they developed for us is user-friendly and visually appealing. I appreciate their dedication and commitment to delivering a high-quality product.",
  },
  {
    id: 3,
    name: "David Thompson",
    rating: 4,
    image: "/tim.jpg",
    review:
      "KodeCraft Solutions created a stunning website for our business. Their web development services are top-notch, and they successfully brought our vision to life. The team ensured a smooth user experience and incorporated all the features we requested. We are delighted with their work and would gladly collaborate with them again.",
  },
  {
    id: 4,
    name: "Sarah Wilson",
    rating: 5,
    image: "/john.jpg",
    review:
      "Working with KodeCraft Solutions on our e-commerce platform was a fantastic experience. They delivered a secure and scalable solution that has significantly boosted our online sales. Their attention to detail and ability to understand our business requirements were commendable. We highly recommend their e-commerce services.",
  },
  {
    id: 5,
    name: "Alex Turner",
    rating: 4.5,
    image: "/asante1.png",
    review:
      "The UI/UX design services provided by KodeCraft Solutions were outstanding. They truly understood our brand identity and crafted visually stunning interfaces that are both aesthetically pleasing and intuitive. Our customers love the new look, and we've seen increased engagement as a result. Thank you, KodeCraft!",
  },
  {
    id: 6,
    name: "Jennifer Miller",
    rating: 4,
    image: "/ellen.jpg",
    review:
      "KodeCraft Solutions' software testing and quality assurance team played a crucial role in ensuring the reliability of our application. They meticulously tested every aspect, identifying and addressing potential issues before launch. Their expertise and attention to detail gave us confidence in the performance and security of our software.",
  },
];

export const footerLinks = [
  {
    id: "01",
    title: "Company",
    links: ["Home", "About Us", "Services", "Our Team"],
  },
  {
    id: "02",
    title: "Policy",
    links: ["Policies", "Contact", "FAQ"],
  },
  {
    id: "03",
    title: "Support",
    links: ["Account", "Support Center", "Feedback", "Accessibility"],
  },
];
