export interface IProject {
  id: number,
  title: string,
  thumbnailUrl: string,
  tools: string[],
  liveUrl: string,
  codeUrl: string,
}

export const projectsData = [
  {
    id: 1,
    title: 'Some example project name',
    thumbnailUrl: '',
    tools: ['html', 'css', 'js', 'react', 'redux'],
    liveUrl: '',
    codeUrl: 'https://github.com/jstrzyzykowski/programmer-portfolio',
  },
];