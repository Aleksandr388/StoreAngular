import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { FormsModule } from '@angular/forms';
import { AuthState } from './store/states/auth.state';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { PrintingEditionModule } from './modules/printing-edition/printing-edition/printing-edition.module';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    NgxsModule.forRoot([AuthState]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    NgxsLoggerPluginModule.forRoot({}),
    FormsModule,
    HttpClientModule,
    PrintingEditionModule
  ],
  providers: [JwtHelperService,
    { 
      provide: JWT_OPTIONS,
      useValue: JWT_OPTIONS
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
