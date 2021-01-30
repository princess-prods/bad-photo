import { KeyValue } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public socials: KeyValue<string, string>[] = [
    { key: 'fa-instagram', value: 'https://instagram.com/_bad_photographer' },
    { key: 'fa-twitter', value: 'https://twitter.com/princess_prods' },
    { key: 'fa-500px', value: 'https://500px.com/princessprods' },
    { key: 'fa-reddit-alien', value: 'https://reddit.com/u/princessprods'}
  ];

  sexyJobsUrl = 'https://www.sexyjobs.com/jobs/hardcore-porn/E93163';
  pornhubUrl = 'https://www.pornhub.com/model/badphotographer';
}
