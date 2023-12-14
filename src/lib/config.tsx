import { FiInstagram } from "react-icons/fi";

export const footerData = {
  links: [
    // {
    //   title: "Платформа",
    //   links: [
    //     { text: "API для разработчиков", href: "#" },
    //     { text: "Партнеры", href: "#" },
    //     { text: "Атом", href: "#" },
    //     { text: "Электрон", href: "#" },
    //     { text: "AstroWind Desktop", href: "#" },
    //   ],
    // },
    // {
    //   title: "Поддержка",
    //   links: [
    //     { text: "Документы", href: "#" },
    //     { text: "Форум сообщества", href: "#" },
    //     { text: "Профессиональные услуги", href: "#" },
    //     { text: "Навыки", href: "#" },
    //     { text: "Статус", href: "#" },
    //   ],
    // },
    {
      title: "Компания",
      links: [
        { text: "О нас", href: "https://gefest.agency" },
        { text: "Бесплатный курс", href: "https://home.gefest.agency" },
        // { text: "Блог", href: "https://gefest.agency" },
        // { text: "Карьера", href: "#" },
        // { text: "Пресса", href: "#" },
        // { text: "Инклюзия", href: "#" },
        // { text: "Социальное влияние", href: "#" },
        // { text: "Магазин", href: "#" },
      ],
    },
  ],
  secondaryLinks: [
    { text: "Условия", href: "/terms" },
    { text: "Политика конфиденциальности", href: "/privacy" },
  ],
  socialLinks: [
    {
      ariaLabel: "Instagram",
      Icon: () => <FiInstagram className="w-5 h-5" />,
      href: "https://www.instagram.com/tokha.it/",
    },
  ],
  footNote: `
  
    Сделано <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://home.gefest.agency/"> Gefest</a> · Все права защищены.
  `,
};
