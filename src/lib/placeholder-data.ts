export type Candidate = {
  id: string;
  name: string;
  title: string;
  avatarUrl: string;
  dataAiHint: string;
  skills: string[];
  experience: string;
  availability: 'Immediate' | '2 Weeks' | '1 Month';
  profile: string;
};

export type Company = {
  id: string;
  name: string;
  industry: string;
  logoUrl: string;
  dataAiHint: string;
  hiringNeeds: string[];
  culture: string;
};

export type Job = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: 'Full-time' | 'Freelance' | 'Remote';
  description: string;
  requirements: string[];
};

export type Application = {
  id: string;
  candidateName: string;
  jobTitle: string;
  companyName: string;
  dateApplied: string;
  status: 'Pending' | 'Interviewing' | 'Offered' | 'Rejected';
};

export const candidates: Candidate[] = [
  {
    id: '1',
    name: 'Elena Rodriguez',
    title: 'Senior Frontend Developer',
    avatarUrl: 'https://picsum.photos/seed/candidate1/100/100',
    dataAiHint: 'woman portrait',
    skills: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
    experience: '8 years',
    availability: '2 Weeks',
    profile: 'Senior Frontend Developer with 8 years of experience in building scalable and responsive web applications using React, TypeScript, and Next.js. Passionate about user experience and clean code.',
  },
  {
    id: '2',
    name: 'Marcus Chen',
    title: 'Data Scientist',
    avatarUrl: 'https://picsum.photos/seed/candidate2/100/100',
    dataAiHint: 'man portrait',
    skills: ['Python', 'TensorFlow', 'PyTorch', 'SQL'],
    experience: '5 years',
    availability: 'Immediate',
    profile: 'Data Scientist with 5 years of experience in machine learning, statistical modeling, and data analysis. Proficient in Python, TensorFlow, and PyTorch. Eager to solve complex problems with data.',
  },
  {
    id: '3',
    name: 'Aisha Ahmed',
    title: 'UX/UI Designer',
    avatarUrl: 'https://picsum.photos/seed/candidate3/100/100',
    dataAiHint: 'person smiling',
    skills: ['Figma', 'Adobe XD', 'User Research', 'Prototyping'],
    experience: '6 years',
    availability: '1 Month',
    profile: 'Creative UX/UI Designer with 6 years of experience in creating intuitive and visually appealing digital products. Skilled in user research, wireframing, and prototyping with Figma and Adobe XD.',
  },
  {
    id: '4',
    name: 'Ben Carter',
    title: 'DevOps Engineer',
    avatarUrl: 'https://picsum.photos/seed/candidate4/100/100',
    dataAiHint: 'professional headshot',
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
    experience: '7 years',
    availability: '2 Weeks',
    profile: 'Experienced DevOps Engineer with a strong background in cloud infrastructure and automation. Proficient in AWS, Docker, Kubernetes, and setting up CI/CD pipelines to improve development workflows.',
  },
  {
    id: '5',
    name: 'Sophia Loren',
    title: 'Product Manager',
    avatarUrl: 'https://picsum.photos/seed/candidate5/100/100',
    dataAiHint: 'woman smiling',
    skills: ['Agile', 'Scrum', 'Roadmap Planning', 'Market Analysis'],
    experience: '10 years',
    availability: 'Immediate',
    profile: 'Results-driven Product Manager with a decade of experience in leading cross-functional teams to deliver successful products. Expert in Agile methodologies, roadmap planning, and market analysis.',
  },
  {
    id: '6',
    name: 'Liam O\'Connell',
    title: 'Mobile App Developer',
    avatarUrl: 'https://picsum.photos/seed/candidate6/100/100',
    dataAiHint: 'man glasses',
    skills: ['Swift', 'Kotlin', 'React Native', 'Flutter'],
    experience: '4 years',
    availability: '1 Month',
    profile: 'Dedicated Mobile App Developer with 4 years of experience in building native and cross-platform applications. Proficient in Swift for iOS and Kotlin for Android, with experience in React Native and Flutter.',
  },
];

