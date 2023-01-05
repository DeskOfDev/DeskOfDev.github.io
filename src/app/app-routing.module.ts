import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { SkillsetComponent } from './skillset/skillset.component';
import { AboutComponent } from './about/about.component';
import { TermsComponent } from './terms/terms.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { WorksComponent } from './works/works.component';
import { ShowcaseGraphicdesignComponent } from './showcase-graphicdesign/showcase-graphicdesign.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'skillset',
    component: SkillsetComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'termsofservice',
    component: TermsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'portfolio',
    component: WorksComponent
  },
  {
    path: 'showcase/graphicdesign',
    component:ShowcaseGraphicdesignComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
