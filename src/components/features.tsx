import Image from "next/image";
import React from "react";

const Features = () => {
  const features = [
    {
      title: "Откройте для себя мир IT: Путь к успеху и инновациям.",
      pill: "День I",
      bgImage: "/feature1.png",
    },
    {
      title: "Создание вашего ИИ-вебсайта за 3 дня",
      pill: "День I",
      bgImage: "/feature2.png",
    },
    {
      title: "Запуск вашего телеграм-бота на ИИ всего за 3 дня",
      pill: "День II",
      bgImage: "/feature3.png",
    },
    {
      title: "Заработайте свои первые 600 000 тенге на фрилансе",
      pill: "День II",
      bgImage: "/feature4.png",
    },
    {
      title: "Простые и действенные методы поиска клиентов",
      pill: "День III",
      bgImage: "/feature5.png",
    },
    {
      title: "Станьте программистом с зарплатой 2 500 000 тенге",
      pill: "День III",
      bgImage: "/feature6.png",
    },
  ] as const;
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-2 container px-4">
      <div className="rounded-md p-3 bg-blue-500">
        <h3 className="font-bold text-white text-2xl lg:text-4xl uppercase tracking-tight aspect-square">
          Что тебя ждет:
        </h3>
      </div>
      {features.map((el) => (
        <div
          key={el.title}
          className="rounded-md px-4 py-2 bg-zinc-300 relative aspect-square overflow-hidden flex flex-col justify-between"
        >
          <Image
            className="absolute w-full h-full top-0 left-0 z-10"
            src={el.bgImage}
            width={200}
            height={200}
            alt="feature"
          ></Image>
          <div className="relative z-30">
            <div className="px-2 text-black bg-accent rounded-md font-bold w-fit text-sm lg:text-lg">
              {el.pill}
            </div>
          </div>
          <div className="z-30 text-white relative text-xs lg:text-lg">
            <p>{el.title}</p>
          </div>
          <div className="absolute w-full h-full top-0 left-0 z-20 bg-gradient-to-t from-black opacity-70 to-transparent"></div>
        </div>
      ))}
      <div className="rounded-md px-4 py-2 bg-accent text-black text-center flex justify-center items-center flex-col">
        <h3 className="font-extrabold text-8xl lg:text-[140px] tracking-tight">
          16
        </h3>
        <p className="text-sm lg:text-lg">Часов плотной информации</p>
      </div>
    </div>
  );
};

export default Features;
