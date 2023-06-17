import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from '../message.service';
import { IData } from 'src/interfaces/IData';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      {{currMessage.message}}
    </p>
  `,
})
export class OverviewComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  messageService = inject(MessageService);
  currMessage: IData = { id: -1, message: 'not found' }

  constructor() {
    const idNumber = Number(this.route.snapshot.params['id']);
    const msg = this.messageService.getMessageById(idNumber);
    if (!msg) return;
    this.currMessage = msg;
  }
}
