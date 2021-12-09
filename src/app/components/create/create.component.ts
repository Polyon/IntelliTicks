import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PropertyService } from 'src/app/services/property.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  PropertyForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    size: new FormControl(),
    remove: new FormControl()
  })

  constructor(private _PropertyService: PropertyService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.PropertyForm.value.remove= true;
    this._PropertyService.setDataList(this.PropertyForm.value);
  }
}

