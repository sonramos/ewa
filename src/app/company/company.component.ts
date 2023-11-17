import { Component } from '@angular/core';
import {Company} from "../shared/model/company";

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent {
  constructor() {  }

  companies!:Array<Company>;

  ngOnInit(){
  }

  displayColumns:Array<string>=["id","name","phone","address","manager","isActive","action"];
}
