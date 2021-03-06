export interface Query {
  id?: string;
  question: string;
  description: string;
  date?: any |  Date;
  state?: 'completed' | 'cancelled' | 'inProgress' | 'not-Started' | null;
  answer?: string;
}

