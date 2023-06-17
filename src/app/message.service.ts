import { IData } from 'src/interfaces/IData';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class MessageService {
  protected content: Array<IData> = [
    { id: 0, message: "First message" },
    { id: 1, message: "Second message" },
    { id: 2, message: "Third message" },
    { id: 3, message: "Fourth message" },
    { id: 4, message: "Fifth message" },
  ];

  constructor() { }

  getAllMessages() {
    return this.content
  };

  getMessageById(id: number) {
    return this.content.find(m => m.id === id);
  };

  addMessage(message: string) {
    this.content.push({ id: this.content.length, message })
  }
}
