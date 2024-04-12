import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {
    customerName: string;
  customerAddress: string;
  customerPhone: string;
  bikeNumber: string;
  serviceDate: string; 
  submitted: boolean = false;
  customerInfo: any[] = [];

    constructor() {
    this.customerName = '';
    this.customerAddress = '';
    this.customerPhone = '';
    this.bikeNumber = '';
    this.serviceDate = ''; 
  }

  ngOnInit() {
    const storedCustomerInfo = localStorage.getItem('customerInfo');
    if (storedCustomerInfo) {
      this.customerInfo = JSON.parse(storedCustomerInfo);
    }
  }

  submitForm() {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString(); // Change to only date
    const newCustomer = {
      name: this.customerName,
      address: this.customerAddress,
      phone: this.customerPhone,
      bikeNumber: this.bikeNumber,
      serviceDate: this.serviceDate,
      date: formattedDate
    };
    this.customerInfo.push(newCustomer);
    localStorage.setItem('customerInfo', JSON.stringify(this.customerInfo));
    this.submitted = true;
  
    // Clear input fields after submission
    this.customerName = '';
    this.customerAddress = '';
    this.customerPhone = '';
    this.bikeNumber = '';
  }
  

  isFormValid(): boolean {
    return !!(this.customerName && this.customerAddress && this.customerPhone && this.bikeNumber && this.serviceDate)
  }
}
