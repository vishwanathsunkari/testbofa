import { Injectable } from '@angular/core';
import { Query } from './question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
questions: Query[] = [];

availaibleQuestions: Query[]  = [
  {id: 'Tech', question: 'How to request for Domain access in BOFA?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 1428496544765},
  {id: 'Tech1', question: 'How to raise an ARM request?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 1428496548787},
  {id: 'Tech2', question: 'How to find the profile in portal?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 14284978844765},
  {id: 'Tech3', question: 'How to raise request for IM?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 1478656544765},
  {id: 'Tech4', question: 'How to request an Mail box?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 1098766544765},
  {id: 'Tech5', question: 'How to call to support?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 1428496544765},
  {id: 'Tech6', question: 'How to find the another employee NBK ID?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 14288886544765},
  {id: 'Tech7', question: 'How to get the information about the windows trasfer?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 1428496544111},
  {id: 'Tech8', question: 'How to request for Domain access in BOFA?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 14284999544765},
  {id: 'Tech9', question: 'How to request for Domain access in BOFA?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'completed', date: 1428496544765},
];
  constructor() {
  }

  SaveQueries(question: string, description: string) {
    const que: Query = {
      id: '',
      question: question,
      description: description
    };
      this.questions.push(que);
  }

  getQueries() {
    return this.questions;
  }

  getAvailQueries() {
    if (this.questions.length > 0) {
      this.questions.forEach(element => {
        this.availaibleQuestions.push(element);
      });
    }
    return this.availaibleQuestions;
  }

}
