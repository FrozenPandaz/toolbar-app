import { Component, OnInit, Injector } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../+state/app.interfaces';
import { ModalService } from '../../modal/modal.service';
import { CreateActionDialogComponent } from '../../action-dialogs/create-action-dialog/create-action-dialog.component';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.css']
})
export class CreateButtonComponent implements OnInit {
  constructor(private modalService: ModalService, private injector: Injector) {}

  ngOnInit() {}

  click() {
    this.modalService.openModal(CreateActionDialogComponent, this.injector);
  }
}
