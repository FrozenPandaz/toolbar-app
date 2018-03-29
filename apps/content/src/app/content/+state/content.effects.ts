import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import { ContentState } from './content.interfaces';
import { tap } from 'rxjs/operators/tap';
import { ModalService } from '../../modal/modal.service';
import { map } from 'rxjs/operators/map';

@Injectable()
export class ContentEffects {

  @Effect()
  addAction = this.actions.ofType('ADD_CONTENT').pipe(
    map(() => {
      return {
        type: 'TOGGLE_MODAL'
      };
    })
  );

  constructor(
    private actions: Actions
  ) {}
}
