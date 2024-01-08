export const pinnedRepos: pinnedRepoType[] = [
    {
      image:'/static/images/project-1-code.png',
      name: 'Decentralized Chat',
      stack: ['React', 'Go', 'Docker'],
      id: 'DistributedChat',
      repoLink: 'https://github.com/jdevang/distributed-chat-master',
      longDescription:
        'A Distributed Chat Application with a Master-Minion Architecture. Leverages ReactJS and NodeJS for a seamless front-end experience, with MySQL databases for efficient data management. Backend is developed using Golang and Docker for scalability. We utilize the multithreading capabilities of Golang to enable asynchronous uplink between Master and Minion while the Client interacts only with the Minion nodes. Authentication via API keys ensures security, while RESTful APIs enable secure data exchange. Advantages include load balancing, regional availability, and enhanced uptime.',
    },
  
    {
      id: `jdevang.com`,
      stack: ['Next.JS', 'Chakra-UI', 'MDX'],
      name: `My Website`,
      deployedLink: 'https://jdevang.com',
      repoLink: 'https://github.com/jdevang/my-website',
      image:'/static/images/website.png',
      longDescription: `I've always thought that it is hard to explain what a project is using just its github. I ended up building this site as a way to show what I've accomplished over the years in my professional, academic, and my personal life. I have never been amazing at front-end development and as such much of this site's design philosophy is borrowed from across the internet`,
    },
  ];
  
  export interface pinnedRepoType {
    id: string;
    name: string;
    image?: string;
    deployedLink?: string;
    repoLink?: string;
    longDescription: string;
    stack?: string[];
  }