export const companies: Company[] = [
  {
    id: '1',
    name: 'Innovatech Solutions',
    industry: 'Technology',
    logoUrl: 'https://picsum.photos/seed/clogo1/100/100',
    dataAiHint: 'logo abstract',
    hiringNeeds: ['Frontend Developers', 'Data Scientists'],
    culture: 'Fast-paced, innovative, and collaborative environment.',
  },
  {
    id: '2',
    name: 'QuantumLeap Analytics',
    industry: 'Data Science',
    logoUrl: 'https://picsum.photos/seed/clogo2/100/100',
    dataAiHint: 'logo geometric',
    hiringNeeds: ['Data Engineers', 'Machine Learning Experts'],
    culture: 'Data-driven, research-oriented, and focused on cutting-edge technology.',
  },
  {
    id: '3',
    name: 'CreativeMinds Studio',
    industry: 'Design',
    logoUrl: 'https://picsum.photos/seed/clogo3/100/100',
    dataAiHint: 'logo minimal',
    hiringNeeds: ['UX/UI Designers', 'Graphic Designers'],
    culture: 'A creative and open-minded studio that values artistic expression and user-centric design.',
  },
  {
    id: '4',
    name: 'Global Connect',
    industry: 'Telecommunications',
    logoUrl: 'https://picsum.photos/seed/clogo4/100/100',
    dataAiHint: 'logo nature',
    hiringNeeds: ['Network Engineers', 'DevOps Specialists'],
    culture: 'A large-scale international company focused on reliability and global connectivity.',
  },
];

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'Innovatech Solutions',
    location: 'Berlin, Germany',
    type: 'Full-time',
    description: 'Join our team to build the next generation of web applications.',
    requirements: ['5+ years of React experience', 'Strong proficiency in TypeScript', 'Experience with GraphQL'],
  },
  {
    id: '2',
    title: 'Lead Data Scientist',
    company: 'QuantumLeap Analytics',
    location: 'San Francisco, USA',
    type: 'Remote',
    description: 'Lead our data science team and work on challenging machine learning problems.',
    requirements: ['7+ years in Data Science', 'PhD or Masters in a quantitative field', 'Expertise in Python and ML frameworks'],
  },
  {
    id: '3',
    title: 'UX Designer',
    company: 'CreativeMinds Studio',
    location: 'Paris, France',
    type: 'Freelance',
    description: 'We are looking for a freelance UX designer for a 3-month project.',
    requirements: ['Proven experience in UX design for mobile apps', 'Strong portfolio', 'Proficiency in Figma'],
  },
  {
    id: '4',
    title: 'Cloud Engineer (AWS)',
    company: 'Global Connect',
    location: 'London, UK',
    type: 'Full-time',
    description: 'Manage and scale our cloud infrastructure on AWS.',
    requirements: ['3+ years of AWS experience', 'Knowledge of infrastructure as code (Terraform)', 'CI/CD experience'],
  },
];

export const applications: Application[] = [
  {
    id: '1',
    candidateName: 'Elena Rodriguez',
    jobTitle: 'Senior React Developer',
    companyName: 'Innovatech Solutions',
    dateApplied: '2024-05-01',
    status: 'Interviewing',
  },
  {
    id: '2',
    candidateName: 'Marcus Chen',
    jobTitle: 'Lead Data Scientist',
    companyName: 'QuantumLeap Analytics',
    dateApplied: '2024-05-03',
    status: 'Pending',
  },
  {
    id: '3',
    candidateName: 'Aisha Ahmed',
    jobTitle: 'UX Designer',
    companyName: 'CreativeMinds Studio',
    dateApplied: '2024-04-28',
    status: 'Offered',
  },
  {
    id: '4',
    candidateName: 'Ben Carter',
    jobTitle: 'Cloud Engineer (AWS)',
    companyName: 'Global Connect',
    dateApplied: '2024-05-05',
    status: 'Interviewing',
  },
  {
    id: '5',
    candidateName: 'Sophia Loren',
    jobTitle: 'Senior React Developer',
    companyName: 'Innovatech Solutions',
    dateApplied: '2024-05-10',
    status: 'Rejected',
  },
];
