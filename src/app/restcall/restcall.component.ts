import { Component, OnInit } from '@angular/core';
import { restcall } from  '../restcalls.service'

@Component({
  selector: 'app-restcall',
  templateUrl: './restcall.component.html',
  styleUrls: ['./restcall.component.css']
})
export class RestcallComponent implements OnInit {
  public data : any;
  public searchtext : any;

  constructor(private restcall : restcall) { }

  ngOnInit() {
     this.restcall.getalldata().subscribe((data) => {
       console.log(data)
       this.data = data
     })
  }

}
