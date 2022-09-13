import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/services/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    {
      name: "Tom",
      type: "Cat",
      age: 1
    },
    {
      name: "Bob",
      type: "Dog",
      age: 2
    },
    {
      name: "Hulk",
      type: "Dog",
      age: 3
    }
  ]

  animalDetails = ""

  constructor(
    private listService: ListService
  ) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal) {
    this.animalDetails = `O pet ${animal.name} tem ${animal.age} anos`
  }

  removeAnimal(animal: Animal) {
    console.log("Remevendo animal...");
    this.animals = this.listService.remove(this.animals, animal);
  }

}
