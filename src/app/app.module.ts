import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { SanPhamComponent } from './san-pham/san-pham.component';
import { DisneyComponent } from './disney/disney.component';
import { SanrioComponent } from './sanrio/sanrio.component';
import { PokemonComponent } from './pokemon/pokemon.component';
 

@NgModule({
  declarations: [
    AppComponent,
    ChiTietSanPhamComponent,
    GioHangComponent,
    SanPhamComponent,
    DisneyComponent,
    SanrioComponent,
    PokemonComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
