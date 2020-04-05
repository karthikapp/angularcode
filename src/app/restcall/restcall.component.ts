import { Component, OnInit } from '@angular/core';
import { restcall } from  '../restcalls.service'
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrls: ['./restcall.component.css']
})
export class RestcallComponent implements OnInit {
  public data : any;
  public searchtext : any;
  uploadedFiles: Array < File > ;
  public daysfilter: any;

  constructor(private restcall : restcall, private http: HttpClient) { }

  ngOnInit() {
    //  this.restcall.getalldata().subscribe((data) => {
    //   //  console.log(data)
    //    this.data = data
    //  })
    this.data = []
    this.daysfilter = 7
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
}

upload() 
{
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles.length; i++) {
        formData.append("uploads[]", this.uploadedFiles[i], this.uploadedFiles[i].name);
    }
    var requrls = 'http://localhost:3000/api/upload/' + this.daysfilter
    this.http.post(requrls, formData)
        .subscribe((response) => {
            // console.log('response received is ', response);
            alert("File Uploaded Succesfully")
            this.data = response
        })
}

}
