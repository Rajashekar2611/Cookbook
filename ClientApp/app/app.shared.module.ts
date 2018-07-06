import { cookbook } from './Models/cookbookInterface';
import { cookbookComponent } from './components/cookbook/cookbook.component';
import { LoaderService } from './services/loader.service';
import { ObjNgFor } from './components/app/common/validators/multiobject.pipe';
import { CookBook } from './services/cookbook.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import{ToastyModule} from 'ng2-toasty';
import{ToastrModule} from 'ngx-toastr';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { QuillModule } from 'ngx-quill'

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AuthService } from './services/auth.service';
import { RecipeListComponent } from './components/RecipeList/RecipeList.component';
import { RecipeComponent } from './components/Recipe/Recipe.component';

@NgModule({
    declarations: [
        AppComponent,
        NavMenuComponent,
        HomeComponent,
        cookbookComponent,
        ObjNgFor,
        RecipeListComponent,
        RecipeComponent

    ],
    imports: [
        CommonModule,
        HttpModule,
        FormsModule,
        ToastyModule.forRoot(),
        ToastrModule.forRoot(),
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),
        BrowserModule,
        QuillModule,
        ReactiveFormsModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: cookbookComponent },
            { path: 'Recipe-List', component: RecipeListComponent },
            { path: 'recipe/edit/:id', component: cookbookComponent },
            { path: 'recipe/:id', component: RecipeComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ],

    providers: [
        AuthService,
        CookBook,
        LoaderService

    ]
})
export class AppModuleShared {
}
