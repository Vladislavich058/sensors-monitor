import { SensorlistingComponent } from './component/sensorlisting/sensorlisting.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guard/auth.guard';
import { LoginComponent } from './component/login/login.component';

const routes: Routes = [
  { path: 'sensors', component: SensorlistingComponent, canActivate: [authGuard] },
  { path: '', component: LoginComponent },
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
