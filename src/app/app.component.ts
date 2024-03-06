import { Component } from '@angular/core';
import { RouterOutlet,RouterLink } from '@angular/router';
import { ListdataComponent } from './listdata/listdata.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,ListdataComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend-test';
}
