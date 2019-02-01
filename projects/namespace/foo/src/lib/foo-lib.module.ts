import { NgModule } from '@angular/core';
import { BazLibModule } from '@namespace/baz';

import { FooLibRoutingModule } from './foo-lib-routing.module';

import { MainComponent } from './components/main/main.component';
import { FooLibComponent } from './foo-lib.component';
import { NewFooCmpComponent } from './components/new-foo-cmp/new-foo-cmp.component';


@NgModule({
  declarations: [
    MainComponent,
    FooLibComponent,
    NewFooCmpComponent],
  imports: [
    BazLibModule,
    FooLibRoutingModule
  ],
  exports: [
    FooLibComponent,
    NewFooCmpComponent]
})
export class FooLibModule { }
