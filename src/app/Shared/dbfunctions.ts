export class DBFunctions {

    GetList(table:string, filterColumn?:string, filterValue?:string){
        debugger;
        let result = [];
        if(!table){
            return result;
        }        
        
        var AppListJSON = localStorage.getItem( table + "JSON");
        if(!AppListJSON){
            return result
        }
        else{
            let res = JSON.parse(AppListJSON);
            if(filterColumn && filterValue){
                for(let i = 0;i< res.length;i++){
                    if(res[i][filterColumn] == filterValue){
                        result.push(res[i]);
                    }
                }
            }
            else{
                result = res;
            }
        }

        return result;
    }
}

/*

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

*/
