import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MarkdownModule} from 'ngx-markdown';

import { AppComponent } from './app.component';
import { HomeComponent } from './routes/home/home.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from './shared/shared.module';

import { routes } from './routes';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    LayoutComponent,
    SidebarComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes),
    MarkdownModule.forRoot(),
    SharedModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}