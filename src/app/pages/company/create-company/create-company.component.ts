import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {CompanyService} from "../../../shared/company.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Company} from "../../../shared/model/company";
import Swal from 'sweetalert2';
//import {CompanyFirestoreService} from "../../../shared/services/company-firestore.service";

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.scss']
})
export class CreateCompanyComponent implements OnInit{

  formGroup: FormGroup;
  update;
  constructor(private companyService: CompanyService, private router: Router, private route: ActivatedRoute) {
    this.formGroup = new FormGroup({
      id: new FormControl(null),
      name: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      manager: new FormControl(''),
      status: new FormControl(true)
    });
    this.update = false;
  }

  ngOnInit() {
    if (this.route.snapshot.params["id"]){
      this.update = true;
      this.companyService.getById(this.route.snapshot.params["id"]).subscribe(
          company => {(
                this.formGroup.patchValue(company)
          )}
      )
    }
  }

  createCompany(){
    const company: Company = this.formGroup.value;
    if (this.update){
      //Update mode
      this.companyService.update(company).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success',
            text: 'Company updated!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigate(['/company']);
        },
        error: (error) => {
          console.error(error);
          Swal.fire({
            title: 'Update error',
            text: 'Something went wrong...',
            icon: 'error'
          });
        }
      });
    } else {
      // Create mode
      this.companyService.insert(company).subscribe({
        next: () => {
          Swal.fire({
            title: 'Success',
            text: 'Company created!',
            icon: 'success',
            showConfirmButton: false,
            timer: 2000
          })
          this.router.navigate(['/company']);
        },
        error: (error) => {
          console.error(error);
          Swal.fire({
            title: 'Error',
            text: 'Something went wrong...',
            icon: 'error'
          });
        }
      });
    }
  }
}
