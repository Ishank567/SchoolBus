import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from './features/features.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { AppsComponent} from './apps/apps.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'features', component:FeaturesComponent},
  {path: 'solutions', component:SolutionsComponent},
  {path:'home',component:HomeComponent},
  {path: 'apps', component:AppsComponent},
  {path: 'contact', component:ContactComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
