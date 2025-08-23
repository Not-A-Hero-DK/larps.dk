import { Component } from '@angular/core';
import { TranslatePipe } from '@shared/pipes';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  imports: [TranslatePipe],
})
export class AboutComponent {}
