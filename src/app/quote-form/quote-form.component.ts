import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  newQuote = new Quote(0, "", "", "", "", new Date, 0, 0);
  @Output() addQuote = new EventEmitter<Quote>(); 

   submitQuote(){
  let me =  this.addQuote.emit(this.newQuote);
  alert('Thankyou for Adding a new Quote.')
  }
  
  


  constructor() { }

  ngOnInit(): void {
  }

}
