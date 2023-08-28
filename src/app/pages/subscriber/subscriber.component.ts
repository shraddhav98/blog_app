import { Component } from '@angular/core';
import { BlogService } from 'src/app/service/blog.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-subscriber',
  templateUrl: './subscriber.component.html',
  styleUrls: ['./subscriber.component.css']
})
export class SubscriberComponent {
  constructor(private serv:BlogService, private toast:ToastrService){

  }

  newSub:any;
  getAllSubscriber(){
    return this.serv.onGetSubscribers().subscribe((data)=>{
      console.log(data);
      this.newSub =  data;
    })
  }

  subDelete(id:any){
    this.serv.onDeleteSubsciber(id).subscribe((data)=>{
      this.toast.success("Deleted Successfully!")
      this.getAllSubscriber();
    })
  }
  ngOnInit(){
    this.getAllSubscriber();
  }
}
