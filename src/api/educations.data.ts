export interface IEducation {
  _id: string,
  thumbnailUrl: string,
  yearStart: string,
  yearFinish: string,
  title: string,
  description: string,
}

export const EDUCATIONS_DATA: IEducation[] = [
  // {
  //   _id: "1",
  //   yearStart: "2022",
  //   yearFinish: "",
  //   title: "Lorem ipsum dolor sit amet, consectetur adipisicing",
  //   description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit",
  // },
  {
    _id: "2",
    // thumbnailUrl: "https://i.ibb.co/xzXH4qd/ajp-thumbnail.jpg",
    thumbnailUrl: "https://i.ibb.co/b71k1g2/ajp-thumbnail-1.jpg",
    yearStart: "2017",
    yearFinish: "2021",
    title: "Akademia im. Jakuba z Paradyża w Gorzowie Wielkopolskim",
    // description: "Bachelor's degree, Computer Science, Very Good, graduated with honors",
    description: "Studia inżynierskie, kierunek informatyka, specjalizacja programowanie aplikacji webowych, ocena bardzo dobry, ukończono z wyróżnieniem",
  },
  {
    _id: "3",
    // thumbnailUrl: "https://i.ibb.co/Xj1NbW7/ef-thumbnail.jpg",
    thumbnailUrl: "https://i.ibb.co/xXxCCtS/ef-thumbnail-1.jpg",
    yearStart: "2015",
    yearFinish: "2015",
    title: "EF International Language Campuses",
    description: "Szkoła językowa EF Education First, Wielka Brytania, Londyn, Egzamin potwierdzający znajomość języka na poziomie B.2",
  },
  {
    _id: "4",
    // thumbnailUrl: "https://i.ibb.co/Y2N9KQ2/awf-thumbnail.jpg",
    thumbnailUrl: "https://i.ibb.co/gTfkmpm/awf-thumbnail-1.jpg",
    yearStart: "2015",
    yearFinish: "2020",
    title: "Akademia Wychowania Fizycznego im. Eugeniusza Piaseckiego w Poznaniu",
    // description: "Bachelor's degree, Physical Education, Distinction for charity work for children and youth",
    description: "Studia licencjackie, kierunek wychowanie fizyczne, specjalność nauczycielska, ukończono z wyróżnieniem Akademii za pracę charytatywną z dziećmi i młodzieżą",
  },
];