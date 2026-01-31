export interface TimelineEvent {
  year: number;
  label: string;
  description: string;
  type: 'Text' | 'Event' | 'Person';
}

export interface SectionContent {
  id: string;
  title: string;
  subtitle: string;
  content: {
    heading: string;
    text: string;
  }[];
  imagePlaceholder?: string;
}

export interface FrameworkItem {
  concept: string;
  fact: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}