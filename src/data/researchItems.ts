export const researchItems: ResearchItem[] = [
    {
      id: 'generative-ai-pipeline',
      title: 'A Large Language Model Pipeline to Automate the Solution of Competitive Programming Problems',
      tags: ['Statistical Analysis', 'Artificial Intelligence', 'Generative AI', 'GPT API', 'Competitive Programming'],
      authors: [{ name: 'Devang Jayachandran', avatar: '/static/images/profile.jpg' }, { name: 'Dr. Jeremy J. Blum', avatar: '/static/images/blum.jpg' }],
      abstract:
        "The recent rapid introduction of large language models has enabled new black box approaches to optimize the application of these models for various scenarios. GPT-4 is a multimodal large language model introduced by OpenAI which can answer complex questions, analyze nuanced data, and solve complicated programming problems. The performance of GPT is dependent upon the provided prompt and hyperparameters. This paper explores the effect of minor variations in system prompt and parameters including temperature and top-p for code generation and code accuracy for competitive programming tasks. Temperature controls the amount of randomness in the response, with a temperature of zero producing deterministic output. Top-p controls the cumulative probability distribution for tokens considered for the next output token. Based on the results, we propose approaches to optimize system prompts for code-generation and parameter values to improve the correctness of code. In addition, we propose a pipeline that utilizes these enhancements to effectively solve algorithmic puzzles common in computer science education, in addition to complex contest programming problems.",
      date: '2024-04-19',
      pdf: 'https://peer.asee.org/45702',
    },
    {
      id: 'generative-ai-participation',
      title: 'Leveraging Generative Artificial Intelligence to Broaden Participation in Computer Science',
      tags: ['Statistical Analysis', 'Artificial Intelligence', 'Generative AI', 'ChatGPT', 'Computer Science'],
      authors: [{ name: 'Devang Jayachandran', avatar: '/static/images/profile.jpg' }, { name: 'Pranit S. Maldikar', avatar: '/static/images/pranit.png' }, { name: 'Dr. Jeremy J. Blum', avatar: '/static/images/blum.jpg' }, { name: 'Tyler S. Love', avatar: '' }],
      abstract:
        "Generative Artificial Intelligence (AI) was incorporated into a competitive programming event that targeted undergraduate students, including those with little programming experience. The competition incorporated a range of challenge design approaches that promoted meaningful interaction with generative AI system, even while keeping the challenge difficulty level to an appropriate level. An analysis of survey responses and competition data showed that this format lowered barriers to participation, successfully engaged students throughout the competition, and increased the likelihood that they would participate in a similar event. In an extension of this work, a professional development workshop for high school teachers is being developed, along with a contest for high school students. Participant surveys and logs of interaction with the contest and generative AI systems will be analyzed to measure the effect of generative AI on student self-efficacy and suggest ways to integrate generative AI instruction into computer science curriculum.",
      date: '2024-05-20',
      pdf: 'https://doi.org/10.1609/aaaiss.v3i1.31262',
    },
    {
      id: 'generative-ai-pedogology',
      title: 'An Analysis of the Impact of Advances in Generative Artificial Intelligence on Programming Assignments and Competitions',
      tags: ['Artificial Intelligence', 'Generative AI', 'ChatGPT', 'Plagiarism Detection'],
      authors: [{ name: 'Devang Jayachandran', avatar: '/static/images/profile.jpg' }, { name: 'Pranit S. Maldikar', avatar: '/static/images/pranit.png' }, { name: 'Dr. Jeremy J. Blum', avatar: '/static/images/blum.jpg' }],
      abstract:
        "Recent advances in large language models have made large-scale generative artificial intelligence systems more widely available. One such system is ChatGPT, created by OpenAI, which has the ability to handle a variety of tasks, including answering complex questions, analyzing data, and engaging in contextual conversation. This paper assesses the impact of ChatGPT on programming assignments by examining its strengths and limitations in solving challenging problems presented in the IEEEXtreme programming contest problem set, which includes problems that were not included in ChatGPT's training data. ChatGPT's performance varies depending on the type of problem, performing well in identifying underlying concepts and generating basic solutions for easier to medium-level problems, but facing difficulties with edge cases and lengthy code for more complex problems. Additionally, ChatGPT's obfuscation mechanisms can make plagiarism detection more challenging, even when it cannot solve a problem completely.",
      date: '2023-03-30',
      pdf: 'https://peer.asee.org/45088',
    },
    {
      id: 'table-extraction',
      title: 'Method and System for Tabular Information Extraction',
      tags: ['Statistical Analysis', 'Coordinate OCR', 'Bounding Box', 'Table Reconstruction'],
      authors: [{ name: 'Devang Jayachandran', avatar: '/static/images/profile.jpg' }, { name: 'Sidharth Talwar', avatar: '' },{ name: 'Sunil Nair', avatar: '' }, { name: 'Ranjit Radhakrishnan', avatar: '' }, { name: 'Sanjay Garg', avatar: '' }],
      abstract:
        "A method and a system for extracting information from a table in a document is provided. The method includes: receiving a document that includes information that is arranged in a table; determining three sets of coordinates that respectively relate to lines, words, and characters included in the document; extracting a list of lines based on the first set of coordinates; reconstructing the rows of the table based on list of lines and the second set of coordinates; reconstructing the columns of the table based on the reconstructed rows and the third set of coordinates; and outputting a reconstruction of the table. The three sets of coordinates are expressible in an hOCR format that is based on an open standard for representation of scanned information that is obtainable by using an optical character recognition (OCR) technique.",
      date: '2022-05-05',
      pdf: 'https://uspto.report/patent/app/20220138460',
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