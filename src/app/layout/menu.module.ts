import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenuComponent} from "./menu/menu.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [MenuComponent],
  imports: [
      CommonModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatMenuModule,
      RouterModule
  ],
  exports: [
      MenuComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MenuModule { }
