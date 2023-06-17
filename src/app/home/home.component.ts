import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SecondComponent } from '../second/second.component';
import { MessageService } from '../message.service';
import { IData } from 'src/interfaces/IData';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SecondComponent],
  template: `
  <app-second *ngFor="let item of content" [data]="item" />
  `,
})
export class HomeComponent {
  content: Array<IData> = [];
  messageService: MessageService = inject(MessageService);

  constructor() {
    this.content = this.messageService.getAllMessages();
  }

}
