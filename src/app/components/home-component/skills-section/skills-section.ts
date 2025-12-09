import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild
} from '@angular/core';
import {
  Chart,
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
} from 'chart.js';

Chart.register(
  RadarController,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  Title
);

@Component({
  selector: 'skills-section',
  imports: [CommonModule],
  templateUrl: './skills-section.html',
  styleUrl: './skills-section.css',
})
export class SkillsSection implements AfterViewInit, OnDestroy {
  @ViewChild('radarCanvas', { static: true }) radarCanvas!: ElementRef<HTMLCanvasElement>;

  @Input() values: number[] | null = null;

  chart: Chart | null = null;

  labels = [
    'Backend',
    'Frontend',
    'Architecture',
    'DevOps',
    'Databases',
    'Security'
  ];

  defaultValues = [
    90,
    80,
    85,
    75,
    80,
    65
  ];

  ngAfterViewInit(): void {
    this.renderChart();
  }

  ngOnDestroy(): void {
    this.chart?.destroy();
  }

  private renderChart(): void {
    const ctx = this.radarCanvas.nativeElement.getContext('2d')!;
    const datasetValues = this.values ?? this.defaultValues;

    // Palette C
    const primary = '#F09A57';
    const primarySoft = 'rgba(240,154,87,0.25)';
    const angleLineColor = 'rgba(255,255,255,0.08)';
    const pointColor = '#F3B27D';

    this.chart?.destroy();

    this.chart = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: 'Skill level',
            data: datasetValues,
            fill: true,
            backgroundColor: primarySoft,
            borderColor: primary,
            pointBackgroundColor: pointColor,
            pointBorderColor: primary,
            borderWidth: 2,
            pointRadius: 4,
          }
        ]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            suggestedMax: 100,
            ticks: {
              showLabelBackdrop: false,
              stepSize: 20,
              color: 'rgba(255,255,255,0.5)',
              font: {
                size: 11
              }
            },
            grid: {
              color: '#f7f5f5ff',
            },
            angleLines: {
              color: angleLineColor
            },
            pointLabels: {
              color: '#c1b4a1ff',
              font: {
                size: 13,
                weight: 'normal'
              }
            }
          }
        },
        plugins: {
          legend: { display: false },
          tooltip: {
            backgroundColor: 'rgba(20,20,20,0.95)',
            titleColor: '#fff',
            bodyColor: '#eee',
            borderColor: 'rgba(255,255,255,0.1)',
            borderWidth: 1
          }
        },
        animation: {
          duration: 900,
          easing: 'easeOutQuart'
        }
      }
    });
  }
}
