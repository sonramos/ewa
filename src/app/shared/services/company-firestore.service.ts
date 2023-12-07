import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from "@angular/fire/compat/firestore";
import {Company} from "../model/company";
import {from, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyFirestoreService {

  companyCollection: AngularFirestoreCollection<Company>;
  COLLECTION_NAME = 'companies';

  constructor(private afs: AngularFirestore) {
    this.companyCollection = afs.collection(this.COLLECTION_NAME);
  }

  list(): Observable<Company[]> {
    return this.companyCollection.valueChanges({idField: 'id'});
  }

  insert(company: Company): Observable<object>{
    delete company.id;
    return from(this.companyCollection.add(Object.assign({},company)));
  }
}
