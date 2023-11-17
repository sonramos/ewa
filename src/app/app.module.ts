import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./shared/material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {CompanyModule} from "./pages/company/company.module";
import {MenuModule} from "./layout/menu.module";
import {PipesModule} from "./shared/pipes/pipes.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
    NgbModule,
    CompanyModule,
    MenuModule,
    PipesModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
