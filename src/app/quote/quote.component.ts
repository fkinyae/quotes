import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes: Quote[] = [
    new Quote(1,  'Lions and Hunting', 'Until the lions have their own historians, the history of the hunt will always glorify the hunter', 'Chinua Achebe', 'Armando Broja' , new Date(2020,6,12), 0, 0 ),

    new Quote (2, 'Humans and Reality',  'Its funny how humans can wrap their mind around things and fit them into their version of reality.', 'Rick Riordan', 'Spinazzola Fozza' , new Date(2021,3,10), 0, 0),

    new Quote(3, 'Love And Compassion', 'Love and compassion are necessities, not luxuries. Without them, humanity cannot survive.', ' Dalai Lama XIV', 'Dani Chalobah', new Date(2021,4,5), 0, 0),

    new Quote(4, 'Man And Anxieties', 'Man is not worried by real problems so much as by his imagined anxieties about real problems', 'Epictetus', 'Billy Gilmour', new Date(2021,9,11), 0, 0),

    new Quote(5, 'History And Future', 'History should not be just a light to the past but a signal light to the future.', 'Sijin Bt', 'Danny Musonda', new Date(2021,7,3), 0, 0),

  new Quote(5, 'Man And Inhumanity', 'I am constantly amazed by mans inhumanity to man.', 'Primo Levi', 'Tino Livramento',new Date(2020,8,2), 0, 0),
  ];

  addNewQuote(quote:any) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    this.quotes.push(quote);
  }
 

  constructor() { }

  ngOnInit(): void {
  }

}

