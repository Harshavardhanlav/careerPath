import mongoose from 'mongoose';
import dotenv from 'dotenv';
import CareerPath from './src/models/CareerPath.js';
import Quiz from './src/models/Quiz.js';
import LearningResource from './src/models/LearningResource.js';
import JobOpportunity from './src/models/JobOpportunity.js';

dotenv.config();

const sampleData = {
  careerPaths: [
    {
      title: 'Full Stack Developer',
      description: 'Build complete web applications with both frontend and backend technologies',
      required_skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
      skill_order: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB', 'Git'],
      icon: '💻',
      created_by: 'admin'
    },
    {
      title: 'Data Scientist',
      description: 'Analyze data and build machine learning models to extract insights',
      required_skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'SQL', 'Statistics', 'Machine Learning'],
      skill_order: ['Python', 'Statistics', 'SQL', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning'],
      icon: '📊',
      created_by: 'admin'
    },
    {
      title: 'UI/UX Designer',
      description: 'Create beautiful and user-friendly digital experiences',
      required_skills: ['Figma', 'Adobe XD', 'User Research', 'Wireframing', 'Prototyping', 'Design Systems', 'Usability Testing'],
      skill_order: ['User Research', 'Wireframing', 'Figma', 'Prototyping', 'Design Systems', 'Adobe XD', 'Usability Testing'],
      icon: '🎨',
      created_by: 'admin'
    },
    {
      title: 'DevOps Engineer',
      description: 'Manage infrastructure and deployment pipelines for scalable applications',
      required_skills: ['Linux', 'Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform', 'Monitoring'],
      skill_order: ['Linux', 'Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Terraform', 'Monitoring'],
      icon: '🚀',
      created_by: 'admin'
    }
  ],

  quizzes: [
    // Full Stack Developer Quizzes
    {
      skill_name: 'HTML',
      question: 'What does HTML stand for?',
      options: ['Hyper Text Markup Language', 'High Tech Modern Language', 'Hyperlink and Text Markup Language', 'Home Tool Markup Language'],
      correct_answer: 0,
      explanation: 'HTML stands for Hyper Text Markup Language, the standard markup language for creating web pages.'
    },
    {
      skill_name: 'HTML',
      question: 'Which tag is used to create a hyperlink?',
      options: ['<link>', '<a>', '<href>', '<url>'],
      correct_answer: 1,
      explanation: 'The <a> tag (anchor tag) is used to create hyperlinks in HTML.'
    },
    {
      skill_name: 'HTML',
      question: 'What is the purpose of the alt attribute in an img tag?',
      options: ['To specify image alignment', 'To provide alternative text for screen readers', 'To set image size', 'To link to another page'],
      correct_answer: 1,
      explanation: 'The alt attribute provides alternative text that describes the image, which is important for accessibility and screen readers.'
    },
    {
      skill_name: 'HTML',
      question: 'Which HTML element is used to define the structure of an HTML document?',
      options: ['<body>', '<html>', '<head>', '<div>'],
      correct_answer: 1,
      explanation: 'The <html> element is the root element of an HTML page and defines the structure of the document.'
    },
    {
      skill_name: 'CSS',
      question: 'What does CSS stand for?',
      options: ['Computer Style Sheets', 'Creative Style Sheets', 'Cascading Style Sheets', 'Colorful Style Sheets'],
      correct_answer: 2,
      explanation: 'CSS stands for Cascading Style Sheets, used to describe the presentation of a document written in HTML.'
    },
    {
      skill_name: 'CSS',
      question: 'Which property is used to change the background color?',
      options: ['color', 'background-color', 'bgcolor', 'background'],
      correct_answer: 1,
      explanation: 'The background-color property is used to set the background color of an element.'
    },
    {
      skill_name: 'JavaScript',
      question: 'What is the correct way to declare a variable in JavaScript?',
      options: ['var myVar;', 'variable myVar;', 'v myVar;', 'declare myVar;'],
      correct_answer: 0,
      explanation: 'In JavaScript, variables can be declared using var, let, or const keywords.'
    },
    {
      skill_name: 'JavaScript',
      question: 'Which operator is used for strict equality comparison?',
      options: ['==', '===', '=', '!='],
      correct_answer: 1,
      explanation: 'The === operator checks for both value and type equality (strict equality).'
    },
    {
      skill_name: 'React',
      question: 'What is JSX?',
      options: ['A JavaScript framework', 'A syntax extension for JavaScript', 'A CSS preprocessor', 'A database query language'],
      correct_answer: 1,
      explanation: 'JSX is a syntax extension for JavaScript that allows you to write HTML-like code in React components.'
    },
    {
      skill_name: 'React',
      question: 'How do you pass data to a React component?',
      options: ['Using state', 'Using props', 'Using context', 'Using refs'],
      correct_answer: 1,
      explanation: 'Props (properties) are used to pass data from parent components to child components in React.'
    },

    // Data Scientist Quizzes
    {
      skill_name: 'Python',
      question: 'What is the output of print(2 ** 3)?',
      options: ['6', '8', '9', '23'],
      correct_answer: 1,
      explanation: 'The ** operator is used for exponentiation in Python. 2 ** 3 equals 8.'
    },
    {
      skill_name: 'Python',
      question: 'Which data structure is ordered and mutable?',
      options: ['Tuple', 'Set', 'List', 'Dictionary'],
      correct_answer: 2,
      explanation: 'Lists in Python are ordered sequences that are mutable (can be changed).'
    },
    {
      skill_name: 'Pandas',
      question: 'How do you read a CSV file in pandas?',
      options: ['pd.read_csv()', 'pd.load_csv()', 'pd.open_csv()', 'pd.import_csv()'],
      correct_answer: 0,
      explanation: 'pd.read_csv() is the correct method to read CSV files in pandas.'
    },
    {
      skill_name: 'Pandas',
      question: 'Which method is used to get the first 5 rows of a DataFrame?',
      options: ['df.head()', 'df.first()', 'df.top()', 'df.show()'],
      correct_answer: 0,
      explanation: 'The head() method returns the first 5 rows of a DataFrame by default.'
    }
  ],

  resources: [
    // Full Stack Development Resources
    {
      skill_name: 'HTML',
      title: 'FreeCodeCamp Web Development',
      url: 'https://www.freecodecamp.org/learn/responsive-web-design/',
      platform: 'FreeCodeCamp',
      type: 'free',
      description: 'Comprehensive free course covering HTML, CSS, and responsive design'
    },
    {
      skill_name: 'HTML',
      title: 'MDN Web Docs - HTML',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
      platform: 'MDN',
      type: 'free',
      description: 'Official HTML documentation with examples and tutorials'
    },
    {
      skill_name: 'CSS',
      title: 'CSS Tricks - Complete Guide',
      url: 'https://css-tricks.com/guides/',
      platform: 'CSS Tricks',
      type: 'free',
      description: 'Comprehensive CSS tutorials and guides'
    },
    {
      skill_name: 'JavaScript',
      title: 'JavaScript.info',
      url: 'https://javascript.info/',
      platform: 'JavaScript.info',
      type: 'free',
      description: 'Modern JavaScript tutorial with interactive examples'
    },
    {
      skill_name: 'React',
      title: 'React Official Tutorial',
      url: 'https://react.dev/learn/tutorial-tic-tac-toe',
      platform: 'React',
      type: 'free',
      description: 'Official React tutorial building a tic-tac-toe game'
    },
    {
      skill_name: 'Node.js',
      title: 'Node.js Official Docs',
      url: 'https://nodejs.org/en/docs/',
      platform: 'Node.js',
      type: 'free',
      description: 'Official Node.js documentation and guides'
    },

    // Data Science Resources
    {
      skill_name: 'Python',
      title: 'Python for Everybody',
      url: 'https://www.py4e.com/',
      platform: 'University of Michigan',
      type: 'free',
      description: 'Free Python course by University of Michigan'
    },
    {
      skill_name: 'Pandas',
      title: 'Pandas Documentation',
      url: 'https://pandas.pydata.org/docs/',
      platform: 'Pandas',
      type: 'free',
      description: 'Official pandas documentation with examples'
    },
    {
      skill_name: 'Scikit-learn',
      title: 'Scikit-learn User Guide',
      url: 'https://scikit-learn.org/stable/user_guide.html',
      platform: 'Scikit-learn',
      type: 'free',
      description: 'Comprehensive guide to machine learning with scikit-learn'
    }
  ],

  jobs: [
    // Full Stack Developer Jobs
    {
      title: 'Full Stack Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      description: 'Join our team to build scalable web applications using React and Node.js',
      career_path: 'Full Stack Developer',
      type: 'job'
    },
    {
      title: 'Senior Full Stack Engineer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      description: 'Lead development of our flagship product with modern tech stack',
      career_path: 'Full Stack Developer',
      type: 'job'
    },
    {
      title: 'Frontend Developer',
      company: 'DesignStudio',
      location: 'New York, NY',
      description: 'Create beautiful user interfaces with React and modern CSS',
      career_path: 'Full Stack Developer',
      type: 'job'
    },

    // Data Scientist Jobs
    {
      title: 'Data Scientist',
      company: 'DataTech Solutions',
      location: 'Remote',
      description: 'Analyze large datasets and build predictive models',
      career_path: 'Data Scientist',
      type: 'job'
    },
    {
      title: 'Machine Learning Engineer',
      company: 'AI Innovations',
      location: 'Seattle, WA',
      description: 'Develop and deploy machine learning models at scale',
      career_path: 'Data Scientist',
      type: 'job'
    },

    // UI/UX Designer Jobs
    {
      title: 'UI/UX Designer',
      company: 'Creative Agency',
      location: 'Los Angeles, CA',
      description: 'Design user-centered digital experiences for web and mobile',
      career_path: 'UI/UX Designer',
      type: 'job'
    },
    {
      title: 'Product Designer',
      company: 'FinTech Startup',
      location: 'Remote',
      description: 'Design intuitive financial products and user experiences',
      career_path: 'UI/UX Designer',
      type: 'job'
    }
  ]
};

