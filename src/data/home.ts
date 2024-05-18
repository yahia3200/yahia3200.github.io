const personalLinks = [
  {
    icon: 'tabler:brand-linkedin',
    callToAction: {
      target: '_blank',
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/yahia-zakaria-9a75581b0/',
    },
  },
  {
    icon: 'tabler:brand-github',
    callToAction: {
      target: '_blank',
      text: 'Github',
      href: 'https://github.com/yahia3200',
    },
  },
  {
    icon: 'tabler:letter-k',
    callToAction: {
      target: '_blank',
      text: 'kaggle',
      href: 'https://www.kaggle.com/yahia3200',
    },
  },
];

const resumeData = [
  {
    title:
      'CAD Software Engineer <br /> <span class="font-normal">PULSAR Microelectronics, Cairo, Egypt</span> <br /> <span class="text-sm font-normal">February 2024 – Current</span>',
    description: `
    - Contributed to the main program codebase, focusing on fixing bugs, refactoring, and improving the overall code architecture. <br />
    - Designed and Implemented a highly interactive visualization tool for visualizing the different types of electronic simulations (AC, DC, etc ...) with different
     functionalities including adding markers, drawing horizontal and vertical lines on plots with intersections calculations, and customize plot appearances. <br />`,
    icon: 'tabler:briefcase',
  },
  {
    title:
      'Frontend Engineer <br /> <span class="font-normal">NXT Gen, Cairo, Egypt</span> <br /> <span class="text-sm font-normal">November 2023 – Current</span>',
    description: `
    <a href="https://dp.tackleandtalk.com/" target="_blank" class="text-cyan-600 font-bold">Tackle and Talk</a> <span class="text-sm">Angular</span> <br />
    - Built complex UI components for handling booking sessions and providers’ availability with different time zones. <br />
    - Maintaining and refactoring major parts in the application such as Auth pages and dashboards. <br /> 
    <a href="http://superfitai.com/" target="_blank" class="text-cyan-600 font-bold">SuperFit</a> <span class="text-sm">Nextjs</span> <br />
    - Implemented the main landing page for website with focus on responsive design and performance with nearly perfect lighthouse scores.<br />
    - Implemented user authentication with Authjs and Integrated payment flow with backend. <br />`,
    icon: 'tabler:briefcase',
  },
  {
    title:
      'Data Science Intern <br /> <span class="font-normal">Synapse Analytics, Cairo, Egypt</span> <br /> <span class="text-sm font-normal">June 2023 – September 2023</span>',
    description: `- Developed and implemented a machine learning model for cost prediction in transportation and logistics,
achieving an average mean percentage error of less than 20 percent. <br /> - Showcased proficiency in the complete machine learning life-cycle, starting from data cleaning and feature selection, and progressing through model development and deployment using Docker and FastAPI. <br /> - Utilized MLFlow for managing multiple experiment versions, allowing for easy comparisons between different iterations of the machine learning model.`,
    icon: 'tabler:briefcase',
  },
  {
    title:
      'Software Engineer <br /> <span class="font-normal">Google Summer of Code at GCP Scanner</span> <br /> <span class="text-sm font-normal">May 2023 – September 2023</span>',
    description: `- Designed and built a user-friendly and intuitive user interface for the GCP Scanner Tool using React, which is a tool that can help determine what level of access certain credentials possess on GCP. <br /> - Successfully implemented advanced search and filtering functionalities, allowing users to efficiently navigate and extract relevant information from the scanner's output, improving productivity and ease of use. <br /> - Seamlessly integrated the visualization tool with GCP Scanner, ensuring a cohesive ecosystem for users to analyze and act upon their cloud security scan results.`,
    icon: 'tabler:briefcase',
  },
  {
    title:
      'Data Science Intern <br /> <span class="font-normal">Raisa Energy LLC, Cairo, Egypt</span> <br /> <span class="text-sm font-normal">August 2022 – October 2022</span>',
    description: `- Started a research project aimed at creating a machine learning model to accurately predict one of the
geological features for oil and gas wells (BVHH). <br /> - Successfully implemented an inductive clustering method to categorize oil and gas wells based on their
geological attributes and published an article that covers my work <br /> - Developed algorithms for predicting the shape of regions around oil wells (Drilling Spacing Units).`,
    icon: 'tabler:briefcase',
  },
  {
    title:
      'Software Engineer <br /> <span class="font-normal">Google Summer of Code at Emory-BMI </span> <br /> <span class="text-sm font-normal">May 2022 – September 2022</span>',
    description: `- Contributing to the Eaglescope project on a tool for creating user interactive data visualization dashboards. <br /> - Refactoring and improving the performance of the charts to maintain 60 FPS rendering for big-size datasets. <br /> - Adding new multidimensional interactive visualizations to the project and implementing a user interface to
create the dashboard without configuration files.`,
    icon: 'tabler:briefcase',
  },
  {
    title:
      'Deep Learning Research Intern <br /> <span class="font-normal">Compumacy </span> <br /> <span class="text-sm font-normal">August 2021 – November 2021</span>',
    description: `- Trained a model for Driver Action Recognition using different deep learning architectures such as VGG16,
EfficientNet, and MoviNet using transfer learning techniques. <br /> - Implemented different deep learning models such as following word predication with LSTMs and implemented
CNN architectures such as Efficientnet from scratch using Tensorflow.`,
    icon: 'tabler:briefcase',
  },
];

const educationData = [
  {
    title: `Bachelor of Computer Engineering <br /> <span class="font-normal">Cairo University Faculty of Engineering</span> <br /> <span class="text-sm font-normal">2018 - 2023</span>`,
    description: `Grade: Excellence <br /> Graduation Thesis: Tracking and Motion Prediction for Autonomous Vehicles`,
    icon: 'tabler:school',
  },
];

const skillsData = [
  {
    title: 'Programming Languages',
    description: 'Python, C/C++, JavaScript, TypeScript, SQL.',
  },
  {
    title: 'Software Engineering Concepts',
    description: 'OOP, Data Structures, Algorithms, Problem Solving, Databases, GIT.',
  },
  {
    title: 'Machine & Deep Learning Tools',
    description: 'Tensorflow, Pytorch, OpenCV, Sklearn, Numpy, Pandas, Matplotlib.',
  },
  {
    title: 'Web Development',
    description: 'HTML5, CSS3, Sass, Node.js, React.js, Next.js, Flask, FastAPI.',
  },
];

export { personalLinks, resumeData, educationData, skillsData };
