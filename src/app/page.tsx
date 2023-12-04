import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col items-center justify-center h-screen ">
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
            className="px-1 rounded-2xl py-1 text-sm font-medium"
          >
            8 декабря | 19:00 АЛМ
          </Badge>
          <Badge
            variant={"outline"}
            className="px-1 rounded-2xl py-1 text-sm font-medium"
          >
            8 декабря | 19:00 АЛМ
          </Badge>
          <Badge
            variant={"outline"}
            className="px-1 rounded-2xl py-1 text-sm font-medium"
          >
            8 декабря | 19:00 АЛМ
          </Badge>
        </div>
        <div className="relative flex items-center flex-col mt-8">
          <p className="text-lg text-center tracking-tight text-muted-foreground">
            Новые времена требуют новых решений
          </p>
          <h1 className="scroll-m-20 leading-none mt-0 text-center text-[80px] font-extrabold tracking-tight lg:text-5xl">
            Хакатон
          </h1>
          <Badge className="relative bottom-3 -rotate-3 px-4 rounded-2xl text-xl  font-bold bg-accent text-accent-foreground">
            Новые связки 2023
          </Badge>
        </div>
        <div className="flex flex-col  gap-4 w-full mt-8">
          <h3 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase text-center text-zinc-700">
            Вы узнаете:
          </h3>
          <div className="grid grid-cols-3 gap-2">
            <div className="p-1 rounded-md border-2 border-zinc-400">
              Как работает мир IT. Как сделать правильный выбор. Подготовка к
              практике.
            </div>
            <div className="p-1 rounded-md border-2 border-zinc-400">
              Как работает мир IT. Как сделать правильный выбор. Подготовка к
              практике.
            </div>
            <div className="p-1 rounded-md border-2 border-zinc-400">
              Как работает мир IT. Как сделать правильный выбор. Подготовка к
              практике.
            </div>
          </div>
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
    </div>
  );
}
