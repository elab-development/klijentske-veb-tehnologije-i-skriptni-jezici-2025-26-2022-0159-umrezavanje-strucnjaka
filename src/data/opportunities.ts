import type { Opportunity } from "../interfaces/Opportunity";

export const opportunities: Opportunity[] = [
  {
    id: 1,
    title: "Frontend developer",
    company: "Data Flow",
    location: "Belgrade, Serbia",
    type: "Full time",
    category: "Tech",
    description:
      "We are looking for a frontend developer to build modern web applications."
  },
  {
    id: 2,
    title: "UI/UX Designer",
    company: "Creative Studios",
    location: "Novi Sad, Serbia",
    type: "Part time",
    category: "Design",
    description:
      "Join our design team and help create intuitive user experiences."
  },
  {
    id: 3,
    title: "Backend developer",
    company: "Apex Solutions",
    location: "Belgrade, Serbia",
    type: "Full time",
    category: "Backend",
    description:
      "Help us build scalable and reliable backend services."
  }
];