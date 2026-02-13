
export interface Prompt {
  id: string;
  title: string;
  description: string;
  text: string;
  instructions?: string;
}

export interface Category {
  id: string;
  title: string;
  description?: string;
  strategy?: string;
  prompts: Prompt[];
}

export interface Advantage {
  icon: string;
  title: string;
  description: string;
}

export interface Step {
  id: number;
  title: string;
  description: string;
}
