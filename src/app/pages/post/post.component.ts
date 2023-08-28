import { Component } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {

  constructor(private serv:BlogService, private toasts:ToastrService, private act:ActivatedRoute, private rou:Router){

  }

  blog:any;
  getAllBlogs(){
    return this.serv.onGetBlogs().subscribe((data)=>{
      console.log(data);
      this.blog = data;
    })
  }

  ngOnInit(){
    this.getAllBlogs()
  }
  
  deleteBlog(id:any){
    this.serv.onDeleteBlogs(id).subscribe((data)=>{
      this.toasts.success("blog deleted successfully!")
      this.getAllBlogs();
    })
  }

 
  url="https://img.freepik.com/free-photo/image-icon-front-side-white-background_187299-40166.jpg?w=740&t=st=1691491068~exp=1691491668~hmac=82845ccb1cea6e854d7d522ae76e016a54da09c03013e06e9dba7daabde4933a";
  

  formsData = new FormGroup({
    blog_id: new FormControl(),
    blog_name: new FormControl(),
    blog_disc: new FormControl(),
    blog_date: new FormControl(),
    blog_author: new FormControl(),
    blog_category: new FormControl(),
    blog_img:new FormControl()
  }
  )

  addNewBlog(){
    this.serv.onAddBlogs(this.formsData.value).subscribe((data)=>{
      console.log(data);
      this.toasts.success("Blog Added Successfully!");
      this.formsData.reset();
      this.url="https://img.freepik.com/free-photo/image-icon-front-side-white-background_187299-40166.jpg?w=740&t=st=1691491068~exp=1691491668~hmac=82845ccb1cea6e854d7d522ae76e016a54da09c03013e06e9dba7daabde4933a";
   })
  }


 
 
  onFileSelected(e:any){
    if(e.target.files){
        let reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload=(event:any)=>{
          this.url= event.target.result;  
        }
    }
  }

 
 

}
