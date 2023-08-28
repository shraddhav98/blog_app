import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  constructor(private serv:BlogService, private toasts: ToastrService, private act:ActivatedRoute, private rou:Router){
    
  }

  catData:any;
  editMode:boolean = false;
  editUserID:any;
  getCatData(){
    return this.serv.getCategoryDetails().subscribe((data)=>{
      console.log(data);
      this.catData = data;
    })
  }

formsData = new FormGroup({
  cat_id: new FormControl(),
  cat_name:new FormControl()
})


addCategory(){
 if(this.editMode){
   
    this.serv.onUpdateCategory(this.editUserID, this.formsData.value).subscribe((data)=>{
      console.log(data);
      this.toasts.success("Category Updated Successfully!")
      this.formsData.reset();
      this.getCatData();
    })
    this.editMode=false;
   
    
 }
 else{
  this.serv.onAddCategory(this.formsData.value).subscribe((data)=>{
    console.log(data);
   this.toasts.success("Category Added Successfully!")
    this.formsData.reset();
    this.getCatData();
  })
 }
}


deleteCategory(id:any){
  this.serv.onDeleteCategory(id).subscribe((data)=>{
    this.toasts.success("Category Deleted Successfully!")
    this.getCatData();
  })
}


updateCategory(id:any, index:any){
  console.log(id)
  console.log(this.catData[index]);
  this.editMode=true;
  this.formsData.setValue({
    cat_id: this.catData[index].cat_id,
    cat_name: this.catData[index].cat_name
  })

 this.editUserID=id;

}

  ngOnInit(){
    this.getCatData();
  }


}
