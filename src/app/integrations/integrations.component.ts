import { Component, OnInit } from '@angular/core';
import { restcall } from '../restcalls.service'

@Component({
  selector: 'app-integrations',
  templateUrl: './integrations.component.html',
  styleUrls: ['./integrations.component.css']
})
export class IntegrationsComponent implements OnInit {
  public apilists : any[];
  public apiname : String;
  constructor(private restcall : restcall) { }

  ngOnInit() {
    this.apilists = [];
    this.apiname = ""
  }

  onsubmit(apiname)
  {
    if (apiname == "") {
      alert("Oops, API name can not be empty, Please add an API name")
    }
    else 
    {
      var date = new Date()
      var apiobject = { apiname : apiname, date : date}
      this.apilists.push(apiobject)
    }
    
  }

  onclickapicall(apiname)
  {
    this.restcall.getapicall(apiname).subscribe((data: any) => {
      console.log(data)
      var resulttext = data.apiname
      var alerttext = "data from api " + resulttext
      alert(alerttext)
    })
  }

}
