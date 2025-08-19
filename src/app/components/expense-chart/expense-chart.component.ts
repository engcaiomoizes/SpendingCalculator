import { AfterViewInit, Component } from '@angular/core';
import { BarController, BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from 'chart.js';

@Component({
  selector: 'app-expense-chart',
  imports: [],
  templateUrl: './expense-chart.component.html',
  styleUrl: './expense-chart.component.scss'
})
export class ExpenseChartComponent implements AfterViewInit {
  title = "Gráfico de Gastos";

  chart!: Chart;

  ngAfterViewInit(): void {
    Chart.register(CategoryScale, LinearScale, BarController, BarElement, Title, Tooltip, Legend);

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;

    this.chart = new Chart(canvas, {
      type: 'bar',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
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
  }
}
