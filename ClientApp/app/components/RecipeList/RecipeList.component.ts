import { CookBook } from './../../services/cookbook.service';
import { cookbook } from './../../Models/cookbookInterface';
import { LoaderService } from './../../services/loader.service';
import { EmailValidators } from './../app/common/validators/email.validators';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import * as $ from 'jquery';
import { ModalEvent } from 'bootstrap';
import { ToastyService } from 'ng2-toasty';
import { ToastrService } from 'ngx-toastr';
import { Component, Input, OnInit, Output, EventEmitter, AfterViewInit } from '@angular/core';
import { QuillModule } from 'ngx-quill';


@Component({
  selector: 'app-RecipeList',
  templateUrl: './RecipeList.component.html',
  styleUrls: ['./RecipeList.component.css']
})
export class RecipeListComponent implements OnInit{
  public my_string: string;
  recipe:any={}

  constructor(private _fb: FormBuilder,
    private CookBook: CookBook,
    private toastyService: ToastyService,
    private toastrService:ToastrService,
    private loaderService: LoaderService) {
    this.CookBook = CookBook;
  }
  
  ngOnInit() {

    this.setrecipes();
  }

  private setrecipes(){
    this.loaderService.display(true);
    this.CookBook.Getallreceipes()
    .subscribe((res) => {
      this.loaderService.display(false);
      this.recipe = res;
    });
  }
}