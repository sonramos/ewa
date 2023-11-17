import { NgModule } from '@angular/core';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatIconModule} from "@angular/material/icon";




@NgModule({
  declarations: [],
  // imports: [
  //   MatFormFieldModule,
  //   MatInputModule,
  //   MatTableModule,
  //   MatButtonModule,
  //   MatPaginatorModule,
  //   MatSortModule,
  //   MatDialogModule,
  //   MatCheckboxModule
  // ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatCheckboxModule,
    MatIconModule
  ]
})
export class MaterialModule { }
