import carstroImg from '../../assets/carstro.png';
import covidTrackerImg from '../../assets/covidTracker.png';
import mentImg from '../../assets/ment.png';
import shuttleTrackerImg from '../../assets/shuttleTracker.png';
import weddingImg from '../../assets/wedding.png';

const imageExample = 'https://dummyimage.com/300';
// const carstroImg =

export const projects = [
  {
    id: 1,
    image: carstroImg,
    title: 'Carstro Cars',
    category: 'web',
    githubLink: 'https://github.com/kevincastrochavez/carstro',
    liveSiteLink: 'https://carstro-15495.web.app/',
  },
  {
    id: 2,
    image: shuttleTrackerImg,
    title: 'Shuttle Tracker',
    category: 'web',
    githubLink: 'https://github.com/kevincastrochavez/shuttletracker',
    liveSiteLink: 'https://shuttle-tracker-3997d.web.app/',
  },
  {
    id: 3,
    image: weddingImg,
    title: 'Wedding Site',
    category: 'web',
    githubLink: 'https://github.com/kevincastrochavez/wedding',
    liveSiteLink: 'https://wedding-8b90a.web.app/',
  },
  {
    id: 4,
    image: mentImg,
    title: 'MENT',
    category: 'web',
    githubLink: 'https://github.com/kevincastrochavez/ment',
    liveSiteLink: 'https://ment-films.web.app/',
  },
  {
    id: 5,
    image: covidTrackerImg,
    title: 'Covid Tracker',
    category: 'web',
    githubLink: 'https://github.com/kevincastrochavez/Covid-19-Tracker',
    liveSiteLink: 'https://covid-19-tracker-6990c.web.app/',
  },
];

export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'web',
  },
  {
    name: '3D',
  },
];
