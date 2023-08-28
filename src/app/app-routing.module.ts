import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostComponent } from './pages/post/post.component';
import { CommentsComponent } from './pages/comments/comments.component';
import { SubscriberComponent } from './pages/subscriber/subscriber.component';
import { AddBlogComponent } from './pages/add-blog/add-blog.component';
import { UpdatePostComponent } from './pages/update-post/update-post.component';

const routes: Routes = [
  {path:"", component:DashboardComponent},
  {path:"category", component:CategoryComponent},
  {path:"dash", component:DashboardComponent},
  {path:"post", component:PostComponent},
  {path:"comments", component:CommentsComponent},
  {path:"subscriber", component:SubscriberComponent},
  {path:"addBlog", component:AddBlogComponent},
  {path:"updateBlog/:id", component:UpdatePostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
