export interface ProjectItem {
  id: number;
  image: string;
  titleKey: string;
  location: string;
  date: string;
  featured?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: 1,
    image: "/projects/project-1.png",
    titleKey: "morowali",
    location: "Morowali, Sulawesi Tengah",
    date: "May 2024",
    featured: true,
  },
  {
    id: 2,
    image: "/projects/project-2.png",
    titleKey: "bridge",
    location: "Balikpapan",
    date: "January 2024",
  },
  {
    id: 3,
    image: "/projects/project-3.png",
    titleKey: "offshore",
    location: "Tarakan",
    date: "November 2023",
  },
  {
    id: 4,
    image: "/projects/project-4.png",
    titleKey: "coal",
    location: "Muara Berau",
    date: "August 2023",
  },
];
