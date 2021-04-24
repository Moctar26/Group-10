import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotePage } from './note.page';

const routes: Routes = [
  {
    path: '',
    component: NotePage
  },
  {
    path: 'new-note',
    loadChildren: () => import('./new/new-note.module').then( m => m.NewNotePageModule)
  },
  {
    path: 'note-detail',
    loadChildren: () => import('./new-note/note-detail/note-detail.module').then( m => m.NoteDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotePageRoutingModule {}
