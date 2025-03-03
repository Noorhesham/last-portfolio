export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Education", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];
export const tech = ["/type.png", "/node.png", "/idhHZwYUWa.png", "/next.png", "/react.svg", "/tailwind.png"];
export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[60vh]",
    imgClassName: "w-full h-full object-top md:object-center",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-4 ",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "crafting high-performance web applications with sleek, user-friendly interfaces.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: " right-0 absloute",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building mern stack projects",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to work with me ?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center absolute md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
  {
    id: 7,
    title: "<Backend>",
    text: "I engineer robust backend systems using MongoDB, Express, and Node.js. From crafting efficient APIs to ensuring data integrity, I navigate backend complexities with precision. Each line of code is meticulously crafted for scalability, security, and reliability, reflecting my commitment to delivering seamless digital experiences.",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 min-h-[59vh]  md:min-h-[50vh] ",
    imgClassName: "  w-[20rem] object-top md:object-center",
    titleClassName: " justify-start",
    img: "/backend.png",
    spareImg: "",
  },
  {
    id: 8,
    title: "Crafting Stunning User Experiences: Showcasing My Frontend Mastery and Standout Solo Projects",

    className: "lg:col-span-3 md:col-span-3 md:row-span-1  min-h-[40vh] h-full",
    imgClassName: " absolute right-0 -bottom-12 md:w-96 w-60",
    titleClassName: " justify-start",
    img: "/frontend.png",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1123,
    title: `Orient | Ecommerce`,
    des: "I fully developed the front-end for this e-commerce platform as my first project at Right Mind Company. The website is designed to provide a complete shopping experience with features like caching, filtering, pagination, user data updates, order management, payment processing, and login/sign-up functionality with 2FA and forgot password support. It uses TanStack Query for caching and updating user data, with a complex mechanism for changing dates. The platform also includes blogs, wishlists, and real-time notifications using FCM. This project showcases my expertise in building a fully-featured e-commerce site.",
    img: ["/orient1.png", "/orientphone.png", "/orient2.png", "/orient3.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/next.webp", "/query.png"],
    link: "https://orient-nine.vercel.app/",
    git: "https://github.com/Noorhesham/orient",
  },

  {
    id: 154,
    title: "Shinopi Store |<br> Amazon Clone",
    des: `Shinobi Store is an e-commerce platform inspired by Amazon and Naruto. It boasts powerful features for both users and admins, offering a seamless shopping experience with advanced functionality. Key features include user authentication (with email verification and 2FA), smooth product browsing with advanced filters, detailed product pages, and a multi-step product upload process. It supports real-time notifications and has a robust admin dashboard for managing products, orders, and revenue. Payments are integrated with Stripe for seamless transactions, and sellers automatically get a Stripe Connect account. Built with modern web technologies like Next.js, TypeScript, MongoDB, and React Query, it delivers an optimal user experience with server-side rendering, paginated content, and responsive design.`,
    img: "/Screenshot (206).png",
    gen: "Next",
    features: [
      "Robust signup and login with NextAuth, including email verification.",
      "Beautiful landing page with featured products and categories.",
      "Advanced filtering and sorting by category, subcategory, and custom prices.",
      "Debounced requests to optimize resources.",
      "Server-side rendering, prefetching, and pagination for bookmarkable URLs and state persistence.",
      "Streaming, suspense, and loading skeletons for enhanced performance.",
      "Fully responsive design.",
      "Detailed product pages with zoomable images and image sliders.",
      "Add-to-cart synced with local storage and user accounts.",
      "Reviews and ratings for each product.",
      "Seller profile pages with detailed information.",
      "User dashboard with sales stats, order details, and customer locations.",
      "Admin dashboard for full CRUD operations using React Query.",
      "Admins can view all orders, manage products, send notifications, block users, and track revenue.",
      "Smooth 3-step multi-form: product details, image upload/reordering, and variant management.",
      "Admin notifications for product approval.",
      "Address, location, and phone collection during checkout.",
      "Stripe integration for payments and fund distribution.",
      "Automatic Stripe Connect account creation for sellers.",
      "Payments collected in my Stripe account and distributed to sellers.",
      "Real-time notifications and email updates for user actions.",
      "Built with Next.js, TypeScript, MongoDB, Socket.IO, Tailwind CSS, and React Query.",
    ],

    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://nine-tails-shinobi-shop.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7218625840341745666?compact=1",
    git: "https://github.com/Noorhesham/shopify",
  },
  {
    id: 155,
    title: "Dr Nurse App",
    description:
      "As part of my role at Right Mind Company, I developed the front-end for the Dr Nurse App, a platform designed for healthcare professionals and hospitals. The app allows specialists and hospitals to post job offers, with users able to apply directly. It also includes features for managing job offers, handling meeting scheduling, subscription payments, searching for people or job opportunities, and a filter search system. The app uses a point system for certain actions and rewards. The platform supports multiple languages using Next.js with NextIntl for internationalization. This project showcases my ability to build robust, feature-rich applications tailored to specific industries.",
    features: [
      "Job posting functionality for hospitals and specialists.",
      "User ability to apply for jobs and send job offers.",
      "Meeting scheduling and management system.",
      "Subscription-based payment system.",
      "Search functionality with advanced filtering for jobs and people.",
      "Point system for actions like applying for jobs or making offers.",
      "Real-time notifications for updates on job offers, meetings, and applications.",
      "Multi-language support with NextIntl for a global user base.",
      "Fully responsive design for seamless experience across devices.",
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/next.webp", "/query.png"],
    link: "https://dr-nurse.vercel.app/en",
    img: ["/drnurse1.png", "/Screenshot 2025-01-21 192831.png", "/drnurse2.png", "/drnurse3.png", "/drnurse4.png"],
  },

  {
    id: 1,
    title: "Quiz Boi |<br> Quiz Multiplayer !",
    des: `upload quizzes, add questions, solve quizzes with data persistence , implemented cheat prevention mechanisms(timers,etc). dynamic homepage showcasing featured quizzes, user authentication,
      leaderboard functionalities, and social interactions including following, commenting, and likes.`,
    img: "/QuizBoi.png",
    gen: "Next",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://quiz-boi.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7184615930960764929?compact=1",
    git: "https://github.com/Noorhesham/Quiz-Boi",
  },

  {
    id: 123123,
    title: "Elshady |<br> Teaching Platform",
    des: `I developed a dynamic Learning Management System (LMS) using TypeScript and Next.js, enhanced with animations powered by Framer Motion. The platform features essential functionalities like user authentication with login and signup processes, as well as comprehensive CRUD operations for managing course content. Users can engage with quizzes and videos while tracking their progress, with restrictions in place to ensure a secure learning environment. Additionally, the system includes a leaderboard to showcase top students, fostering a sense of competition and motivation among learners. This project not only showcases my technical skills but also emphasizes the importance of user experience through smooth animations and interactive design. Collaborating with the backend team allowed me to develop the LMS as a full-stack application, ensuring seamless integration and efficient data management throughout the platform. `,
    img: ["/shady.png", "/Screenshot 2024-09-04 163501.png", "/Screenshot 2024-09-01 070302.png"],
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.webp", "/query.png"],
    link: "https://platform.el-shady.com/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7236438392052318209?compact=1",
    git: "https://github.com/Noorhesham/Arabic-Teacher-nextjs",
  },
  {
    id: 156,
    title: "Gaming Boi | Full-Stack Game Rating & Wishlist App",
    description:
      "Gaming Boi is a full-stack platform built with Node.js, Next.js, and MongoDB, designed for gamers to rate games, view detailed game information, and add them to their wishlists. The platform allows users to search for games, rate them, and save their favorites to a personal wishlist. The app includes features for user authentication, rating systems, and real-time updates. Built with a modern stack, it offers a responsive design, smooth user experience, and scalable architecture for future expansions.",
    features: [
      "Full-stack app built with Node.js, Next.js, and MongoDB.",
      "User authentication for secure login and registration.",
      "Game rating system where users can rate games.",
      "Search functionality for browsing games.",
      "Wishlist feature to save favorite games.",
      "Real-time updates for game ratings and wishlist changes.",
      "Fully responsive design optimized for both mobile and desktop.",
      "Multi-language support using NextIntl for global users.",
      "Rating history and user interaction data.",
      "Secure and scalable architecture for future features.",
    ],
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://gaming-boi-tutorial2.vercel.app/",
    git: "https://github.com/Noorhesham/gaming-boi-tutorial2",
    img: ["/gamingboi1.png", "/gamingboi2.png", "/gamingboi3"],
    video: "https://www.youtube.com/embed/tLDDYY49exI?si=5DI7rk5O95wr1hST",
  },
  {
    id: 157,
    title: "Palestine Website | Interactive Experience for a Cause",
    description:
      "As part of my contribution to the Palestinian cause, I developed the Palestine website, which was designed both as an interactive tutorial and a support platform. The project aimed to raise awareness of the ongoing crisis in Palestine by delivering an engaging and immersive web experience. Using GSAP animations and Locomotive Scroll, I created smooth and captivating animations, making the website more engaging. The project was not only a technical challenge but also a means of offering aid through global recognition. The website garnered attention from the international community, helping to spread awareness and increase support for Palestine during their ongoing crisis. My role was to bring the idea to life, using advanced web technologies to enhance user interaction and provide a platform for support. This project showcased my skills and commitment to using technology for meaningful causes, as it led to positive recognition and increased visibility for Palestine’s crisis.",
    features: [
      "Interactive web experience to raise awareness about Palestine's crisis.",
      "Tutorial-based platform that educates users about the ongoing situation.",
      "GSAP animations and smooth transitions to engage users visually.",
      "Locomotive Scroll integration for an immersive, smooth scrolling experience.",
      "Responsive design to ensure accessibility across devices.",
      "Impactful storytelling with rich media, focusing on the Palestinian cause.",
      "Multi-language support to reach a global audience and increase awareness.",
      "Recognition from international organizations and support networks.",
    ],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.webp", "/logo.gif"],
    link: "https://palestine-help.vercel.app/en ",
    video: "https://www.youtube.com/embed/rjCm_XDTPjQ?si=INIuXOyLzJBtTY0-",
    git: "https://github.com/Noorhesham/palestine-help",
    img: ["/palestine1.png", "/palestine2.png", "/palestine3.png"],
  },
  {
    id: 160,
    title: "Fullstack Dashboard with Next.js and MongoDB – My Biggest Yet!",
    description:
      "After late-night coding sessions and countless cups of coffee, I'm excited to share my most complex fullstack project yet—a dynamic, feature-packed web app with Next.js and MongoDB! This dashboard includes advanced form handling, dynamic pages, multi-language support, and much more. Let’s dive into the tech magic that makes this dashboard tick. 🚀",
    features: [
      "Dynamic Dashboards: Create pages on the fly with multi-language support (English + Arabic) 🌐.",
      "Form Paradise: Advanced forms with calendar selectors, multi-select arrays, combo boxes with search, dynamic inputs, and complete error handling.",
      "Image Management: Seamless multi-image uploads integrated with Cloudinary, with full CRUD operations for images (including delete from database and Cloudinary).",
      "Array Handling: Full CRUD operations for arrays, with bulk delete functionality and real-time updates.",
      "Caching & Revalidation: ISR and SSR to ensure blazing-fast performance and always fresh data.",
      "Pagination: Flawless pagination that scales with your data.",
      "Export to PDF: Generate sleek PDFs for individual or all courses with just a click. 🖨️",
      "Backend & Frontend Powered by Next.js + MongoDB: Efficient CRUD functions and GET requests, optimized for speed and scalability.",
      "HTML-like Descriptions: Rich descriptions with bold, italics, links, and other formatting to enhance user experience.",
    ],

    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://highpoint.vercel.app/en",
    git: "https://github.com/Noorhesham/highpoint",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7281006129864704000?compact=1",
    img: ["/courses1.png", "/courses2.png", "/courses3.png"],
  },
  {
    id: 12360,
    title: "Fullstack E Store For Kids with Next.js and MongoDB",
    description: `🎉 Mission Complete: 1 Day Speedrun! 🚀
After all the intense coding, debugging, and caffeinated decision-making… I’ve officially finished a full-fledged Islamic kids & toys e-commerce web app! 🎊👶🧸
And not just any e-commerce app—this one’s a beast! 🦸‍♂️
✅ Admin Dashboard? Done. CRUD everything! ✨
✅ 1 Dynamic Form Component & 1 Super Clean Server Function ♻️ (because reusable code = happy dev life)
✅ GSAP-powered eye-catching UI for kids (because boring interfaces are illegal :) )
✅ Infinite Scroll, Search, Filter, Sort—because nobody likes clicking "Next Page" 100 times 🔄
✅ Order Management, Email Notifications & Store Controls 🛒📩
✅ Dynamic Currency Based on Location 🌎💰 (because no one wants to manually convert prices)
✅ Super responsive admin panel (works on mobile, tablet, even your smart fridge…probably)
And the craziest part? I built all of this in just 1 day! 🏎️💨`,

    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/ts.svg",
      "/three.svg",
      "/fm.svg",
      "/node.png",
      "/idhHZwYUWa.png",
      "/next.webp",
      "/query.png",
    ],
    link: "https://muslim-kids.vercel.app/",
    git: "https://github.com/Noorhesham/children-store",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7298745408774668288?compact=1",
    img: [
      "/Screenshot 2025-02-22 101135.png",
      "/Screenshot 2025-02-22 101157 - Copy.png",
      "/Screenshot 2025-02-22 101157.png",
      "Screenshot 2025-02-22 101207.png",
    ],
  },
  {
    id: 158,
    title: "Zentary Animation Clone | Award-Winning Tutorial Website",
    description:
      "As part of my exploration into web animations and design, I developed a tutorial website that cloned the interactive animations of Zentary, a beautifully designed site that won awards for its visual storytelling. This project helped me hone my skills in advanced animations and transitions while adhering to the principles of clean design and usability. Using tools like GSAP and custom scroll effects, I was able to create stunning visuals and smooth animations, bringing the user's journey to life. The project not only served as a learning experience but also went on to receive recognition in the form of a prestigious Awwwards nomination for its design and animation excellence. This recognition helped showcase my skills in creating highly interactive, engaging websites with advanced animation techniques. The website gained traction within the design community and was used as a reference for future projects by other developers. It features an immersive scrolling experience, combining smooth transitions and captivating animations to engage users visually and emotionally.",
    features: [
      "Tutorial-based animation clone of the Zentary website to learn advanced animation techniques.",
      "GSAP animations for smooth, responsive transitions across the site.",
      "Immersive scrolling experience using custom scroll animations and transitions.",
      "Clean, modern design focused on user engagement and interactivity.",
      "Award-winning design, recognized by Awwwards for animation and user experience.",
      "Responsive design ensuring accessibility across devices and screen sizes.",
      "Interactive elements and visual storytelling to captivate and guide users through the site.",
      "Multiple smooth animations that create a dynamic and visually rich experience.",
    ],
    techStack: ["GSAP", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Custom Scroll Animations"],
    link: "https://radiant-biscuit-b06af8.netlify.app/",
    git: "https://github.com/Noorhesham/award-winning-animation",
    img: ["/animation1.png", "/animation2.png", "/animation3.png", "/animation4.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/logo.gif"],
    video: "https://www.youtube.com/embed/updZd8CuJl8?si=7WJDGn8Qml--ll-b",
  },
  {
    id: 112358,
    title: "Personal portfolio tutorial",
    description:
      "Youtube tutorial explaining how to customize a reusable templaet  portfolio for people to showcase thier work with gsap seo animations great fonts images eetc.",

    techStack: ["GSAP", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Custom Scroll Animations"],
    link: "https://noortries.netlify.app/",
    git: "https://github.com/Noorhesham/Your-dream-Portfolio",
    img: ["/port1.png", "/port5.png", "/port3.png", "/port14.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/logo.gif"],
    video: "https://www.youtube.com/watch?v=_6qAAkPvNyg",
  },
  {
    id: 2,
    title: "Movie-Boi |React-IMDB-Netflex Clone",
    des: `
      Embark on a cinematic adventure with my React-powered web app The Movie Boi that seamlessly blends movies, anime, cartoons, actors, companies, and series into a unified entertainment hub. Effortlessly navigate through a diverse catalog using the intuitive search, sliders, and filters, ensuring you discover content tailored to your preferences.
    Elevate your browsing experience with sorting options, allowing you to arrange results by relevance, popularity, or other criteria. Express your opinions and insights by adding reviews, fostering a community where users can share recommendations and engage in discussions.
    The unique "to watchlist" feature transforms your viewing experience, shaping a personalized feed based on your liked movies. Tailor your watchlist to curate a feed that aligns with your taste, providing a curated selection of content that resonates with your preferences.
    Delve deeper into the world of entertainment by exploring information about actors, companies, and their contributions to your favorite shows. Our web app also includes a custom YouTube showcase, offering a seamless integration for trailers, interviews, and behind-the-scenes content. Enhance your visual experience with a dedicated image showcase, providing a captivating glimpse into the visual aesthetics of each title.
    With a sleek design and powerful functionalities, our React-based web app redefines the way you discover, organize, and enjoy a wide array of entertainment content.`,
    img: "/Screenshot (49).png",
    gen: "React",
    iconLists: ["/query.png", "/tail.svg", "/js.png", "/re.svg", "/supa.jpeg", "/fm.svg"],
    link: "https://the-movieboi.netlify.app/",
    video: "https://www.youtube.com/embed/EVnnrEWPId4?si=XwR6Ay2A_f_y6UsU",
    git: "https://github.com/Noorhesham/Netflex-Clone",
  },
  {
    title: "Link Tree Clone",
    img: ["/Screenshot 2025-01-21 192602.png", "/Screenshot (195).png"],
    gen: "React",
    des: `Our application leverages modern web development practices to provide a seamless user experience. Built with Next.js, TypeScript, and MongoDB, it ensures robust performance and maintainability. One of the key features is the integration of webhooks for synchronizing user data with Clerk, a user management service. This synchronization ensures that user profiles are always up-to-date with the latest information.
  Using Clerk's webhooks, we handle user data updates efficiently. When a user profile is created or modified, a webhook event triggers our server to process and update the corresponding data in our MongoDB database. This approach follows the latest authentication best practices, ensuring secure and reliable data handling.
  Additionally, our application manages complex array fields and forms with ease. The combination of React Hook Form and Zod validation allows us to build dynamic and flexible forms, enhancing user interaction and data validation.`,
    git: "https://github.com/Noorhesham/LinkTreeclone",
    iconLists: ["/next.webp", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg"],
    video: "https://www.youtube.com/embed/RvoeZVL6pec",
    id: 4333,
    link: "https://vega-nfc.vercel.app/",
  },
  {
    id: 123123,
    title: "Tabib !",
    des: `Tabib Web App for Doctors: My second project, "Tabib," is a sophisticated web application designed for doctors to manage patient information effectively. Built using Next.js and TypeScript, the app incorporates GSAP and Locomotive Scroll for engaging animations, creating a seamless user experience. Additionally, I integrated an AI chatbot to assist doctors in accessing information quickly and enhancing patient interactions. However, I encountered several challenges during the development process, such as ensuring smooth scrolling interactions while maintaining performance and responsiveness. Integrating animations without compromising usability proved to be a balancing act, requiring meticulous attention to detail. Despite these hurdles, the project has allowed me to deepen my understanding of complex front-end development and showcase my ability to create visually appealing, functional applications. I aim to include both the LMS and Tabib in my portfolio to highlight my diverse skill set and adaptability in tackling various web development challenges.`,
    img: "/tabib.png",
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.webp", "/query.png", "/logo.gif"],
    link: "https://tabib-sooty.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7244038221238554624?compact=1",
    git: "https://github.com/Noorhesham/tabib",
  },
  {
    id: 159,
    title: "Smooth Landing Page | Scroll-Tastic Animations & GSAP Magic",
    description:
      "Introducing my latest creation—an animated landing page built with Next.js and TypeScript that brings the web alive with scroll-based animations! This project pushes the limits of GSAP and Locomotive Scroll to deliver a smooth, immersive experience like no other. From infinite scrolling to snazzy sliders and cinematic animations, this page flows like butter and keeps you engaged every time you scroll. It's a landing page that feels like it's doing a moonwalk while you interact with it! ✨",
    features: [
      "Scroll-based animations that flow smoothly with GSAP and Locomotive Scroll.",
      "Infinite X/Y scrolling, snazzy sliders, and cinematic sequence animations triggered by GSAP ScrollTrigger.",
      "SAV (Scroll Activated Victory) animations that sync perfectly with user interactions.",
      "Responsive animations using GSAP MatchMedia for desktop and mobile versions.",
      "Reusable components built with reusability in mind, ensuring clean, efficient code.",
      "Optimized for performance to keep animations fast and smooth, avoiding any lag.",
      "Engaging user experience with infinite scroll sliders and smooth transitions.",
      "Lightning-fast SSR and dynamic routing powered by Next.js.",
      "Visually appealing and functional design with focus on smooth user interactions.",
    ],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7282797009231622148?compact=1",
    git: "https://github.com/Noorhesham/Alcon-Animation-awaards",
    img: ["/rm1.png", "/rm2.png", "/rm3.png"],
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.webp", "/query.png"],
  },
  {
    id: 4343,
    title: "Naruto Website | Gsap Scroll Animations",
    des: `scroll triggered animations Parallax scrolling 
  Advanced CSS
  GSAP Animations
  Smooth scroll 
  moving environments 
  video background 
  sliders + auto sliders 
  
  `,
    gen: "Javascript",
    img: "/Screenshot (212).png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.webp", "/logo.gif"],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7221238496139591680?compact=1",
    git: "https://github.com/Noorhesham/scroll-Animations-Naruto",
  },
  {
    id: 3,
    title: "Gaming-Castle| Vanilla js Mvc Gaming Store ",
    des: `more than 500k games using rawg api with details screenshots tags similar games everything clickable typing Javascript
      by mvc and oop Search with suggestions pagination and filters Sliders Zoom photo on click Wishlist responsive design and more....`,
    gen: "Javascript",
    img: "/gaming.png",
    iconLists: ["/sass.webp", "/js.png"],
    link: "https://gaming-castle.netlify.app/",
    video: "https://www.youtube.com/embed/le8_Q7OT52E",
    git: "https://github.com/Noorhesham/gaming-castle",
  },
  {
    id: 4343,
    title: "Naruto Website | Gsap Scroll Animations",
    des: `using three js and framer motion i designed this beutiful clean landing page for a company as a freelance project

`,
    gen: "Javascript",
    img: "/landing.png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/next.webp", "/logo.gif"],
    git: "https://github.com/Noorhesham/landingPage-for-exanor",
    link: "https://landing-page-for-exanor.vercel.app/",
  },
  {
    id: 123123,
    title: "Animation ! ",
    des: `Website that has alot of great animations with gsap ! not specicfic businnesss but just tranining on some complex animations`,
    img: ["/Screenshot 2024-09-24 142729.png"],
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.webp", "/query.png", "/logo.gif"],
    link: "https://gsap-animations-neon.vercel.app/goku",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7238666417749843968?compact=1",
    git: "https://github.com/Noorhesham/moon-parallex",
  },
  {
    id: 1231223,
    title: "SPIDER MAN ANIMATION ! ",
    des: `complex animations with gsap that has zoom ins outs , sequence animations split text and more `,
    img: ["/Screenshot 2024-11-01 075447.png"],
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/next.webp", "/logo.gif"],
    link: "https://gsap-animations-neon.vercel.app/m",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7246623238993178624?compact=1",
    git: "https://github.com/Noorhesham/moon-parallex",
  },
  {
    id: 32445,
    title: "Animation 2 ! ",
    des: `Website that has alot of great animations with gsap ! not specicfic businnesss but just tranining on some complex animations`,
    img: ["/Screenshot 2024-08-23 070813.png"],
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.webp", "/query.png", "/logo.gif"],
    link: "https://gsap-animations-neon.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7232614752730968064?compact=1",
    git: "https://github.com/Noorhesham/moon-parallex",
  },
  {
    id: 123123,
    title: "Saudia Soul",
    des: `Landing Page for a Saudi Travel Agency: In another project, I developed a visually striking landing page for a travel agency in Saudi Arabia using vanilla JavaScript, Sass, and Tailwind CSS. The page features stunning styles and smooth animations, creating an immersive experience for users. However, the development process was particularly complicated due to the constraints of using vanilla JavaScript without any frameworks. This required me to write custom scripts for interactivity and animation, which posed challenges in maintaining clean and efficient code. Utilizing Sass for styling allowed me to implement complex styles, while Tailwind CSS provided utility-first classes that enhanced design consistency. Despite the difficulties, this project has strengthened my ability to create engaging and dynamic web pages from scratch, showcasing my proficiency in frontend development techniques and design principles.`,
    img: "/Screenshot 2024-09-24 141847.png",
    gen: "Next",
    iconLists: ["/tail.svg", "/sass.webp", "/js.png"],
    link: "https://tabib-sooty.vercel.app/",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7238292658916339713?compact=1",
    git: "https://github.com/Noorhesham/Saudia",
  },

  {
    title: "Project Managment System ",
    img: "/Screenshot (243).png",
    gen: "React",
    des: `This project is a comprehensive Product Management System tailored for wholesalers, designed to streamline the management of financial transactions, inventory, and customer relations. The system enables users to track every aspect of their business, from recording invoices and managing debts to monitoring profits and organizing products by categories and subcategories.
  
  Key Features:
  
  Complete Financial Tracking: Easily record and monitor all buying and selling transactions. The system keeps a detailed log of invoices and customer payments, including the ability to track debts for customers who owe money.
  
  Advanced Inventory Management: Add, edit, and delete product categories and subcategories. Each category can house multiple products, with features to track stock levels, purchase prices, and sales prices.
  
  Customer Relationship Management: Manage customer information, including tracking debts. The system automatically adjusts customer debts based on payments, clearing the oldest debts first and ensuring accurate financial records.
  
  Optimized CRUD Operations: The app efficiently handles all Create, Read, Update, and Delete operations using just three hooks, ensuring that the data remains in sync with the UI. This approach enhances performance and simplifies code maintenance.
  
  Modern Tech Stack: Built as a Single Page Application (SPA) using React and TypeScript, the app leverages Refresh Tokens with Axios interceptors for secure and seamless authentication.
  
  Challenges and Solutions:
  
  One of the most challenging aspects of this project was the organization of the Backend and Database to handle complex relationships between products, categories, and customer transactions. By utilizing advanced hooks and caching strategies, the app maintains high performance while ensuring data consistency across the platform.
  
  Technologies Used:
  
  React.js (with Hooks)
  TypeScript
  Node.js & Express.js
  MongoDB
  JWT Authentication with Refresh Tokens
  Axios Interceptors
  Outcome:
  
  The final product is a powerful tool for wholesalers, providing them with an all-in-one solution to manage their business operations efficiently. The app's ability to track detailed financial records, manage inventory, and handle customer relations in real-time makes it an indispensable asset for users.
  
  `,
    git: "https://github.com/Noorhesham/Product-managment-system",
    iconLists: ["/node.png", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg", "/idhHZwYUWa.png", "/logo.gif"],

    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7230299408460857345?compact=1",
    id: 42333,
  },
  {
    title: "the wild oases admin dashboard",
    img: "/wild.png",
    video:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2F100006306765558%2Fvideos%2F2323603804515731%2F&show_text=false&width=560&t=0",
    gen: "React",
    link: "https://wild-oasis-noor.netlify.app/",
    iconLists: ["/query.png", "/tail.svg", "/js.png", "/re.svg", "/supa.jpeg", "/fm.svg"],

    des: `receive bookings from guests who want to come to your cabin as an emloyee , you will have the ability to edit delete add
            bookings or cabins have modern charts to show Statistcs and visualizes your data. upload photos and various information
            usingforms that handles all errors and ensure that you entered the right data and way more apility to Log in log out and sign up new accounts using real email verfication with passwords using Supabase
            React router to transition between different pages As a SPA and react query to handle the remote state`,
    id: 4,
    git: "https://github.com/Noorhesham/Wild-Oases",
  },
  {
    title: "the wild oases interface",
    img: "/Screenshot (132).png",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7198435428427816960?compact=1",
    gen: "React",
    link: "https://wild-oasses-interface.vercel.app/",
    iconLists: ["/next.webp", "/tail.svg", "/ts.svg", "/re.svg", "/supa.jpeg"],

    des: `I implemented a full reservation booking system with 2 web apps 
      one dashboard single page app for admins 
      and other SSR Next.js project user interface that allows users to book ! 
      🌲 **User-Facing Website** 🌲
      Built with **Next.js** and **TypeScript**, our user interface is sleek, responsive, and user-friendly. Here’s what makes it special:
      - **Server-Side Rendering (SSR)** and **React Server Components (RSC)** for fast, dynamic pages.
      - **Suspense** for seamless data loading.
      - **Auth.js** integration for easy Google sign-in.
      - Gorgeous design with **Tailwind CSS**.
      - Book any cabin effortlessly with our intuitive interface.`,
    id: 15,
    git: "https://github.com/Noorhesham/Wild-Oasses-Interface",
  },
  {
    id: 33232,
    title: "Natours | Book A Tour Node.js Api + Next js front ",
    des: `fully functional node js api with signup login controllers routes filter sort booking a tour creating tours (all crud operations) and role based authorization.`,
    gen: "Javascript",
    img: "/Screenshot (213).png",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/node.png", "/idhHZwYUWa.png", "/next.webp"],
    git: "https://github.com/Noorhesham/Booking-A-Tour-Api",
  },
  {
    title: "Shopify Clone",
    img: "/shopify1.png",
    gen: "React",
    des: "I made this shop home page with next js and tailwind css as a freelance project on freelancer ",
    git: "https://github.com/Noorhesham/shopy",
    iconLists: ["/next.webp", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg"],
    video: "https://www.youtube.com/embed/YuKcjo8j_WQ",
    id: 433,
  },
  {
    title: "Landing Page",
    img: "/Screenshot (173).png",
    gen: "React",
    des: "A landing page for a company  as a freelance project on freelancer,using 3d models and animations , fully responsive and type safe ",
    git: "https://github.com/Noorhesham/landingPage-for-exanor",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.webp"],
    video: "https://www.youtube.com/embed/oD2Mbo_rCGc",
    id: 435,
  },
  {
    title: "Robotic Design Modern interface",
    img: "/Screenshot (131).png",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7195121446870757376?compact=1",
    gen: "React",
    link: "https://robotic-design-modern.vercel.app/",
    iconLists: ["/next.webp", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg"],
    des: `Modern Interface: Experience a sleek and intuitive design crafted for seamless navigation.
      Engaging Animations: Elevate your browsing experience with captivating animations and smooth transitions.
      Parallax Scrolling: Dive deeper into the content with immersive parallax scrolling effects.
      Responsive Design: Accessible across all devices, ensuring a consistent experience whether you're on desktop or mobile.
      Framer Motion & Next.js: Leveraging Framer Motion and Next.js for dynamic and interactive user interfaces.
      UI/UX Excellence: Meticulously designed UI/UX to ensure a user-centric approach and enhanced usability.
      💻 Technical Highlights:
      One of the core technical achievements of our website is the seamless integration of SQL database using Next.js server actions. This enables robust functionalities including:
      Login & Signup Operations: Secure and streamlined user authentication process.
      Data Integration: Seamlessly integrate SQL database to store and retrieve essential data for personalized user experiences.
      At JS Mind, we're committed to pushing the boundaries of technology to deliver unparalleled experiences. Dive into the world of brainwave exploration and unlock new insights with us!`,
    id: 16,
    git: "https://github.com/Noorhesham/Robotic-design-modern",
  },
  {
    title: "The Dog Game !",
    img: "/Screenshot (135).png",
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7195121446870757376?compact=1",
    gen: "React",
    link: "https://glittery-brigadeiros-5e42b8.netlify.app/",
    iconLists: ["/js.png"],
    des: `🎮 **Gameplay Galore:** Dive into a world where every move counts! Players can engage in a variety of actions, from dizzying jumps to intense battles with enemies. With smooth collision detection and fluid animations, the gaming experience is truly immersive.
      👾 **Enemy Encounters:** Get ready for some adrenaline-pumping encounters! Players will face off against a range of enemies, each with their own unique challenges and strategies. It's all about quick reflexes and sharp thinking to emerge victorious!
      🌌 **Mesmerizing Backgrounds:** Immerse yourself in stunning parallax backgrounds that add depth and dimension to the gameplay. Whether you're soaring through the skies or delving into mysterious dungeons, the scenery will leave you in awe.
      🎨 **Canvas Creativity:** Leveraging the power of HTML5 canvas, this game boasts visually striking graphics and animations. Every detail is meticulously crafted to deliver a visually stunning experience that keeps players coming back for more.
      ⚔️ **Health Points & Player Actions:** Strategize your moves and manage your health points wisely! With a range of player actions at your disposal, including powerful attacks and evasive maneuvers, every decision shapes the outcome of the game.
      🚀 **Built with OOP Classes:** Behind the scenes, the game is built on a foundation of Object-Oriented Programming (OOP) principles. This ensures clean, modular code that's easy to maintain and extend, setting the stage for future enhancements and updates.
      `,
    id: 17,
    git: "https://github.com/Noorhesham/2d-canvas-game-js",
  },
  {
    title: "My previous portfolio",
    img: "/Screenshot (136).png",
    gen: "React",
    link: " https://noor-hesham-portfolio.netlify.app/",
    iconLists: ["/tail.svg", "/js.png", "/re.svg", "/fm.svg"],
    des: `Old portfolio before this update !
      `,
    id: 20,
    git: "https://github.com/Noorhesham/My-portfolio",
  },
  {
    title: "Promptobia",
    img: "/prompt.png",
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/idhHZwYUWa.png", "/next.webp"],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7161779432167202816?compact=1",
    des: `Revolutionize your AI interactions with Promptopia – a platform for seamless prompt customization and management. Tailor AI responses, effortlessly organize prompts, and streamline retrieval with a tagging system.
      
      Join a vibrant community, showcase curated prompts, and elevate your AI journey. Secure sign-up with Google ensures a hassle-free experience.
      
      Crafted with Next.js, React, Tailwind CSS, MongoDB, and more, Promptopia promises a responsive, sleek, and dynamic user experience.
      
      Why Promptopia? Seize control, collaborate with AI pioneers, and be the architect of AI's evolution`,
    id: 5,
    link: "https://promptobia-noor-hesham.vercel.app/",
    git: "https://github.com/Noorhesham/NEXTSJ-promptobia-noorHesham",
  },

  {
    title: "Speedy Wheels",
    img: "/wheeles.png",
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/next.webp"],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7162459948440842241?compact=1",
    des: `Speedy Wheels uses Server-Side Rendering (SSR) for lightning-fast performance. Say goodbye to sluggish load times and hello to seamless car exploration! 🚀
  
      🌈 Tailwind CSS Magic:
      Crafted with Tailwind CSS, Speedy Wheels not only performs like a dream but looks stunning too! 🎨💻
      
      💡 What makes it stand out?
      ✅ Effortless Browsing
      ✅ Smart Search
      ✅ Dynamic Filtering
      ✅ Comprehensive Car Info
      
      🛠️ Power of Headless UI Library:
      Speedy Wheels integrates seamlessly with the Headless UI library for an inclusive navigation experience. 🌐💻
      
      🚗 Your Personal Pit Stop:
      Whether you're an enthusiast, a buyer, or just curious, Speedy Wheels is your go-to destination – an experience tailored for all things automotive! 🏁
      
      👨‍💻 Built with Passion:
      I poured my heart into creating Speedy Wheels, blending functionality with a visually appealing interface – a testament to Next.js and Tailwind CSS.`,
    id: 7,
    link: "https://speedy-wheels.vercel.app/",
    git: "https://github.com/Noorhesham/cars-showcase-SSR-nextjs",
  },
  {
    title: "Anime Infinte Scroll !",
    img: "/Screenshot (130).png",
    gen: "React",
    link: "https://anime-infinte-scroll-server-side-x5ns.vercel.app/",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/next.webp"],
    des: `Implementing infinte scrolling in next js with anime api sample data !
      `,
    id: 18,
    git: "https://github.com/Noorhesham/anime-infinte-scroll-server-side",
  },
  {
    title: "Marvel Website Clone",
    img: "/marvel.png",
    gen: "Sass",
    iconLists: ["/js.png"],
    video:
      "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2F100006306765558%2Fvideos%2F462448592723232%2F%3Fidorvanity%3D1121696938256769&show_text=false&width=560&t=0",
    des: ` my inaugural frontend project – a static Marvel website crafted with HTML, CSS, and JS! 🌐✨ As the team leader, I orchestrated the seamless integration of movies, games, music, and news, creating a comprehensive hub for all things Marvel. Without APIs, we meticulously curated and added data to ensure a rich user experience. This project reflects not only my technical skills but also my leadership in assembling and guiding a collaborative team to bring our Marvel universe to life. Dive into the Marvel experience we've created – a testament to passion, teamwork, and the power of frontend development! 💪🎉 `,
    id: 6,
    git: "https://github.com/Noorhesham/Marvel_Web",
  },
  {
    title: "React Pizza App",
    img: "/pizza.png",
    gen: "React",
    link: "https://fast-pizza-app-noor.netlify.app/",
    iconLists: ["/re.svg", "/tail.svg", "/query.png"],
    des: `Simple pizza delivery App that takes name,orders from user calculate its price `,
    id: 8,
    git: "https://github.com/Noorhesham/fast-pizza",
  },
  {
    title: " Recipe  App",
    img: "/recipe.png",
    iconLists: ["/js.png"],
    des: ` an app to search for food recipes add bookmarks upload recipes change servings update the dom and more using
                mvc architect and oop`,
    id: 9,
    link: "https://noorhesham-recipes.netlify.app/#5ed6604591c37cdc054bcc13",
  },
  {
    title: " World Wise App",
    link: "https://worldwise-appnoor.netlify.app/",
    img: "/map.png",
    gen: "React",
    iconLists: ["/re.svg"],
    des: ` website to search cities and write down memories in an interactive map using react leaflet library`,
    id: 10,
    git: "https://github.com/Noorhesham/MapSearchCountries-citiesApp",
  },
  {
    title: "use popcorn",
    img: "/movies.png",
    gen: "React",
    iconLists: ["/re.svg"],
    des: ` a small app to search for movies save it to watch list etc.. `,
    id: 11,
    link: "https://movie-usepopcorn.netlify.app/",
  },
  {
    title: "japan journy",
    img: "/japan.png",
    gen: "Sass",
    iconLists: ["/sass.webp"],
    des: `Sass design for a travel webpage with cool css effects and animations `,
    id: 12,
    link: "https://japan-webpage.netlify.app/",
    git: "https://github.com/Noorhesham/Japan",
  },
  {
    title: "Next Auth",
    img: "/Screenshot (86).png",
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/js.png", "/next.webp"],
    video: "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7171953399498838016?compact=1",
    des: `Developed a comprehensive authentication system with a focus on security and user experience. This includes seamless multi-channel signup/login options (credentials, Google, and GitHub), a robust Two-Factor Authentication (2FA) system leveraging TypeScript's static typing for enhanced security, and a hassle-free forgot password mechanism. Implemented smooth user data updates through TypeScript's type-safe interfaces, ensuring both efficiency and reliability.
  
      Prioritized user satisfaction by meticulously handling errors on both the front and back end, utilizing TypeScript's strong typing to catch potential issues during development. Fortified sensitive routes with TypeScript-backed access controls, allowing only authorized users to navigate through secured sections, while establishing public routes with precision for non-sensitive segments of the application.
      
      Streamlined the email verification process using TypeScript, enhancing security and user trust through statically-typed code. Lastly, revolutionized access control with TypeScript's type-safe role-based authentication, enabling precise permissions based on user roles. This comprehensive approach ensures a secure, reliable, and user-friendly authentication experience throughout the application.`,
    id: 14,
    link: "https://auth-next-pi-eight.vercel.app/",
    git: "https://github.com/Noorhesham/Auth-Next",
  },
];
export const JOBS = [
  {
    title: "Elshady | Next.js TypeScript Project",
    des: `I developed a dynamic Learning Management System (LMS) using TypeScript and Next.js, enhanced with animations powered by Framer Motion. The platform features essential functionalities like user authentication with login and signup processes, as well as comprehensive CRUD operations for managing course content. Users can engage with quizzes and videos while tracking their progress, with restrictions in place to ensure a secure learning environment. Additionally, the system includes a leaderboard to showcase top students, fostering a sense of competition and motivation among learners. This project not only showcases my technical skills but also emphasizes the importance of user experience through smooth animations and interactive design. Collaborating with the backend team allowed me to develop the LMS as a full-stack application, ensuring seamless integration and efficient data management throughout the platform. `,
    img: ["/shady.png", "/Screenshot 2024-09-04 163501.png", "/Screenshot 2024-09-01 070302.png"],
    gen: "Next",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg", "/next.webp", "/query.png"],
  },
  {
    title: "Project Managment System ",
    img: "/Screenshot (243).png",
    des: `Freelance job for a trader that wants to manage everything about his businness and transactions`,
    git: "https://github.com/Noorhesham/Product-managment-system",
    iconLists: ["/node.png", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg", "/idhHZwYUWa.png", "/logo.gif"],
    id: 42333,
  },
  ,
  {
    title: "graphic designer portfolio",
    img: "/portfolio.png",
    gen: "Javascript",
    iconLists: ["/js.png"],
    des: `as a freelancer built up  a portfolio for a graphic designer to show its work`,
    id: 13,
    link: "https://japan-webpage.netlify.app/",
    git: "https://github.com/Noorhesham/graphic-designer-portfolio",
  },
  {
    title: "Landing Page",
    img: "/Screenshot (173).png",
    gen: "React",
    des: "A landing page for a company  as a freelance project on freelancer,using 3d models and animations , fully responsive and type safe ",
    git: "https://github.com/Noorhesham/landingPage-for-exanor",
    iconLists: ["/next.webp", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg", "/three.svg"],
    video: "https://www.youtube.com/embed/oD2Mbo_rCGc",
    id: 435,
  },
  {
    title: "Elmandoob Web App",
    img: "/Screenshot (74).png",
    gen: "Javascript",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/next.webp"],
    des: `Collaborating with backend ,Developed a comprehensive web application that allows merchants to trade goods and services among each other, integrating features for user registration, product listings, and transaction management..`,
    id: 35,
    git: "https://github.com/Noorhesham/elmandoob",
  },
  {
    title: "Teacher",
    img: "/Screenshot (141).png",
    gen: "Javascript",
    iconLists: ["/js.png"],
    des: `Collaborating with a backend dev,Built a custom user interface for a teaching platform, enabling the teacher to manage courses, assignments, and student interactions efficiently.`,
    id: 43,
    git: "https://github.com/Noorhesham/first-teacher",
  },
  {
    title: "Link Tree Clone",
    img: "/Screenshot (195).png",
    gen: "React",
    des: ` Built with Next.js, TypeScript, and MongoDB, it ensures robust performance and maintainability.`,
    git: "https://github.com/Noorhesham/LinkTreeclone",
    iconLists: ["/next.webp", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg"],
    video: "https://www.youtube.com/embed/RvoeZVL6pec",
    id: 4333,
    link: "https://link-treeclone-olive.vercel.app/profile/66780ff0b18f0237beef90e4",
  },
  {
    title: "Shopify Clone",
    img: "/shopify1.png",
    gen: "React",
    des: "I made this shop home page with next js and tailwind css as a freelance project on freelancer ",
    git: "https://github.com/Noorhesham/shopy",
    iconLists: ["/next.webp", "/tail.svg", "/ts.svg", "/re.svg", "/fm.svg"],
    video: "https://www.youtube.com/embed/YuKcjo8j_WQ",
    id: 433,
  },
];
export const testimonials = [
  {
    quote:
      "This JavaScript course covers essential topics like DOM manipulation, async programming, and API integration, showcasing skills in creating dynamic web apps.",
    name: "The Complete JavaScript Course 2023",
    title: "Udemy",
    img: "/c3.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-3caccd9d-f820-48fa-b40c-d7e8afcb8739.pdf",
  },
  {
    quote:
      "This MERN stack course covers database management, server-side development, and API creation, highlighting proficiency in building scalable web applications.",
    name: "The Complete Node.js, MongoDB, Express Course",
    title: "Udemy",
    img: "/c2.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-cc321f8d-2603-4cd5-8c2b-fd7818ef3f13.pdf",
  },
  {
    quote:
      "This React and Next.js course covers component-based architecture, server-side rendering, and performance optimization, demonstrating skills in modern web development.",
    name: "The Complete React, Redux, RTK, Next.js Course",
    title: "Udemy",
    img: "/c1.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-05fd62f5-87c2-447f-8ec9-0df38f5b8bee.pdf",
  },
  {
    quote:
      "This JavaScript DSA course covers arrays, linked lists, trees, sorting, and searching algorithms, showcasing skills in solving complex problems efficiently.",
    name: "JavaScript Algorithms and Data Structures",
    title: "",
    img: "/c4.jpg",
    link: "https://udemy-certificate.s3.amazonaws.com/pdf/UC-bfe13cf7-585e-4437-9739-7c3685cffd79.pdf",
  },
  {
    quote:
      "The CS50 course covers algorithms, data structures, and web development, demonstrating a solid foundation in coding, problem-solving, and critical thinking.",
    name: "CS50x: CS50's Introduction to Computer Science",
    title: "Harvard University",
    img: "/cs50.png",
    link: "https://courses.edx.org/certificates/c6026e6a6ae34aca9bf6baff2eaf995e",
  },
];

export const companies = [
  {
    id: 1,
    name: "HTML",
    img: "/html.webp",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "CSS",
    img: "/css.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Sass",
    img: "/sass.webp",
    nameImg: "/cloudName.svg",
  },
  {
    id: 3,
    name: "Javascript",
    img: "/js.png",
    nameImg: "/cloudName.svg",
  },
  {
    id: 4,
    name: "TypeScript",
    img: "/ts.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 5,
    name: "React",
    img: "/re.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 6,
    name: "tailwind",
    img: "/tail.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 7,
    name: "Next.js.",
    img: "/next.webp",
    nameImg: "/dockerName.svg",
  },
  {
    id: 8,
    name: "Node/Express",
    img: "/node.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 9,
    name: "Mongo.DB",
    img: "/idhHZwYUWa.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 10,
    name: "React Query",
    img: "/query.png",
    nameImg: "/dockerName.svg",
  },
  {
    id: 34,
    name: "Framer Motion",
    img: "/fm.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 24,
    name: "Redux/Rtk",
    img: "/redux.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "backend  Dev ",
    desc: "Designed and developed apis using node js express and relational dbs.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a web apps for a client, from initial concept to deployment.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Full stack Developer",
    desc: "Developed and maintained solo apps from scratch using mern stack.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    lin: "https://github.com/Noorhesham",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/noor-elgendy-0aa84b207/",
  },
  {
    id: 4,
    img: "/fb.webp",
    link: "https://web.facebook.com/profile.php?id=100006306765558",
  },
  {
    id: 5,
    img: "/insta.webp",
    link: "https://www.instagram.com/noorhesham174/",
  },
];
