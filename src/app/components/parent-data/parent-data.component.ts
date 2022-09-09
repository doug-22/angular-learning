import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name: string = '';
  data = {
    name: 'Douglas Oliveira',
    email: 'douglas@gmail.com'
  }

  constructor() { }

  ngOnInit(): void {
  }

}
