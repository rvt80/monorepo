import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './components/main/main.component';
import { NewFooCmpComponent } from './components/new-foo-cmp/new-foo-cmp.component';

const UP_ROUTES: Routes = [
  { path: 'main_path',  component: MainComponent,
    children: [
      { path: 'child', component: NewFooCmpComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(UP_ROUTES)],
  exports: [RouterModule]
})

export class FooLibRoutingModule { }
