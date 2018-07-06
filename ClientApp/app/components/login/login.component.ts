import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {ModalEvent} from  'bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
      $('#myModal').modal();
  }

}
