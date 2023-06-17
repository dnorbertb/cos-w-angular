import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import type { IData } from 'src/interfaces/IData';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <a [routerLink]="[data.id]">
      {{data.message}}
    </a>
  `,
})
export class SecondComponent {
  @Input() data!: IData;
}
