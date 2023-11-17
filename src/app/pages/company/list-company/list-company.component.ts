import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Company} from "../../../shared/model/company";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator, PageEvent} from "@angular/material/paginator";
import {CompanyService} from "../../../shared/company.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements AfterViewInit {

  dataSource = new MatTableDataSource<Company>;
  columnsToDisplay:Array<string> = ["id","name","phone","address","manager","status","action"];

  @ViewChild(MatPaginator) paginator !: MatPaginator;

  ngAfterViewInit() {
    this.listCompanies(1,5);
  }

  constructor(private companyService: CompanyService) {  }

  listCompanies(page: number, pageSize: number){
    this.companyService.pagedList(page,pageSize).subscribe(
      companies => {
        // @ts-ignore
        this.dataSource.data = companies;
      }
    )
  }

  onPageChange(event: PageEvent) {
    const pageIndex = event.pageIndex+1;
    const pageSize = event.pageSize;
    this.listCompanies(pageIndex,pageSize);
  }

  deleteCompany(id:number){
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
          this.listCompanies(1, 5)
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
  //)}
}
