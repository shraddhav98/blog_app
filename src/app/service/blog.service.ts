import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http:HttpClient) { }


  //for category

  getCategoryDetails(){
    return this.http.get('http://localhost:3600/cat')
  }

  onAddCategory(formdata:any){
   return this.http.post("http://localhost:3600/catAdd", formdata);
  }

  onDeleteCategory(id:any){
    return this.http.delete(`http://localhost:3600/catDelete/${id}`);
  }

  onUpdateCategory(id:any, formdata:any){
    return this.http.put(`http://localhost:3600/catUpdate/${id}`,formdata)
  }



  //for blogs
  onGetBlogs(){
    return this.http.get("http://localhost:3600/getBlogs")
  }

  onAddBlogs(formdata:any){
    return this.http.post("http://localhost:3600/addBlogs", formdata);
  }

  onDeleteBlogs(id:any){
    return this.http.delete(`http://localhost:3600/deleteBlogs/${id}`);
  }

  getCurrentData(id:any){
    return this.http.get(`http://localhost:3600/getBlogs/${id}`);
  }

  onUpdateBlogs(id:any, formdata:any){
    return this.http.put(`http://localhost:3600/updateBlogs/${id}`, formdata)
  }

  //for Subscribers

  onGetSubscribers(){
    return this.http.get("http://localhost:3600/getSubscriber");
  }

  onDeleteSubsciber(id:any){
    return this.http.delete(`http://localhost:3600/deleteSubscriber/${id}`)
  }

  //for 

}
