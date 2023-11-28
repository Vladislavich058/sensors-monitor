import { HttpClientModule } from '@angular/common/http';
import { isDevMode, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AddsensorComponent } from './component/addsensor/addsensor.component';
import { SensorlistingComponent } from './component/sensorlisting/sensorlisting.component';
import { MaterialModule } from './Material.Module';
import { AppEffects } from './Store/Common/App.Effects';
import { SensorEffects } from './Store/Sensor/Sensor.Effects';
import { TypeEffects } from './Store/Type/Type.Effects';
import { UnitEffects } from './Store/Unit/Unit.Effects';
import { UserEffect } from './Store/User/User.Effects';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SensorReducer } from './Store/Sensor/Sensor.Reducer';
import { TypeReducer } from './Store/Type/Type.Reducer';
import { UnitReducer } from './Store/Unit/Unit.Reducer';
import { UserReducer } from './Store/User/User.Reducer';
import { LoginComponent } from './component/login/login.component';
import { ErrorInterceptor, TokenInterceptor } from './interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SensorlistingComponent,
    AddsensorComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({
      sensor: SensorReducer,
      type: TypeReducer,
      unit: UnitReducer,
      user: UserReducer,
    }),
    EffectsModule.forRoot([
      SensorEffects,
      TypeEffects,
      UnitEffects,
      AppEffects,
      UserEffect,
    ]),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
