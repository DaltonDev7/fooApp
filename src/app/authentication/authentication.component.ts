import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  //atributos
  showViewRegistrar:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  changeView(){
    this.showViewRegistrar = !this.showViewRegistrar
  }

}

