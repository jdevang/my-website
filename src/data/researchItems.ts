export const researchItems: ResearchItem[] = [
    {
      id: 'generative-ai-pedogology',
      title: 'An Analysis of the Impact of Advances in Generative Artificial Intelligence on Programming Assignments and Competitions',
      tags: ['Artificial Intelligence', 'Generative AI', 'ChatGPT', 'Plagiarism Detection'],
      authors: [{ name: 'Devang Jayachandran', avatar: '/static/images/profile.jpg' }, { name: 'Pranit S. Maldikar', avatar: '/static/images/pranit.jpg' }, { name: 'Dr. Jeremy J. Blum', avatar: '/static/images/blum.jpg' }],
      abstract:
        "Recent advances in large language models have made large-scale generative artificial intelligence systems more widely available. One such system is ChatGPT, created by OpenAI, which has the ability to handle a variety of tasks, including answering complex questions, analyzing data, and engaging in contextual conversation. This paper assesses the impact of ChatGPT on programming assignments by examining its strengths and limitations in solving challenging problems presented in the IEEEXtreme programming contest problem set, which includes problems that were not included in ChatGPT's training data. ChatGPT's performance varies depending on the type of problem, performing well in identifying underlying concepts and generating basic solutions for easier to medium-level problems, but facing difficulties with edge cases and lengthy code for more complex problems. Additionally, ChatGPT's obfuscation mechanisms can make plagiarism detection more challenging, even when it cannot solve a problem completely.",
      date: '2023-03-30',
      pdf: '/static/report.pdf',
    },
  ];
  
  export interface ResearchItem {
    id: string;
    title: string;
    tags: string[];
    authors: { name: string; avatar: string }[];
    abstract: string;
    date: string;
    pdf: string;
  }