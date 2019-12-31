import { Component, OnInit, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SharedService } from 'app/shared-services/sharedServices.service';
import { getServerPath } from '../shared/app.config';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormControl, FormArray, FormGroupDirective, NgForm, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
export interface DialogData {
  ComplaintImagesList: any;
}

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.scss']
})
export class ComplaintComponent implements OnInit {
  public ComplaintDateData: FormGroup;
  apiUrl = getServerPath();
  constructor(private spinner: Ng4LoadingSpinnerService, private fb: FormBuilder, private router: Router, private http: HttpClient, private service: SharedService, public dialog: MatDialog) { }
  public ComplaintList: any = [];
  public defaultImg = "./assets/img/user-placeholder.jpg";

  ngOnInit() {
    this.GetComplaintList("new");
    this.ComplaintDateData = this.fb.group({
      'FromDate': ['', Validators.compose([Validators.required])],
      'ToDate': ['', Validators.compose([Validators.required])],
    });
  }

  filterComplaint(e) {
    console.log(e.value)
    this.GetComplaintList(e.value);
  }

  GetComplaintList(status) {
    this.spinner.show();
    this.http.post(`${this.apiUrl}/userapi/getregistercomplaint`, { status: status }).subscribe((data: any) => {
      if (data.Status == "200") {
        this.spinner.hide();
        this.ComplaintList = [];
        this.ComplaintList = data.Data;
      }
    }, error => {
      this.spinner.hide();
      console.log(error);
    })
  }

  openDelog(images): void {
    const dialogRef = this.dialog.open(ComplaintImages, {
      data: {
        images: images
      }
    });
    dialogRef.afterClosed().subscribe(result => {

    });
  }

  GetComplaintByDate(value) {
    if (this.ComplaintDateData.valid) {
      this.spinner.show();
      var Fromdate = new Date(value.FromDate);
      var Todate = new Date(value.ToDate);
      var FromDate = Fromdate.getFullYear() + "-" + (Fromdate.getMonth() + 1) + "-" + (Fromdate.getDate());
      var ToDate = Todate.getFullYear() + "-" + (Todate.getMonth() + 1) + "-" + (Todate.getDate());
      var jsonValue = {
        "todate": ToDate,
        "fromdate": FromDate,
      }
      this.http.post(`${this.apiUrl}/userapi/getregistercomplaint`, jsonValue).subscribe((res: any) => {
        if (res.Status == 200) {
          this.spinner.hide();
          this.ComplaintList = [];
          this.ComplaintList = res.Data;
          this.ComplaintDateData.reset();
        }
      }, error => {
        this.spinner.hide();
        console.log(error);
      })
    }
  }
}
// Dialog box
@Component({
  selector: 'ComplaintImages',
  templateUrl: 'ComplaintImages.html',
})
export class ComplaintImages {

  title: string = 'Complaint';
  imgArr: any = [];
  constructor(
    public dialogRef: MatDialogRef<ComplaintImages>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
  imagepath: any;

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.imagepath = "http://103.1.114.100/iotnode/uploads/complaint/";
    console.log("dialogData===", (<any>this.data).images)
    this.imgArr = (<any>this.data).images;
  }

}