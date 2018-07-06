import { LoaderService } from './services/loader.service';
import { CookBook } from './services/cookbook.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModuleShared } from './app.shared.module';
import { AppComponent } from './components/app/app.component';
import { AuthService } from './services/auth.service';
import { HttpModule } from '@angular/http';
import { ToastyModule } from 'ng2-toasty';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { QuillModule } from 'ngx-quill';



@NgModule({
    bootstrap: [ AppComponent ],
    imports: [
        HttpModule,
        ServerModule,
        FormsModule,
        AppModuleShared,
        FroalaEditorModule.forRoot(), 
        FroalaViewModule.forRoot(),
        ToastyModule.forRoot(),
        QuillModule
        
        
    ],
    
    providers: [
        AuthService,
        CookBook,
        LoaderService
    ]

})
export class AppModule {
}
