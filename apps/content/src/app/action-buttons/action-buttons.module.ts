import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateButtonComponent } from './create-button/create-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateButtonComponent, DeleteButtonComponent],
  exports: [CreateButtonComponent, DeleteButtonComponent]
})
export class ActionButtonsModule {}
