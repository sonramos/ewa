import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "../../shared/material/material.module";
import { CreateCompanyComponent } from './create-company/create-company.component';
import {ListCompanyComponent} from "./list-company/list-company.component";
import {PipesModule} from "../../shared/pipes/pipes.module";


@NgModule({
  declarations: [
    CreateCompanyComponent,
    ListCompanyComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    HttpClientModule,
    MaterialModule,
    NgxMaskDirective,
    NgxMaskPipe,
    PipesModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [provideNgxMask()],
  exports: [
    CreateCompanyComponent,
    ListCompanyComponent
  ]
})
export class CompanyModule { }
