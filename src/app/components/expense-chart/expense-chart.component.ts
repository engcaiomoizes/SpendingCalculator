import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import { ExpenseService } from '../../services/expense.service';

@Component({
  selector: 'app-expense-chart',
  imports: [CommonModule],
  templateUrl: './expense-chart.component.html',
  styleUrls: ['./expense-chart.component.scss']
})
export class ExpenseChartComponent implements AfterViewInit {
  title = "Gráfico de Gastos";

  chart!: Chart;

  constructor(private expenseService: ExpenseService) {}

  ngAfterViewInit(): void {
    this.expenseService.getExpenses().subscribe(expenses => {
      const labels = expenses.map(e => e.description);
      const data = expenses.map(e => e.amount);

      const backgroundColors = expenses.map(e =>
        e.type === 'Receita' ? 'rgba(75, 192, 192, 0.5)' : 'rgba(255, 99, 132, 0.5)'
      );

      const borderColors = expenses.map(e =>
        e.type === 'Receita' ? 'rgba(75, 192, 192, 1)' : 'rgba(255, 99, 132, 1)'
      );

      Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend);

      const canvas = document.getElementById('canvas') as HTMLCanvasElement;

      this.chart = new Chart(canvas, {
        type: 'bar',
        data: {
          labels,
          datasets: [
            {
              label: 'Gastos',
              data,
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Gráfico de Gastos' },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    })
  }
}
