import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NoteServiceService } from 'src/app/note-service.service';
import { Note } from '../note.model';

@Component({
  selector: 'app-new-note',
  templateUrl: './new-note.page.html',
  styleUrls: ['./new-note.page.scss'],
})
export class NewNotePage implements OnInit {

  form: FormGroup=this.fb.group({
    title:[
      [],
      Validators.required,
    ],
    content:[
      [],
      Validators.required,
    ]
  });

  registrationform: FormGroup;
  note: any;


  constructor(private fb: FormBuilder,private noteService: NoteServiceService) { }

  ngOnInit() {
   /*   //l'enregistrement.
     this.registrationform=new FormGroup({
      title: new FormControl(null, Validators.required),
      content: new FormControl(null, Validators.required)
    }); */
    this.createRegisterationForm();
  }

createRegisterationForm(){
  this.registrationform= this.fb.group({
    title: [null,Validators.required],
    content: [null,Validators.required],
  });
}

  addNotes(){
    if(this.form.valid){
      const newNote: Note={
        title:this.form.get('title').value,
        content:this.form.get('content').value,
        //date: Date.now(),
      };
      console.log(newNote);
    }
    else{
      console.log('Invalid form \n');
    }
  }

  onSubmit(){
console.log(this.registrationform.value);
this.note = Object.assign(this.note, this.registrationform.value);
this.noteService.saveNote=(this.note);
this.registrationform.reset();
 }
}
