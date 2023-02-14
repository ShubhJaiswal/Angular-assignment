import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { PostListComponent } from './components/postList/postList.component';

const routes: Routes = [
  { path: '', component: PostListComponent, pathMatch: 'full' },
  { path: 'news/:id', component: PostDetailsComponent, pathMatch: 'full' },
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
