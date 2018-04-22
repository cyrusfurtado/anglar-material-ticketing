import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MainModule } from './main/main.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { fakeBackendProvider } from './fake-backend.service';
import { AppService } from './app-service.service';
import { AsyncLocalStorageModule } from 'angular-async-local-storage';
import 'hammerjs';
import { CustomMaterialModule } from './custom-material/custom-material.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AsyncLocalStorageModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MainModule
  ],
  providers: [
    AppService,
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
