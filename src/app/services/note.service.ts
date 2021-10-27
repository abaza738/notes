import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Note } from '../models/note';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  constructor(private http: HttpClient) {}

  getNotes = () => {
    return this.http.get(`${environment.api}/note`);
  };

  getNote = (id: number) => {
    return this.http.get(`${environment.api}/note/${id}`);
  };

  addNote = (note: Note) => {
    return this.http.post(`${environment.api}/note`, { note: note });
  };

  editNote = (note: Note) => {
    return this.http.put(`${environment.api}/note`, { note: note });
  };

  deleteNote = (id: number) => {
    return this.http.delete(`${environment.api}/note/${id}`);
  };
  
}

export const StatusIcons: {[index: string]: any} = {
  'bug': 'bug_report',
  'task': 'circle',
  'solved': 'check_circle',
  'on-hold': 'hourglass_top',
  'deferred': 'forward'
}