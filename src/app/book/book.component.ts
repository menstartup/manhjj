import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  data = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 1'
    },
    {
      id: 2,
      img: 'https://images.pexels.com/photos/2223082/pexels-photo-2223082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'item 2'
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 3'
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 4'
    },
  ]
  
  updateData = [
    {
      id: 1,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 1'
    },
    {
      id: 2,
      
      img: 'https://images.pexels.com/photos/2223082/pexels-photo-2223082.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
      title: 'item2'
    },
    {
      id: 3,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 3'
    },
    {
      id: 4,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 4'
    },
    {
      id: 5,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 5'
    },
    {
      id: 6,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 6'
    },
    {
      id: 7,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 7'
    },

    {
      id: 8,
      img: 'https://images.pexels.com/photos/2246822/pexels-photo-2246822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      title: 'item 8'
    },
    

  ]

  constructor() { }

  ngOnInit() {
  }

}
