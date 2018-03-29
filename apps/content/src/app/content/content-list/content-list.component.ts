import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { tap } from 'rxjs/operators/tap';
import { AppState } from '../../+state/app.interfaces';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContentListComponent implements OnInit {
  contents = this.store.select(state => {
    console.log(state);
    return state.contents.contents;
  });
  constructor(private store: Store<AppState>) {}

  ngOnInit() {}
}
