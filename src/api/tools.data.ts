export interface ITool {
  id: number,
  svgPath: string,
  displayName: string,
}

export const TOOLS_DATA: ITool[] = [
  {
    id: 1,
    svgPath: "/static/svgs/html.svg",
    displayName: 'HTML',
  },
  {
    id: 2,
    svgPath: "/static/svgs/css.svg",
    displayName: 'CSS',
  },
  {
    id: 3,
    svgPath: "/static/svgs/sass.svg",
    displayName: 'Sass',
  },
  {
    id: 4,
    svgPath: "/static/svgs/js.svg",
    displayName: 'JS',
  },
  {
    id: 5,
    svgPath: "/static/svgs/typescript.svg",
    displayName: 'TypeScript',
  },
  {
    id: 6,
    svgPath: "/static/svgs/react.svg",
    displayName: 'React',
  },
  {
    id: 7,
    svgPath: "/static/svgs/redux.svg",
    displayName: 'Redux',
  },
  {
    id: 8,
    svgPath: "/static/svgs/redux-saga.svg",
    displayName: 'Redux Saga',
  },
  {
    id: 9,
    svgPath: "/static/svgs/jest.svg",
    displayName: 'Jest',
  },
  // {
  //   id: 10,
  //   svgPath: "/static/svgs/eslint.svg",
  //   displayName: 'Eslint',
  // },
  // {
  //   id: 11,
  //   svgPath: "/static/svgs/prettier.svg",
  //   displayName: 'Prettier',
  // },
  // {
  //   id: 12,
  //   svgPath: "/static/svgs/firebase.svg",
  //   displayName: 'Firebase',
  // },
  {
    id: 13,
    svgPath: "/static/svgs/nodejs.svg",
    displayName: 'NodeJS',
  },
  {
    id: 14,
    svgPath: "/static/svgs/expressjs.svg",
    displayName: 'Express',
  },
  {
    id: 15,
    svgPath: "/static/svgs/mongodb.svg",
    displayName: 'MongoDB',
  },
  {
    id: 16,
    svgPath: "/static/svgs/mysql.svg",
    displayName: 'MySql',
  },
  {
    id: 17,
    svgPath: "/static/svgs/python.svg",
    displayName: 'Python',
  },
  {
    id: 18,
    svgPath: "/static/svgs/git.svg",
    displayName: 'Git',
  },
];