import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { DisneyComponent } from './disney/disney.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
 

const routes: Routes = [

  {path:'gio-hang', component:GioHangComponent},
  {path:'disney',component:DisneyComponent},
  {path:'pokemon',component:PokemonComponent},
  {path:'sanrio',component:SanPhamComponent},
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
