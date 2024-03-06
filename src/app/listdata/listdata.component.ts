import { Component ,Input} from '@angular/core';
import{Todo}from'../model/listmodel'
import { DataserviceService } from '../dataservice.service';
import { ListComponent } from '../list/list.component';
@Component({
  selector: 'app-listdata',
  standalone: true,
  imports: [ListComponent],
  templateUrl: './listdata.component.html',
  styleUrl: './listdata.component.scss',

})
export class ListdataComponent {
  

  

  constructor(public todoService: DataserviceService) { 
    
  }
  mgOnInit() {  
   
    }  
  isFavorite() {
    
    
    
  }
}
