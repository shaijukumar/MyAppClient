import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppListService } from '../Shared/app-list.service';

@Component({
  selector: 'app-app-list-details',
  templateUrl: './app-list-details.component.html',
  styleUrls: ['./app-list-details.component.css']
})
export class AppListDetailsComponent implements OnInit {
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

      //this.service.refreshListItem(this.id);
       
    });
  }

}
