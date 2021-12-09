import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  private _propertyData : any = [];
  constructor() { }

  getDataList(){
    let dataList = this._propertyData;
    return dataList;
  }

  setDataList(data: any){
    let newData = data;
    this._propertyData.push(data);
    console.log(data);
  }
}
