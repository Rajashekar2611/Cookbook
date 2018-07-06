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
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-Recipe',
  templateUrl: './Recipe.component.html',
  styleUrls: ['./Recipe.component.css']
})
export class RecipeComponent implements OnInit{
  public my_string: string;
  recipe:any={}
  id:number;

  constructor(private _fb: FormBuilder,
    private CookBook: CookBook,
    private toastyService: ToastyService,
    private toastrService:ToastrService,
    private loaderService: LoaderService,
    private route:ActivatedRoute,
    private router:Router) {
    this.CookBook = CookBook;
    route.params.subscribe(p => {
      this.id= +p['id'];
      if(isNaN(this.id) || this.id <= 0){
       router.navigate(['/Recipe-List']) ;
       return;
      }
    });
  }
  
  ngOnInit() {
this.setrecipes(this.id);
  }

  private setrecipes(id){
    this.loaderService.display(true);
    this.CookBook.Getreceipes(this.id)
    .subscribe((res) => {
      this.loaderService.display(false);
      this.recipe = res;
    });
  }
}