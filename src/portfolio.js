import aboutpic from "./components/Access/myimage.jpg"


const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://morganbb104.github.io/HW_20_Portfolio_withReact/',
  title: 'MAM',
}

const about = {
  photo:aboutpic,
  // all the properties are optional - can be left empty or deleted
  name: 'Md Al Mamun',
  role: 'Full stack developer',
  description:
    'I am junior at Dartmouth College, majoring in Computer Science and Mathematics. I am interested in Full Stack Development and Financial Mathematics',
  resume: 'https://drive.google.com/drive/folders/12MP3uHk94Ew6_egSJqgxbvycI60gHfXA?usp=sharing',
  social: {
    linkedin: 'https://www.linkedin.com/in/md-al-mamun-21567b18b/',
    github: 'https://github.com/almamun4901',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Tiny Search Engine',
    description:
      'As users, we see a page that lets anyone look for the movies from the search bar by key words, and obtaining the actual or similar movies with their years, actors, rating, and description information by recommendation. In addition, they can search the nearby theaters from where they currently are located.',
    stack: ['localstorage', 'Openweather API', 'Google Map API','Movie Database API'],
    sourceCode: 'https://github.com/Mike-C-Sanders/Movie-Tracker',
    livePreview: 'https://mike-c-sanders.github.io/Movie-Tracker/',
  },
  {
    name: 'Event Planner',
    description:
      'Event Planner was designed with the partier in mind, the one who wants to find fine dinning or a friend to have a good time. Event Planner is the easiest way for anyone to find an event to attend, create or host your own event or browse whats happening in your local area.',
    stack: ['swiper.js', 'npm', 'jawsdb','handlebars','express','nodejs'],
    sourceCode: 'https://github.com/Morganbb104/Event_Planner_project2',
    livePreview: 'https://obscure-chamber-98928.herokuapp.com/',
  },
  {
    name: 'Resource Planner',
    description:
      'Resource Planner is able to distrute the current resource including human resource,time and budget in one company in order to help user to manahe their projects',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    livePreview: 'https://resource-planner-group2.herokuapp.com/',
  },
  {
    name: 'GameStoreData(back end)',
    description:
      'GameStoreData is able to let user retrieve the game from database based on its year and category',
    stack: ['Java 8', 'MySQL', 'React'],
    sourceCode: 'https://github.com/stone-com/Resource-Planner',
    
  },
  {
    name: 'Music Store(back end)',
    description:
      'MusicStore is able to direct user to the desired page based on its endpoints by track, album,artist and label',
    stack: ['html-css-javascript', 'sequelize', 'React'],
    sourceCode: 'https://github.com/Morganbb104/M7-project2-musictore-recommendations-Huang_Chengchien',
    livePreview: 'https://cheng32-musicstore-catalog.herokuapp.com/track',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'Java',
  'C',
  'C#',
  'MySQL',
  'React',
  'Tailwind',
  'Unity',
  '3D Modeling',
  'Material UI',
  'Git',
  'Java',
  'Microservices'
]

const gallery = [
  `${process.env.PUBLIC_URL}/images/myimage.jpg`,
  `${process.env.PUBLIC_URL}/images/image.JPG`,
  "https://images.pexels.com/photos/29847092/pexels-photo-29847092/free-photo-of-icelandic-landscape-at-sunset-with-jimny.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  "https://images.pexels.com/photos/30332774/pexels-photo-30332774/free-photo-of-serene-woman-reading-in-a-spring-forest.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'md.al.mamun.26@dartmouth.edu',
}

export { header, about, projects, skills, contact, gallery }
