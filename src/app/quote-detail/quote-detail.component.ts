import { Component, Input, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {

  @Input() quote: Quote = new Quote(0, "", "", "", "", new Date);

  constructor() { }

  ngOnInit(): void {
  }

}