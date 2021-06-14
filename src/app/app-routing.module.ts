import {HomeComponent} from "./component/home/home.component";
import {AboutComponent} from "./component/about/about/about.component";
import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {PageNotFoundComponent} from "./component/page-not-found/page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // {
  //   path: 'posts',
  //   component: PostsComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
