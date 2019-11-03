import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppListService } from '../Shared/app-list.service';

@Component({
  selector: 'app-list-config',
  templateUrl: './list-config.component.html',
  styleUrls: ['./list-config.component.css']
})
export class ListConfigComponent implements OnInit {

  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: AppListService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      if(params['id']){        
        this.id = params['id']; 
      } else {      
        this.id = -1; 
      }

      this.service.refreshListConfig(this.id);
       
    });
  }

  addItem(){    
    this.service.AddListItem(this.service.appListItem);    
    this.router.navigate(['']);
  }

   DeleteListItem(id: number) {
      if (confirm('Are you sure to delete this record?')) {
        this.service.DeleteListItem();
        this.router.navigate(['']);
      }
  }

  goBack(){
    this.router.navigate(['']);
  }

  deleteField(){
    //this.service.deleteField();
  }
 
}
