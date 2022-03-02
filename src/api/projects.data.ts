export interface IScreenshot {
  id: number,
  linkUrl: string,
  alt: string,
}

export interface IProject {
  id: number,
  title: string,
  screenshots: IScreenshot[],
  tools: string[],
  description: string,
  liveUrl: string,
  codeUrl: string,
  hasMobileVersion: boolean,
  hasDesktopVersion: boolean,
}

export const projectsData: IProject[] = [
  {
    id: 1,
    title: 'tech-blog',
    screenshots: [
      {
        id: 1,
        linkUrl: 'https://i.ibb.co/nQqCCNB/1.jpg',
        alt: 'tech-blog first screenshot',
      },
      {
        id: 2,
        linkUrl: 'https://i.ibb.co/0yzj04D/2.jpg',
        alt: 'tech-blog second screenshot',
      },
      {
        id: 3,
        linkUrl: 'https://i.ibb.co/mDLnpLV/3.jpg',
        alt: 'tech-blog third screenshot',
      }
    ],
    tools: ['html', 'sass', 'js', 'react', 'redux', 'reduxSaga', 'firebase'],
    description: 'Some description about super duper project hey!',
    liveUrl: 'https://nw-company.herokuapp.com/',
    codeUrl: 'https://github.com/jstrzyzykowski/code-tech-blog',
    hasMobileVersion: true,
    hasDesktopVersion: true,
  },
  {
    id: 2,
    title: 'who-is-there',
    screenshots: [
      {
        id: 1,
        linkUrl: 'https://i.ibb.co/Lg8PGQ5/1.jpg',
        alt: 'who-is-there first screenshot',
      },
      {
        id: 2,
        linkUrl: 'https://i.ibb.co/VBJsYNP/2.jpg',
        alt: 'who-is-there second screenshot',
      },
      {
        id: 3,
        linkUrl: 'https://i.ibb.co/zspm8W4/3.jpg',
        alt: 'who-is-there third screenshot',
      }
    ],
    tools: ['html', 'sass', 'js', 'react', 'redux', 'prettier', 'firebase'],
    description: 'Some description about super duper project hey!',
    liveUrl: 'https://re-spawner.herokuapp.com/',
    codeUrl: 'https://github.com/jstrzyzykowski/code-who-is-there',
    hasMobileVersion: true,
    hasDesktopVersion: false,
  },
  {
    id: 3,
    title: 'countries-cities-noteapp',
    screenshots: [
      {
        id: 1,
        linkUrl: 'https://i.ibb.co/C0whcvP/1.jpg',
        alt: 'countries-cities-noteapp first screenshot',
      },
      {
        id: 2,
        linkUrl: 'https://i.ibb.co/H2WPFqM/2.jpg',
        alt: 'countries-cities-noteapp second screenshot',
      },
      {
        id: 3,
        linkUrl: 'https://i.ibb.co/Wy4gpvh/3.jpg',
        alt: 'countries-cities-noteapp third screenshot',
      }
    ],
    tools: ['html', 'sass', 'js', 'react', 'redux', 'prettier', 'eslint'],
    description: 'Some description about super duper project hey!',
    liveUrl: 'https://countries-cities-noteapp.herokuapp.com/',
    codeUrl: 'https://github.com/jstrzyzykowski/code-countries-cities-noteapp',
    hasMobileVersion: true,
    hasDesktopVersion: false,
  },
  {
    id: 4,
    title: 'chess-timer',
    screenshots: [
      {
        id: 1,
        linkUrl: 'https://i.ibb.co/QF4ssgX/1.jpg',
        alt: 'chess-timer first screenshot',
      },
      {
        id: 2,
        linkUrl: 'https://i.ibb.co/9gTMJgd/2.jpg',
        alt: 'chess-timer second screenshot',
      },
      {
        id: 3,
        linkUrl: 'https://i.ibb.co/WKGsfQj/3.jpg',
        alt: 'chess-timer third screenshot',
      }
    ],
    tools: ['html', 'css', 'js', 'react'],
    description: 'Some description about super duper project hey!',
    liveUrl: 'https://jstrzyzykowski.github.io/app-6-chess-timer/',
    codeUrl: 'https://github.com/jstrzyzykowski/app-6-chess-timer',
    hasMobileVersion: true,
    hasDesktopVersion: false,
  },
  {
    id: 5,
    title: 'skateboard-shopping',
    screenshots: [
      {
        id: 1,
        linkUrl: 'https://i.ibb.co/xDFX55c/1.jpg',
        alt: 'skateboard-shopping first screenshot',
      },
      {
        id: 2,
        linkUrl: 'https://i.ibb.co/1GYrNy1/2.jpg',
        alt: 'skateboard-shopping second screenshot',
      },
      {
        id: 3,
        linkUrl: 'https://i.ibb.co/wgktGZR/3.jpg',
        alt: 'skateboard-shopping third screenshot',
      }
    ],
    tools: ['html', 'styledComponents', 'js', 'react', 'redux', 'reduxSaga', 'firebase', 'expressjs'],
    description: 'Some description about super duper project hey!',
    liveUrl: 'https://skateboard-shopping.herokuapp.com/',
    codeUrl: 'https://github.com/jstrzyzykowski/code-skateboard-shopping',
    hasMobileVersion: false,
    hasDesktopVersion: true,
  },
];