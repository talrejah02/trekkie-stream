import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Backpacking",
    description:
      "This category will teach you about how to pack a backpack and how to use gears",
    image:"Images/backpack.webp"
  },
  {
    _id: uuid(),
    categoryName: "Altitude Sickness",
    description:
      "Explore all the causes and treatments of Altitude sickness ",
      image:"Images/altitude.webp"
  },
  {
    _id: uuid(),
    categoryName: "All Trekks",
    description:
      "Explore all the trekks we have done till now",
      image:"Images/treks.webp"
  },
];
