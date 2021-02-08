import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  catalogData: Array<any>;
  location = [];
  showSubLocations: boolean;
  showSubCategories: boolean;
  showHome = true;
  breadCrumbData: Array<any>;
  breadBool: boolean;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    this.httpClient.get('assets/catalog.json').subscribe((data) => {
      console.log(data);
      this.catalogData = data['data']['locations'];
    });
    // this.location = [];
  }

  showCategory(data, bool) {
    console.log(data, bool);
    this.breadBool = bool;
    this.location = [];
    this.location = data;
    this.showSubLocations = bool;
    this.showHome = false;
    this.showSubCategories = false;
    this.breadCrumbData = data;
  }

  handleSubCategories(data) {
    console.log(data);
    this.location = [];
    this.location = data;
    this.showSubLocations = null;
    this.showSubCategories = true;
    this.showHome = false;
  }
}
