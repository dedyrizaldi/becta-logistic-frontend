export interface Fleet {
  id: number;
  image: string;
  name: string;
  length: string;
  beam: string;
  cargo: string;
  speed: string;
  status: "available" | "chartered";
}

export const fleet = [
  {
    id: 1,
    image: "/fleet/lct-01.png",
    name: "LCT BECTA 01",
    length: "47.00 M",
    beam: "14.00 M",
    cargo: "500 Ton",
    speed: "10 Knot",
    status: "available",
  },
  {
    id: 2,
    image: "/fleet/lct-02.png",
    name: "LCT BECTA 02",
    length: "62.50 M",
    beam: "14.50 M",
    cargo: "700 Ton",
    speed: "10 Knot",
    status: "available",
  },
  {
    id: 3,
    image: "/fleet/lct-03.png",
    name: "LCT BECTA 03",
    length: "66.00 M",
    beam: "14.50 M",
    cargo: "900 Ton",
    speed: "11 Knot",
    status: "chartered",
  },
  {
    id: 4,
    image: "/fleet/lct-04.png",
    name: "LCT BECTA 04",
    length: "58.00 M",
    beam: "14.00 M",
    cargo: "350 Ton",
    speed: "10 Knot",
    status: "available",
  },
  {
    id: 5,
    image: "/fleet/lct-05.png",
    name: "LCT BECTA 05",
    length: "58.00 M",
    beam: "14.00 M",
    cargo: "350 Ton",
    speed: "10 Knot",
    status: "available",
  },
];
