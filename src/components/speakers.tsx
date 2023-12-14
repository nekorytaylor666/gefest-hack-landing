import Image from "next/image";
import React from "react";

const Speaker = ({ name, title, facts, image }) => (
  <div className="p-6 bg-white z-20 rounded-xl ">
    <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
      <Image src={image} className=" w-full" fill></Image>
    </div>
    <h2 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0">
      {name}
    </h2>
    <h4 className="scroll-m-20 text-lg font-semibold tracking-tight">
      {title}
    </h4>
    <ul className="my-6 ml-6 list-disc [&>li]:mt-2 text-sm">
      {facts.map((fact, index) => (
        <li key={index}>{fact}</li>
      ))}
    </ul>
  </div>
);

const Speakers = () => {
  const speakers = [
    {
      name: "Влад морозов",
      title: "Топ-эксперт в сфере консалтинга, тренер «Лайка»",
      facts: [
        "Работал на госслужбе за 17 000 ₽ в месяц",
        "За 2022 года заработал 80 млн ₽ на консалтинге",
        "Привлек 32 000 подписчиков за 1 день",
      ],
      image: "/feature1.png",
    },
    {
      name: "Влад морозов",
      title: "Топ-эксперт в сфере консалтинга, тренер «Лайка»",
      facts: [
        "Работал на госслужбе за 17 000 ₽ в месяц",
        "За 2022 года заработал 80 млн ₽ на консалтинге",
        "Привлек 32 000 подписчиков за 1 день",
      ],
      image: "/feature2.png",
    },
    {
      name: "Влад морозов",
      title: "Топ-эксперт в сфере консалтинга, тренер «Лайка»",
      facts: [
        "Работал на госслужбе за 17 000 ₽ в месяц",
        "За 2022 года заработал 80 млн ₽ на консалтинге",
        "Привлек 32 000 подписчиков за 1 день",
      ],
      image: "/feature3.png",
    },
    // Добавьте других спикеров здесь
  ];

  return (
    <div className="mt-12 relative   overflow-hidden">
      <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-4 min-h-screen lg:min-h-min py-12 px-4 container">
        {speakers.map((speaker, index) => (
          <Speaker key={index} {...speaker} />
        ))}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-sky-500"></div>
    </div>
  );
};

export default Speakers;