async function seedDatabase() {
  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      console.error('MONGODB_URI not found in environment variables');
      process.exit(1);
    }

    await mongoose.connect(mongoUri);
    console.log('Connected to MongoDB');

    // Clear existing data
    console.log('Clearing existing data...');
    await CareerPath.deleteMany({});
    await Quiz.deleteMany({});
    await LearningResource.deleteMany({});
    await JobOpportunity.deleteMany({});

    // Seed career paths
    console.log('Seeding career paths...');
    const careerPaths = await CareerPath.insertMany(sampleData.careerPaths);
    console.log(`Created ${careerPaths.length} career paths`);

    // Seed quizzes
    console.log('Seeding quizzes...');
    const quizzes = await Quiz.insertMany(sampleData.quizzes);
    console.log(`Created ${quizzes.length} quizzes`);

    // Seed resources
    console.log('Seeding learning resources...');
    const resources = await LearningResource.insertMany(sampleData.resources);
    console.log(`Created ${resources.length} learning resources`);

    // Seed jobs
    console.log('Seeding job opportunities...');
    const jobs = await JobOpportunity.insertMany(sampleData.jobs);
    console.log(`Created ${jobs.length} job opportunities`);

    console.log('\n✅ Database seeded successfully!');
    console.log('\n📊 Summary:');
    console.log(`   • ${careerPaths.length} Career Paths`);
    console.log(`   • ${quizzes.length} Quizzes`);
    console.log(`   • ${resources.length} Learning Resources`);
    console.log(`   • ${jobs.length} Job Opportunities`);

    console.log('\n🚀 You can now:');
    console.log('   • Register/Login to the application');
    console.log('   • Take quizzes and track progress');
    console.log('   • Explore learning resources');
    console.log('   • View job opportunities');
    console.log('   • Use all advanced features (Skill Decay Tracker, Learning DNA, etc.)');

  } catch (error) {
    console.error('Error seeding database:', error);
  } finally {
    await mongoose.connection.close();
    console.log('Database connection closed');
  }
}

seedDatabase();