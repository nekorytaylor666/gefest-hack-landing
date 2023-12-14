import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  items-center justify-center py-20 container px-4">
      <div className="flex flex-col justify-center items-center">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <Image width={32} height={32} src="/logo.png" alt="logo" />
            <h3 className="scroll-m-20 text-2xl font-bold tracking-tight">
              Гефест
            </h3>
          </div>
          <Badge className="px-4 rounded-2xl text-lg font-medium bg-[#4494FA]">
            Онлайн
          </Badge>
        </div>
        <div className="flex w-full flex-wrap justify-center gap-2 items-center mt-4">
          <Badge
            variant={"outline"}
            className="px-2 rounded-2xl py-1 text-sm font-medium"
          >
            8 дек | 19:00 АЛМ
          </Badge>
          <Badge
            variant={"outline"}
            className="px-2 rounded-2xl py-1 text-sm font-medium"
          >
            8 дек | 19:00 АЛМ
          </Badge>
          <Badge
            variant={"outline"}
            className="px-2 rounded-2xl py-1 text-sm font-medium"
          >
            8 дек | 19:00 АЛМ
          </Badge>
        </div>
        <div className="relative flex items-center flex-col mt-8">
          <p className="text-lg text-center tracking-tight text-muted-foreground">
            Новые времена требуют новых решений
          </p>
          <h1 className="scroll-m-20 leading-none mt-0 text-center text-[72px]  font-extrabold tracking-tight lg:text-9xl">
            Хакатон
          </h1>
          <Badge className="relative bottom-3 -rotate-3 px-4 rounded-2xl text-xl  font-bold bg-accent text-accent-foreground">
            Новые связки 2023
          </Badge>
        </div>
      </div>
      <div className="flex flex-col  gap-4 w-full mt-8">
        <h3 className="scroll-m-20 text-lg lg:text-2xl font-semibold tracking-tight uppercase text-center text-zinc-700">
          Вы узнаете:
        </h3>
        <p className="lg:text-xl lg:font-medium">
          Сделай свой первый сайт, бот с ИИ и научись их продавать дорого всего
          за 3 дня.
        </p>
        <div className="aspect-video  relative w-full overflow-hidden rounded-lg ">
          <Image
            layout="fill"
            src="/hero.webp"
            alt="hero"
            objectFit="cover"
          ></Image>
        </div>
        <Button
          size={"lg"}
          className="bg-accent text-accent-foreground font-semibold py-8 text-lg"
        >
          Принять участие
        </Button>
      </div>
    </div>
  );
};

export default Hero;
