export interface CoverageLocation {
  id: number;
  city: string;
  latitude: number;
  longitude: number;
}

export const coverageLocations: CoverageLocation[] = [
  {
    id: 1,
    city: "Batam",
    latitude: 1.0456,
    longitude: 104.0305,
  },
  {
    id: 2,
    city: "Jakarta",
    latitude: -6.2088,
    longitude: 106.8456,
  },
  {
    id: 3,
    city: "Balikpapan",
    latitude: -1.2379,
    longitude: 116.8529,
  },
  {
    id: 4,
    city: "Makassar",
    latitude: -5.1477,
    longitude: 119.4327,
  },
  {
    id: 5,
    city: "Ternate",
    latitude: 0.7906,
    longitude: 127.3842,
  },
  {
    id: 6,
    city: "Sorong",
    latitude: -0.8762,
    longitude: 131.2558,
  },
];
