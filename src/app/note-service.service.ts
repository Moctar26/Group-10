import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoteServiceService {

  constructor() { }
  saveNote(note){
    let notes= [];
    if (localStorage.getItem('Notes')){
    notes= JSON.parse(localStorage.getItem('Users'));
      notes= [note, ...notes];
    }else{
      notes=[note];
    }
    localStorage.setItem('Notes',JSON.stringify(notes));
     }
}
