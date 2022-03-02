import {svgs} from '../assets/svgs/index';

export interface ITool {
  id: number,
  svgLinkUrl: string,
  displayName: string,
}

export const TOOLS_DATA: ITool[] = [
  {
    id: 1,
    svgLinkUrl: svgs.html,
    displayName: 'HTML',
  },
  {
    id: 2,
    svgLinkUrl: svgs.css,
    displayName: 'CSS',
  },
  {
    id: 3,
    svgLinkUrl: svgs.sass,
    displayName: 'Sass',
  },
  {
    id: 4,
    svgLinkUrl: svgs.js,
    displayName: 'JS',
  },
  {
    id: 5,
    svgLinkUrl: svgs.typeScript,
    displayName: 'TypeScript',
  },
  {
    id: 6,
    svgLinkUrl: svgs.react,
    displayName: 'React',
  },
  {
    id: 7,
    svgLinkUrl: svgs.redux,
    displayName: 'Redux',
  },
  {
    id: 8,
    svgLinkUrl: svgs.reduxSaga,
    displayName: 'Redux Saga',
  },
  {
    id: 9,
    svgLinkUrl: svgs.jest,
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
    svgLinkUrl: svgs.nodejs,
    displayName: 'NodeJS',
  },
  {
    id: 14,
    svgLinkUrl: svgs.expressjs,
    displayName: 'Express',
  },
  {
    id: 15,
    svgLinkUrl: svgs.mongodb,
    displayName: 'MongoDB',
  },
  {
    id: 16,
    svgLinkUrl: svgs.mysql,
    displayName: 'MySql',
  },
  {
    id: 17,
    svgLinkUrl: svgs.python,
    displayName: 'Python',
  },
  {
    id: 18,
    svgLinkUrl: svgs.git,
    displayName: 'Git',
  },
];