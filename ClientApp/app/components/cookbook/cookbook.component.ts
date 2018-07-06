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
  selector: 'app-cookbook',
  templateUrl: './cookbook.component.html',
  styleUrls: ['./cookbook.component.css']
})
export class cookbookComponent implements OnInit{
  public my_string: string;
  recipe:any={}

  constructor(private _fb: FormBuilder,
    private CookBook: CookBook,
    private toastyService: ToastyService,
    private toastrService:ToastrService,
    private loaderService: LoaderService,
    private route:ActivatedRoute,
    private router:Router) {
    this.CookBook = CookBook;
    route.params.subscribe(p => {
      this.recipe.id= +p['id'] || 0;
    });
  }

  ngOnInit() {
    this.setrecipes(this.recipe.id);
      }
    
      private setrecipes(id){
        this.CookBook.Getreceipes(this.recipe.id)
        .subscribe((res) => {
          this.recipe = res;
        });
      }
  
  submit() {
    this.loaderService.display(true);
    var result$=(this.recipe.id) ? this.CookBook.update(this.recipe):this.CookBook.create(this.recipe);
    result$.subscribe(
        x => {
          this.loaderService.display(false);
          this.toastyService.success({
            title: 'Success',
            msg: 'Data successfully saved',
            theme: 'bootstrap',
            showClose: true,
            timeout: 7000
          });
        },
        err => {
          this.loaderService.display(false);
          console.log(err);
          this.toastyService.error({
            title: 'Error',
            msg: 'Please check the required fields.',
            theme: 'bootstrap',
            showClose: true,
            timeout: 8000
          });
        });
        this.router.navigate(['/recipe/',this.recipe.id])
  }

}