import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GioHangComponent } from './gio-hang/gio-hang.component';

const routes: Routes = [

  {path:'gio-hang', component:GioHangComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
