import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DoingComponent } from './doing/doing.component';
import { DoneComponent } from './done/done.component';
import { appRoutes } from './app.routes';
import { TaskService } from './task.service';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DoingComponent,
    DoneComponent
  ],
  imports: [
    BrowserModule,
    appRoutes
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
