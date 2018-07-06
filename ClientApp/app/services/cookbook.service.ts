import { cookbook } from './../Models/cookbookInterface';
import { BrowserModule } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import * as $ from 'jquery';
import {ModalEvent} from  'bootstrap';
import { Http,Headers, RequestOptions,Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CookBook {
  private readonly url = '/api/cookbook/';
  constructor(private Http: Http) { }

  private requestOptions() {
    const headers = new Headers({ 'Content-type': 'application/json' });
    return new RequestOptions({ headers: headers });
  }

  create(cookbook:cookbook) {
       return this.Http.post(this.url + 'CreateRecipe',JSON.stringify(cookbook), this.requestOptions());
  }

  update(cookbook:cookbook) {
       return this.Http.put(this.url + cookbook.id,cookbook, this.requestOptions());
  }

  Getallreceipes() {
    const headers= new Headers({'content-type':'application/json'});
    const options = new RequestOptions({headers:headers});
    return this.Http.get(this.url + 'getrecipes', options)
    .map(res => res.json());
  }

  Getreceipes(id) {
    const headers= new Headers({'content-type':'application/json'});
    const options = new RequestOptions({headers:headers});
  return this.Http.get(this.url + id, options)
    .map(res => res.json());
  }
}
