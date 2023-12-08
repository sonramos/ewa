export class Company {
  id?: string;
  name: string;
  phone: string;
  address: string;
  manager: string;
  status: boolean;

  constructor(id?: string, company: Company = {name: '', phone: '',address: '',manager:'',status:false}) {
    this.id = id;
    this.name = company.name;
    this.phone = company.phone;
    this.address = company.address;
    this.manager = company.manager;
    this.status = company.status;
  }
}

