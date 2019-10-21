import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppListService } from '../Shared/app-list.service';

@Component({
  selector: 'app-app-list-item',
  templateUrl: './app-list-item.component.html',
  styleUrls: ['./app-list-item.component.css']
})
export class AppListItemComponent implements OnInit {
  id: number;
  private sub: any;

  constructor(private route: ActivatedRoute, private router: Router, private service: AppListService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {

      if(params['id']){
        console.log(params['id']);
        this.id = params['id']; 
      } else {
        console.log('id not found in params')
        this.id = -1; 
      }

      //this.service.refreshListItem(this.id);
       
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

}
