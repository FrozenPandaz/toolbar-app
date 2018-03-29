import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentListComponent } from './content-list/content-list.component';
import { ContentService } from './content.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { contentReducer } from './+state/content.reducer';
import { contentInitialState } from './+state/content.init';
import { ContentEffects } from './+state/content.effects';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('contents', contentReducer, {
      initialState: contentInitialState
    }),
    EffectsModule.forFeature([ContentEffects])
  ],
  providers: [ContentService, ContentEffects],
  declarations: [ContentListComponent],
  exports: [ContentListComponent]
})
export class ContentModule {}
