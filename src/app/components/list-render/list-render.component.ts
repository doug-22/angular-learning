import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals = [
    {
      name: "Tom",
      type: "Cat"
    },
    {
      name: "Bob",
      type: "Dog"
    },
    {
      name: "Hulk",
      type: "Dog"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
