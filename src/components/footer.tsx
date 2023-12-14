import { GitHubLogoIcon, IconJarLogoIcon } from "@radix-ui/react-icons";
import React from "react";
interface Link {
  text?: string;
  href?: string;
  ariaLabel?: string;
  icon?: string;
}

interface Links {
  title?: string;
  links: Array<Link>;
}

interface Props {
  links: Array<Links>;
  secondaryLinks: Array<Link>;
  socialLinks: Array<Link>;
  footNote?: string;
  theme?: string;
}

const Footer: React.FC<Props> = ({
  socialLinks = [],
  secondaryLinks = [],
  links = [],
  footNote = "",
  theme = "light",
}) => (
  <footer
    className={`relative border-t border-gray-200 ${
      theme === "dark" ? "dark:border-slate-800 not-prose" : ""
    }`}
  >
    <div
      className="dark:bg-dark absolute inset-0 pointer-events-none"
      aria-hidden="true"
    ></div>
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 dark:text-slate-300">
      <div className="grid grid-cols-12 gap-4 gap-y-8 sm:gap-8 py-8 md:py-12">
        <div className="col-span-12 lg:col-span-4">
          <div className="mb-2">
            <a className="inline-block font-bold text-xl" href={"#"}>
              Гефест академия
            </a>
          </div>
          <div className="text-sm text-muted">
            {secondaryLinks.map(({ text, href }) => (
              <a
                className="text-black hover:text-gray-700 dark:text-gray-400 hover:underline transition duration-150 ease-in-out mr-2 rtl:mr-0 rtl:ml-2"
                href={href}
                dangerouslySetInnerHTML={{ __html: text }}
              />
            ))}
          </div>
        </div>
        {links.map(({ title, links }) => (
          <div className="col-span-6 md:col-span-3 lg:col-span-2">
            <div className="dark:text-gray-300 font-medium mb-2">{title}</div>
            {links && Array.isArray(links) && links.length > 0 && (
              <ul className="text-sm">
                {links.map(({ text, href, ariaLabel }) => (
                  <li className="mb-2">
                    <a
                      className="text-black hover:text-gray-700 hover:underline dark:text-gray-400 transition duration-150 ease-in-out"
                      href={href}
                      aria-label={ariaLabel}
                      dangerouslySetInnerHTML={{ __html: text }}
                    ></a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
      <div className="md:flex md:items-center md:justify-between py-6 md:py-8">
        {socialLinks?.length ? (
          <ul className="flex mb-4 md:order-1 -ml-2 md:ml-4 md:mb-0 rtl:ml-0 rtl:-mr-2 rtl:md:ml-0 rtl:md:mr-4">
            {socialLinks.map(({ ariaLabel, href, text, Icon }) => (
              <li>
                <a
                  className="text-black dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 inline-flex items-center"
                  aria-label={ariaLabel}
                  href={href}
                >
                  {Icon && <Icon></Icon>}
                  <span>{text} </span>
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <div
          className="text-sm mr-4 dark:text-slate-400"
          dangerouslySetInnerHTML={{ __html: footNote }}
        />

        <div className="text-xs mt-4 text-zinc-800">
          Индивидуальный предприниматель: Ахметов Тоқтар Маратұлы, ИИН:
          001123550090. Наименование бизнеса: ИП Ахметов. Вид экономической
          деятельности: Код 62021. Адрес: Акмолинская обл., г. Нур-Султан, Улица
          Александр Бараев 13, 118. Контакты: 7783973990. Дата подачи:
          15.06.2021, 17:47:45.
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
