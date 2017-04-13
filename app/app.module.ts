import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {ProductFilterPipe} from "./product/product-list.pipe";
import {StarComponent} from "./shared/star.component";
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import {ProductListComponent} from './product/product-list.component'
import {WelcomeComponent} from './home/welcome.component';
import {ProductDetailComponent} from './product/product-detail.component';

@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule,
        RouterModule.forRoot([
            { path: 'products', component: ProductListComponent },
            { path: 'product/:id', component: ProductDetailComponent },
            { path: 'welcome', component: WelcomeComponent },
            {path: '', redirectTo:'welcome', pathMatch:'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ])],
    declarations: [AppComponent,
        WelcomeComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductFilterPipe, StarComponent    ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
