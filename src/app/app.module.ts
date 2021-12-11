import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClusterDataComponent } from './cluster-data/cluster-data.component';
import { ClusterDataService } from 'src/services/cluster-data.service';


@NgModule({
  declarations: [
    AppComponent,
    ClusterDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [ClusterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
