import React from "react";
import { Button } from "./ui/button";

const PricingCard = ({ title, subtitle, price, features, bonuses }) => {
  return (
    <div className="  p-8 bg-white shadow-lg rounded-2xl dark:bg-gray-800">
      <p className="text-3xl font-bold text-black dark:text-white">{title}</p>
      <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
        {subtitle}
      </p>
      <p className="text-3xl font-bold text-black dark:text-white">{price}₸</p>

      <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">
        Билет на 1 человека
      </p>
      <Button type="button" className="w-full">
        Купить
      </Button>
      <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
        {features.map((feature) => (
          <li key={feature} className="flex items-center mb-3">
            <svg
              className="mr-2"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 1792 1792"
            >
              <path d="M1152 896q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181zm-256-544q-148 0-273 73t-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273-73-273-198-198-273-73zm768 544q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"></path>
            </svg>
            {feature}
          </li>
        ))}
      </ul>
      <span className="block w-56 h-1 my-2 bg-gray-100 rounded-lg"></span>
      <ul className="w-full mt-6 mb-6 text-sm text-black dark:text-white">
        {bonuses.map((bonus) => (
          <li className="flex items-center mb-3 space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#10b981"
              viewBox="0 0 1792 1792"
            >
              <path d="M1600 736v192q0 40-28 68t-68 28h-416v416q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68v-416h-416q-40 0-68-28t-28-68v-192q0-40 28-68t68-28h416v-416q0-40 28-68t68-28h192q40 0 68 28t28 68v416h416q40 0 68 28t28 68z"></path>
            </svg>
            <div>{bonus}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Pricing = () => {
  const features = [
    "All illimited components Tailwind",
    "Own analitycs templates",
    "24/24 support link",
  ];
  const bonuses = [
    "All illimited components Tailwind",
    "Own analitycs templates",
    "24/24 support link",
  ];
  return (
    <div className="container grid grid-cols-1 lg:grid-cols-2 gap-8 my-12 ">
      <PricingCard
        subtitle={"Онлайн встреча с записями"}
        bonuses={bonuses}
        title={"Онлайн"}
        price={6000}
        features={features}
      ></PricingCard>
      <PricingCard
        subtitle={"Познакомиться с единомышлениками в Алмате"}
        bonuses={bonuses}
        title={"Оффлайн"}
        price={9000}
        features={features}
      ></PricingCard>
    </div>
  );
};

export default Pricing;
