import { Injectable, ComponentFactoryResolver, Injector, ViewContainerRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../+state/app.interfaces';

@Injectable()
export class ModalService {
  isOpen: Observable<boolean> = this.store.select(state => state.app.modal);

  modal: ViewContainerRef;

  constructor(private store: Store<AppState>, private componentResolver: ComponentFactoryResolver) { }

  registerModal(modal: ViewContainerRef) {
    this.modal = modal;
  }

  openModal(component: Type<{}>, injector: Injector) {
    const factory = this.componentResolver.resolveComponentFactory(component);
    const componentRef = factory.create(injector);
    this.modal.clear();
    this.modal.createComponent(factory);
    this.store.dispatch({
      type: 'OPEN_MODAL'
    });
  }

  closeModal() {
    this.modal.clear();
    this.store.dispatch({
      type: 'TOGGLE_MODAL'
    });
  }
}
