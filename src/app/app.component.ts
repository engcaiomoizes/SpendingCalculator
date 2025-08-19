import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExpenseFormComponent } from './components/expense-form/expense-form.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, ExpenseFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'spending-calculator';
}
