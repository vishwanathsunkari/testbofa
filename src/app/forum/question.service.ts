import { Injectable } from '@angular/core';
import { Query } from './question.model';
import { Subject } from 'rxjs/Subject';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
private questions: Query[] = [];
value;
private singleQuery: Query;
private queryUpdated = new Subject<Query[]>();
private queryUpdated1 = new Subject<Query[]>();
private queryCountUpdated = new Subject<number>();
private singleQuerysubject = new Subject<Query>();

private availaibleQuestions: Query[]  = [
  {id: 'Tech', question: 'How to request for Domain access in BOFA?', description: 'Please explain briefly how to get the domain access for BOFA public domain', state: 'inProgress', date: 1428496544765},
  {id: 'Tech1', question: 'How to raise an ARM request?', description: 'Please explain briefly how to raise an ARM request', state: 'inProgress', date: 1428496548787},
  {id: 'Tech2', question: 'How to find the profile in FlagScapePortal?', description: 'Please explain briefly how to get the own profile information in Flagscape Portal', state: 'inProgress', date: 1428496544000},
  {id: 'Tech3', question: 'How to raise request for IM?', description: 'Please explain briefly how to raise a Skype access request', state: 'inProgress', date: 1478656544765},
  {id: 'Tech4', question: 'How to request an Mail box?', description: 'Please explain briefly how to raise a mailbox request', state: 'inProgress', date: 1098766544765},
  {id: 'Tech5', question: 'How to call to support?', description: 'Please tell us how to call to support', state: 'inProgress', date: 1428496544765},
  {id: 'Tech6', question: 'How to find the another employee NBK ID with the given name?', description: 'Please explain how to get the NBK ID of the employee if we know the name', state: 'inProgress', date: 1428496544123},
  {id: 'Tech7', question: 'How to get the information about the windows trasfer?', description: 'i want to move my domain from corp to asia .. what is the process ? can anyone tell me', state: 'inProgress', date: 1428496544111},
  {id: 'Tech8', question: 'How to get the authentication number to call oniste ?', description: 'Please explain how to get the authentication number', state: 'inProgress', date: 142849654222},
  {id: 'Tech9', question: 'How to raise  request for VOIP?', description: 'Please explain briefly how to request for VOIP', state: 'inProgress', date: 142849654000},
];
  constructor(private router: Router) {
  }

  SaveQueries(question: string, description: string) {
    const que: Query = {
      id: Math.round(Math.random() * 1000).toString(),
      question: question,
      description: description,
      date: new Date(),
      state: 'not-Started'
    };
    
      this.questions.push(que);
      console.log(this.questions);
      this.availaibleQuestions.push(que);
      this.queryUpdated.next([...this.questions]);
      this.queryUpdated1.next([...this.availaibleQuestions]);
      console.log(this.questions.length);
      this.queryCountUpdated.next([...this.questions].length);
  }

  getQueries() {
    return [...this.questions];
  }

getQuery(id: string) {
  console.log(id);
  return {...this.questions.find(q => q.id === id)};
}

  getQueryUpdateListener() {
    return this.queryUpdated.asObservable();
  }

  getAvailQueriesUpdateListener() {
    return this.queryUpdated1.asObservable();
  }

  getQueryCountUpdated() {
    return this.queryCountUpdated.asObservable();
  }

  getAvailQueries() {
    return [...this.availaibleQuestions];
  }

  onDelete(id: number) {
    const query = this.questions.splice(id, 1);
     const availID = query[id].id;
     for (let i = 0; i < this.availaibleQuestions.length; i++) {
        if (this.availaibleQuestions[i].id = availID) {
          this.value = i;
        }
     }
     this.availaibleQuestions.splice(this.value, 1);
     this.queryUpdated1.next([...this.availaibleQuestions]);
     this.queryCountUpdated.next([...this.questions].length);
    return [...this.questions];
  }



  updateSingleQuery(id) {
    this.singleQuery = this.availaibleQuestions.find(p => p.id === id);
    console.log(this.singleQuery);
    this.singleQuerysubject.next(this.singleQuery);
    this.router.navigate(['/forum/query']);

  }

  getSingleQueryListener(){
    return this.singleQuerysubject.asObservable();
  }


}
