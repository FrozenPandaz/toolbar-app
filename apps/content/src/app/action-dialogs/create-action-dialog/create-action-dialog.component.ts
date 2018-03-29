import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../+state/app.interfaces';
import { ModalService } from '../../modal/modal.service';

@Component({
  selector: 'app-create-action-dialog',
  templateUrl: './create-action-dialog.component.html',
  styleUrls: ['./create-action-dialog.component.css']
})
export class CreateActionDialogComponent implements OnInit {

  constructor(private store: Store<AppState>, private modalService: ModalService) { }

  ngOnInit() {
  }

  cancel() {
    this.modalService.closeModal();
  }

  create() {
    this.store.dispatch({
      type: 'ADD_CONTENT',
      payload: {
        text: 'Hello!'
      }
    });
  }

}
