import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NxModule } from '@nrwl/nx';
import { Toolbar1Component } from './toolbar1/toolbar1.component';
import { Toolbar2Component } from './toolbar2/toolbar2.component';
import { ContentModule } from './content/content.module';
import { ActionButtonsModule } from './action-buttons/action-buttons.module';
import { ModalService } from './modal/modal.service';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './+state/app.reducer';
import { appInitialState } from './+state/app.init';
import { AppEffects } from './+state/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';
import { ActionDialogsModule } from './action-dialogs/action-dialogs.module';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot([]),
    ContentModule,
    ActionDialogsModule,
    ActionButtonsModule,
    StoreModule.forRoot(
      { app: appReducer },
      {
        initialState: { app: appInitialState },
        metaReducers: !environment.production ? [storeFreeze] : []
      }
    ),
    EffectsModule.forRoot([AppEffects]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  declarations: [AppComponent, Toolbar1Component, Toolbar2Component],
  bootstrap: [AppComponent],
  providers: [ModalService, AppEffects]
})
export class AppModule {}
