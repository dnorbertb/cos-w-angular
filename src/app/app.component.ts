import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from './message.service';

@Component({
  standalone: true,
  selector: 'app-root',
  imports: [HomeComponent, RouterModule, ReactiveFormsModule],
  template: `
  <section>
  <form [formGroup]="form" (submit)="submitApplication()" class="p-1">
    <input formControlName="searchKeyword" class="p-1 border-b border-b-gray-500 mr-1" type="text" placeholder="Your message">
    <button class="py-1 px-2 bg-gray-500 text-white rounded" type="submit">Search</button>
  </form>
  </section>
  <section>
    <router-outlet />
  </section>
  `,
})
export class AppComponent {
  messageService = inject(MessageService);
  title = 'homes';
  form = new FormGroup({
    searchKeyword: new FormControl('')
  });

  submitApplication() {
    console.log('Submit')
    const msg = this.form.value.searchKeyword;
    if (!msg) return;
    this.messageService.addMessage(msg);
  }
}
