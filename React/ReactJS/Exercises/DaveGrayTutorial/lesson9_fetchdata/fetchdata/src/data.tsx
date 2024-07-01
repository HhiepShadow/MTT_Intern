import { Item } from "./Item";

export const data: Item[] = [
  {
    id: 1,
    checked: false,
    name: "Item 1",
  },
  {
    id: 2,
    checked: true,
    name: "Item 2",
  },
  {
    id: 3,
    checked: false,
    name: "Item 3",
  },
];

export const URL: string = 'http://localhost:5000/items'