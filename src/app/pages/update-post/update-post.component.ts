import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BlogService } from 'src/app/service/blog.service';

@Component({
  selector: 'app-update-post',
  templateUrl: './update-post.component.html',
  styleUrls: ['./update-post.component.css']
})
export class UpdatePostComponent {
  constructor(private serv:BlogService, private toasts: ToastrService, private active:ActivatedRoute, private rou:Router){

  }

  url="https://img.freepik.com/free-photo/image-icon-front-side-white-background_187299-40166.jpg?w=740&t=st=1691491068~exp=1691491668~hmac=82845ccb1cea6e854d7d522ae76e016a54da09c03013e06e9dba7daabde4933a";
  id:any;

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
ngOnInit(){
  this.active.params.subscribe((data)=>{
    this.id = data['id'];
    console.log(this.id);
  })

    // this.serv.getCurrentData(this.id).subscribe((result)=>{
    //   this.formsData = new FormGroup({
    //     blog_id: new FormControl(),
    //     blog_name: new FormControl(),
    //     blog_disc: new FormControl(),
    //     blog_date: new FormControl(),
    //     blog_author: new FormControl(),
    //     blog_category: new FormControl(),
    //     blog_img:new FormControl()
    //   }
    //   )
    // })

}

updateBlogData(){
    console.log(this.formsData.value)
      this.serv.onUpdateBlogs(this.id, this.formsData.value).subscribe((data)=>{
      console.log(data)
      alert("data Updated")
    })

    this.rou.navigate(['/post']);
    
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
