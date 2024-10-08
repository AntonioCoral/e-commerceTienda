import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { LoginComponent } from "./componentes/login/login.component";
import { BrowserModule } from "@angular/platform-browser";
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { ProductListComponent } from "./componentes/product-list/product-list.component";
import { HttpClientModule } from "@angular/common/http";
import { CartComponent } from "./componentes/cart/cart.component";
import { FormsModule } from "@angular/forms";
import { provideToastr, ToastrModule } from "ngx-toastr";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        NavbarComponent,
        ProductListComponent,
        CartComponent
    ],
    imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        BrowserModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatMenuModule,
        MatListModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 5000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
          }), 
    ],
    providers:[

    ],
    bootstrap: [ AppComponent ]
})

export class AppModule { }
