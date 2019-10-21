import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppListService } from '../Shared/app-list.service';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.component.html',
  styleUrls: ['./app-list.component.css']
})
export class AppListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: AppListService) { }

  ngOnInit() {
    this.service.refreshList();
  }

}
