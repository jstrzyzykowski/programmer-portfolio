export interface IScreenshot {
  id: number,
  path: string,
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
        path: '/static/images/projects/tech-blog/1.jpg',
        alt: 'tech-blog first screenshot',
      },
      {
        id: 2,
        path: '/static/images/projects/tech-blog/2.jpg',
        alt: 'tech-blog second screenshot',
      },
      {
        id: 3,
        path: '/static/images/projects/tech-blog/3.jpg',
        alt: 'tech-blog third screenshot',
      }
    ],
    tools: ['html', 'sass', 'js', 'react', 'redux', 'redux-saga', 'firebase'],
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
        path: '/static/images/projects/who-is-there/1.jpg',
        alt: 'who-is-there first screenshot',
      },
      {
        id: 2,
        path: '/static/images/projects/who-is-there/2.jpg',
        alt: 'who-is-there second screenshot',
      },
      {
        id: 3,
        path: '/static/images/projects/who-is-there/3.jpg',
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
        path: '/static/images/projects/countries-cities-noteapp/1.jpg',
        alt: 'countries-cities-noteapp first screenshot',
      },
      {
        id: 2,
        path: '/static/images/projects/countries-cities-noteapp/2.jpg',
        alt: 'countries-cities-noteapp second screenshot',
      },
      {
        id: 3,
        path: '/static/images/projects/countries-cities-noteapp/3.jpg',
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
        path: '/static/images/projects/chess-timer/1.jpg',
        alt: 'chess-timer first screenshot',
      },
      {
        id: 2,
        path: '/static/images/projects/chess-timer/2.jpg',
        alt: 'chess-timer second screenshot',
      },
      {
        id: 3,
        path: '/static/images/projects/chess-timer/3.jpg',
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
        path: '/static/images/projects/skateboard-shopping/1.jpg',
        alt: 'skateboard-shopping first screenshot',
      },
      {
        id: 2,
        path: '/static/images/projects/skateboard-shopping/2.jpg',
        alt: 'skateboard-shopping second screenshot',
      },
      {
        id: 3,
        path: '/static/images/projects/skateboard-shopping/3.jpg',
        alt: 'skateboard-shopping third screenshot',
      }
    ],
    tools: ['html', 'styled-components', 'js', 'react', 'redux', 'redux-saga', 'firebase', 'expressjs'],
    description: 'Some description about super duper project hey!',
    liveUrl: 'https://skateboard-shopping.herokuapp.com/',
    codeUrl: 'https://github.com/jstrzyzykowski/code-skateboard-shopping',
    hasMobileVersion: false,
    hasDesktopVersion: true,
  },
];