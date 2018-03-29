import { Component, OnInit, ElementRef, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalService } from './modal/modal.service';
import { AppState } from './+state/app.interfaces';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('modal', {
    read: ViewContainerRef
  })
  public modal: ViewContainerRef;

  modalOpen: Observable<boolean> = this.modalService.isOpen;

  constructor(private modalService: ModalService) {}

  ngOnInit() {
    this.modalService.registerModal(this.modal);
  }
}
