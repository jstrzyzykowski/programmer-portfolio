export interface IEducation {
  _id: string,
  yearStart: string,
  yearFinish: string,
  title: string,
  description: string,
}

export const EDUCATIONS_DATA = [
  {
    _id: "1",
    yearStart: "2022",
    yearFinish: "",
    title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  },
  {
    _id: "2",
    yearStart: "2017",
    yearFinish: "2021",
    title: "Akademia im. Jakuba z Paradyża w Gorzowie Wielkopolskim",
    description: "Bachelor's degree, Computer Science, Very Good, graduated with honors",
  },
  {
    _id: "3",
    yearStart: "2015",
    yearFinish: "2015",
    title: "EF International Language Campuses",
    description: "English language, London",
  },
  {
    _id: "4",
    yearStart: "2015",
    yearFinish: "2020",
    title: "Akademia Wychowania Fizycznego im. Eugeniusza Piaseckiego w Poznaniu",
    description: "Bachelor's degree, Physical Education, Distinction for charity work for children and youth",
  },
];