import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClusterDataComponent } from './cluster-data/cluster-data.component';
import { ClusterDataService } from './services/cluster-data.service';
import { HeaderComponent } from './components/header/header.component';
import { CdsModule } from '@cds/angular';
import { VmManagementComponent } from './components/vm-management/vm-management.component';


@NgModule({
  declarations: [
    AppComponent,
    ClusterDataComponent,
    HeaderComponent,
    VmManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    CdsModule
  ],
  providers: [ClusterDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
