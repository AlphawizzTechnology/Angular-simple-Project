import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { SharedService } from 'app/shared-services/sharedServices.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { getServerPath } from '../shared/app.config';

@Component({
  selector: 'app-chargers',
  templateUrl: './chargers.component.html',
  styleUrls: ['./chargers.component.scss']
})
export class ChargersComponent implements OnInit {

  apiUrl = getServerPath();
  title: string = 'My first AGM project';
  lat: number = 28.4595;
  lng: number = 77.0266;
  public chargersList : any;
  public chargerstationlist: any[];
  public selectedItem : any = {
    index : 0
  }
  public filterSearch : String;
  constructor(private router: Router,public service:SharedService, private http: HttpClient) { }
  public getTitle;
  public loginUserData: any;

  ngOnInit() {

    this.loginUserData = JSON.parse(localStorage.getItem("AuthData"));
    this.service.updateScreenActivated('admin-chargers');
    this.getTitle = "Chargers";
    this.getChargersData();
    localStorage.rmoveItem("ChargerId")
  }

  getChargersData(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.loginUserData['auth-key']
      })
    }
    this.http.get(`${this.apiUrl}/chargerApi/ChargerStationList`, httpOptions).subscribe((data: any) => {
      if (data.Status == "200") {
        this.chargerstationlist = data.Data;
        this.selectRow(0);
      }
    });
  }

  EditCharger(Item){
    localStorage.setItem("ChargerId",Item._id)
    this.router.navigateByUrl('/admin/createstation');
  }

  selectRow(index){
    this.selectedItem = {
      index: index,
      item: this.chargerstationlist[index]
    }
  }

  AddNewStation() : void {
    this.router.navigateByUrl('/superadmin/createstation');
  }
}
