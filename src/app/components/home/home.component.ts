import { Component, OnInit } from '@angular/core';
import { PropertyService } from 'src/app/services/property.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _PropertyService: PropertyService) { 
    console.log(this.data);
  }

  public data: any = this._PropertyService.getDataList();
  

  ngOnInit(): void {
  }

  remove(flag: any){
    this.data[flag].remove= false;
    this._PropertyService.setDataList(this.data);
  }

}
