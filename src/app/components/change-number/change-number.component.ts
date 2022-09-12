import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-change-number',
  templateUrl: './change-number.component.html',
  styleUrls: ['./change-number.component.css']
})
export class ChangeNumberComponent implements OnInit {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter()
  @Output() sendData: EventEmitter<any> = new EventEmitter()

  lista: Array<Object> = [
    {
      name: "Douglas",
      age: 23
    },
    {
      name: "Lia",
      age: 24
    },
    {
      name: "Estella",
      age: 18
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.changeNumber.emit()
    this.enviarDados()
  }

  enviarDados() {
    this.sendData.emit(this.lista[Math.floor(Math.random() * this.lista.length)])
  }

}
