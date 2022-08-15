import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SecondTaskComponent } from './Components/second-task/second-task.component';
import { FirstTaskComponent } from './Components/first-task/first-task.component';

@NgModule({
  declarations: [
    AppComponent,
    SecondTaskComponent,
    FirstTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    AppComponent,
    SecondTaskComponent,
    FirstTaskComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
