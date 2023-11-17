import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateCompanyComponent} from "./pages/company/create-company/create-company.component";
import {ListCompanyComponent} from "./pages/company/list-company/list-company.component";

const routes: Routes = [
  {
    path: 'company',
    children: [
      {
        path: '',
        component: ListCompanyComponent
      },
      {
        path: 'create',
        component: CreateCompanyComponent
      },
      {
        path: 'update/:id',
        component: CreateCompanyComponent
      },
    ]
  },
  {
    path: '',
    component: ListCompanyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
