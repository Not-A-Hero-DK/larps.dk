import { Component } from '@angular/core';
import { TranslatePipe } from '@shared/pipes';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [TranslatePipe],
})
export class HomeComponent {}
