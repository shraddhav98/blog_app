import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BlogService } from 'src/app/service/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent {
  constructor(private serv:BlogService, private toasts: ToastrService){

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
    

  //   }
  // onFileSelected(event: any) {
  //   this.selectedFile = event.target.files[0];
  //   this.previewImage();
  // }

  // previewImage() {
  //   const reader = new FileReader();
  
  //   reader.onload = (event: any) => {
  //     this.url = event.target.result;
  //   };
  
  //   reader.readAsDataURL(this.selectedFile);
  // }


  
  }


}
