import { Component, Input, OnInit } from '@angular/core';
import { Note } from '../models/note';
import { StatusIcons } from '../services/note.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  icon: any = '';

  @Input() note: any;

  constructor() {
  }
  
  ngOnInit(): void {
    this.icon = StatusIcons[this.note.status];
  }

}
