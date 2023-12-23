import {
  Cute_Font,
  Gamja_Flower,
  Noto_Sans_KR,
  Poor_Story,
  Single_Day,
} from "next/font/google";

const sumClass = (...classnames: string[]) => {
  return classnames.join(" ");
};

const cute_font = Cute_Font({
  weight: ["400"],
  variable: "--cute_font",
  subsets: ["latin"],
});

const gamja_flower = Gamja_Flower({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--gamja_flower",
});

const poor_story = Poor_Story({
  weight: "400",
  subsets: ["latin"],
  variable: "--poor_story",
});

const single_day = Single_Day({
  weight: "400",
  variable: "--single_day",
});

export const FontClassNames = sumClass(
  cute_font.variable,
  gamja_flower.variable,
  poor_story.variable,
  single_day.variable
);
