import { Injectable } from '@angular/core';
import { AppList } from './app-list.model';
import { AppField } from './app-field.model';

import { DBFunctions } from './dbfunctions';

@Injectable({
  providedIn: 'root'
})
export class AppListService {

  db : DBFunctions;
  appList : AppList[] = [];

  appListItem : AppList;
  
  appFieldList : AppField[] = [];
  appFieldItem : AppField;
  
  constructor() {
    this.db = new DBFunctions();
    //this.db.GetList('AppList', 'AppFieldID', '1') ;
   }

  refreshList(){
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

  refreshField(id : number ){

    if(id == -1){
      this.appFieldItem  = new AppField;    
    }
    else{    
      var AppFieldJSON = localStorage.getItem("AppFieldJSON");
      let filedList = JSON.parse(AppFieldJSON);
      for(let i = 0;i< filedList.length;i++){
        if(filedList.AppFieldID == id){
          this.appFieldItem =  filedList[i];            
          break;         
        }
      } 
    }      
  }
  s

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
      
      if(!this.appFieldList){
        this.appFieldList = [];
      } 

      let appField = new AppField();
      appField.FieldOrder = this.appFieldList.length + 1;
      this.appFieldList.push(appField); 
  }

  deleteField(field : AppField){

    for(let i = 0;i< this.appFieldList.length;i++){
      if(this.appFieldList[i].AppFieldID == field.AppFieldID){
        this.appFieldList.splice(i,1);
        //var listJSON = JSON.stringify(this.appList); 
        //localStorage.setIte("AppListJSON", listJSON);
        //this.refreshList();         
        break;         
      }
    }   

    if(field.AppFieldID){

    }
    else{

    }

  }

}
