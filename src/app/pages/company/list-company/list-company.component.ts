import {Component, OnInit} from '@angular/core';
import {Company} from "../../../shared/model/company";
import {MatTableDataSource} from "@angular/material/table";
//import {CompanyFirestoreService} from "../../../shared/services/company-firestore.service";
import {Observable} from "rxjs";
import Swal from "sweetalert2";
import {CompanyService} from "../../../shared/company.service";

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit {

  dataSource = new MatTableDataSource<Company>;
  columnsToDisplay:Array<string> = ["name","phone","address","manager","status","action"];

  ngOnInit() {
    this.list();
  }

  constructor(private companyService: CompanyService) {

  }

  filter(event: Event){
    this.dataSource.filter = (event.target as HTMLInputElement).value;
  }

  list() {
    this.companyService.list().subscribe(
      company => this.dataSource = new MatTableDataSource(company)
    );
  }

  delete(id:number){
    // Swal.fire({
    //   title: 'Confirm Deletion',
    //   text: "Delete this item?",
    //   icon: 'warning',
    //   showCancelButton: false,
    //   confirmButtonColor: 'red',
    //   cancelButtonColor: 'grey',
    //   confirmButtonText: 'Delete'
    // }).then((result) => {
      this.companyService.delete(id).subscribe({
        next: () => {
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: 'Company deleted from database!',
            showConfirmButton: false,
            timer: 2000
          })
          this.list();
        },
        error: (error) => {
          console.error(error)
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Something went wrong...',
          })
        }
      })
  }
}
