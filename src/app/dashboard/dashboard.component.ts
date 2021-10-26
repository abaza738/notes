import { Component, OnInit } from '@angular/core';
import { colorSets } from '@swimlane/ngx-charts';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  notes: any[] = [];
  scheme = colorSets[0];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((notes: any) => {
      this.notes = [
        {
          name: 'Tasks',
          value: notes.filter((n: any) => n.status == 'task').length
        },
        {
          name: 'Bugs',
          value: notes.filter((n: any) => n.status == 'bug').length
        },
        {
          name: 'Deferred',
          value: notes.filter((n: any) => n.status == 'deferred').length
        },
        {
          name: 'On Hold',
          value: notes.filter((n: any) => n.status == 'on-hold').length
        },
        {
          name: 'Solved',
          value: notes.filter((n: any) => n.status == 'solved').length
        }
      ];
    });
  }
}
