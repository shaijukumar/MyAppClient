import { Injectable } from '@angular/core';
import { AppList } from './app-list.model';
import { AppField } from './app-field.model';

@Injectable({
  providedIn: 'root'
})
export class AppListService {
  appList : AppList[] = [];

  appListItem : AppList;
  appFieldList : AppField[] = [];

  
  constructor() { }

  refreshList(){debugger
    var AppListJSON = localStorage.getItem("AppListJSON");
    console.log(AppListJSON);
    if(AppListJSON){
      this.appList = JSON.parse(AppListJSON);
    }    
  }

refreshListConfig(id : number ){

  if(id == -1){
    this.appListItem  = new AppList;    
  }
  else{    
    var AppListJSON = localStorage.getItem("AppListJSON");
    this.appList = JSON.parse(AppListJSON);
    for(let i = 0;i< this.appList.length;i++){
     if(this.appList[i].AppListID == id){
       this.appListItem =  this.appList[i];    
       
       var AppFieldJSON = localStorage.getItem("AppFieldJSON");
       console.log(AppFieldJSON);
       if(!AppFieldJSON){
        this.appFieldList = JSON.parse(AppFieldJSON);
       }
       
       break;         
     }
    } 
  }      
}



updateField(field : AppField){
  debugger;
  if(field.AppFieldID){
    
  }
  else{
    this.refreshListConfig(field.AppFieldID);
    if(this.appFieldList.length == 0){
      field.AppFieldID = 1;
    }
    else{     
      field.AppFieldID =  this.appFieldList[this.appFieldList.length - 1].AppFieldID + 1  ;       
    }        
    this.appFieldList.push(field); 
  }
  var fieldJSON = JSON.stringify(this.appList); 
  console.log(fieldJSON);
  localStorage.setItem("AppFieldJSON", fieldJSON);
}

AddListItem( listItem : AppList ){
  

 if(listItem.AppListID){
   
 }
 else{
    this.refreshList();
    debugger;
    listItem.AppListID =  this.appList[this.appList.length - 1].AppListID + 1  ; 
    debugger;      
    this.appList.push(listItem);            
 }    
 var listJSON = JSON.stringify(this.appList); 
 console.log(listJSON);
 localStorage.setItem("AppListJSON", listJSON);
}

 DeleteListItem(){    
   //let id : number = this.appListItem.AppListID;
   debugger;
   this.refreshList();
   for(let i = 0;i< this.appList.length;i++){
     if(this.appList[i].AppListID == this.appListItem.AppListID){
       this.appList.splice(i,1);
       var listJSON = JSON.stringify(this.appList); 
       localStorage.setItem("AppListJSON", listJSON);
       //this.refreshList();         
       break;         
     }
   }    
 }

 addNewField(){
   console.log('showNewField');
    let appField = new AppField();
    if(!this.appFieldList){
      this.appFieldList = [];
    }   
    this.appFieldList.push(appField); 
 }


}
