import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChiTietSanPhamComponent } from './chi-tiet-san-pham/chi-tiet-san-pham.component';
import { GioHangComponent } from './gio-hang/gio-hang.component';
import { SanPhamComponent } from './san-pham/san-pham.component';

@NgModule({
  declarations: [
    AppComponent,
    ChiTietSanPhamComponent,
    GioHangComponent,
    SanPhamComponent
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
