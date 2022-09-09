import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-data',
  templateUrl: './child-data.component.html',
  styleUrls: ['./child-data.component.css']
})
export class ChildDataComponent implements OnInit {
  //A exclamação indica que apesar de nõ ter inicializado com nenhum dado, o mesmo vai chegar em algum momento
  @Input() data!: {
    name: string,
    email: string
  }

  constructor() { }

  ngOnInit(): void {
  }

}
