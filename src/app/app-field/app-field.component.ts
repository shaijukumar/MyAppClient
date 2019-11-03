import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppListService } from '../Shared/app-list.service';

@Component({
  selector: 'app-app-field',
  templateUrl: './app-field.component.html',
  styleUrls: ['./app-field.component.css']
})
export class AppFieldComponent implements OnInit {
  id: number;
  listId:number;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: AppListService) { }

  ngOnInit() { 
    this.sub = this.route.params.subscribe(params => {
      //debugger;
      if(params['id']){        
        this.id = params['id']; 
      } else {      
        this.id = -1; 
      }

      if(params['listId']){        
        this.listId = params['listId']; 
      } else {      
        this.listId = -1; 
      }

      this.service.refreshField(-1);
      
    });
  }

  addItem(){

  }

  goBack(){
    this.router.navigate(['/ListConfig/' + this.listId ]);
  }

  DeleteListItem(id:Number){
      
  }

  addNewField(){
    this.service.addNewField();
  }

  
}
