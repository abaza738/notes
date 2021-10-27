import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'notes';
  links: any[] = [
    {
      icon: 'dashboard',
      label: 'Dashboard',
      link: 'dashboard'
    },
    {
      icon: 'sticky_note_2',
      label: 'Notes',
      link: 'notes'
    }
  ];
}
