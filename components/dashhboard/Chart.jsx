import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Link from 'next/link';
import { IconArrowBounce, IconArrowRight, IconBinaryTreeFilled } from '@tabler/icons-react';

const LineChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      // Destroy previous chart instance if exists
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }

      const ctx = chartRef.current.getContext('2d');

      // Create gradient for the chart area
      const gradient = ctx.createLinearGradient(0, 0, 0, 400);
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)');
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [
            {
              label: 'Desktop Logins',
              data: [65, 59, 80, 81, 56, 55, 70, 65, 59, 80, 81, 60],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: gradient,
              tension: 0.4,
              fill: true,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: 'Mobile Logins',
              data: [28, 48, 40, 19, 86, 27, 40, 28, 48, 40, 19, 86],
              borderColor: 'rgb(16, 185, 129)',
              backgroundColor: 'transparent',
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: 'Tablet Logins',
              data: [45, 25, 60, 40, 70, 35, 60, 45, 25, 60, 40, 70],
              borderColor: 'rgb(245, 158, 11)',
              backgroundColor: 'transparent',
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6,
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
              labels: {
                color: '#374151',
                font: {
                  size: 13,
                  family: "'Inter', sans-serif"
                },
                usePointStyle: true,
                boxWidth: 8,
                padding: 20
              }
            },
            tooltip: {
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              titleColor: '#1F2937',
              bodyColor: '#1F2937',
              borderColor: '#E5E7EB',
              borderWidth: 1,
              padding: 12,
              usePointStyle: true,
              boxPadding: 4,
              callbacks: {
                label: function (context) {
                  return `${context.dataset.label}: ${context.parsed.y} min`;
                }
              }
            }
          },
          scales: {
            x: {
              grid: {
                display: false,
                drawBorder: false
              },
              ticks: {
                color: '#6B7280',
                font: {
                  size: 12,
                  family: "'Inter', sans-serif"
                }
              },
              title: {
                display: true,
                text: 'Logins',
                color: '#4B5563',
                font: {
                  size: 14,
                  weight: '500',
                  family: "'Inter', sans-serif"
                },
                padding: { top: 10 }
              }
            },
            y: {
              grid: {
                color: 'rgba(229, 231, 235, 0.5)',
                drawBorder: false
              },
              ticks: {
                color: '#6B7280',
                padding: 8,
                font: {
                  size: 12,
                  family: "'Inter', sans-serif"
                },
                callback: function (value) {
                  return value + ' min';
                }
              },
              beginAtZero: true,
              title: {
                display: true,
                text: 'Activity by time',
                color: '#4B5563',
                font: {
                  size: 14,
                  weight: '500',
                  family: "'Inter', sans-serif"
                },
                padding: { bottom: 10 }
              }
            }
          },
          interaction: {
            intersect: false,
            mode: 'index'
          },
          elements: {
            point: {
              hoverBackgroundColor: '#fff',
              hoverBorderWidth: 2
            }
          }
        }
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className='flex flex-col gap-10 w-full'>
      <div className="bg-white rounded-xl shadow-sm p-5 w-full">
        <div className="flex justify-between items-center my-6">
          <h3 className="text-lg font-semibold text-gray-800">Login Activity Over Time</h3>
          <div className="flex items-center space-x-2 text-sm">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
              <span className="text-gray-600">Desktop</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
              <span className="text-gray-600">Mobile</span>
            </div>
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <span className="text-gray-600">Tablet</span>
            </div>
          </div>
        </div>
        <div className="h-[300px]">
          <canvas ref={chartRef}></canvas>
        </div>
        <div className="mt-4 flex justify-center text-sm text-gray-500">
          <p>Hover over points to see details. Click legend items to toggle visibility.</p>
        </div>
      </div>

      <div>
        <p className='font-bold text-2xl mb-5'>Real-Time Insights</p>

        <div className="flex justify-between">
          <div className="flex gap-2">
            <IconArrowBounce className='bg-yellow-200 size-10 p-2 rounded-lg text-yellow-400' />
            <div className="flex flex-col gap-1">
              <p className='font-bold text-md'>Surge Industry Identified</p>
              <p className='text-sm'>Match success rate between 4 random quality</p>
              <Link className='flex gap-2 text-sm  text-blue-600 hover:border-b-2 w-40 ' href={"!#"}>View detailed report <IconArrowRight /></Link>
            </div>
          </div>
          <div className="flex gap-2">
            <IconBinaryTreeFilled className='bg-yellow-200 size-10 p-2 rounded-lg text-yellow-400' />
            <div className="flex flex-col gap-1">
              <p className='font-bold text-md'>Numerous Uncompleted Profile</p>
              <p className='text-sm'>24 participations completing profile, potentially low quality</p>
              <Link className='flex gap-2 text-blue-600 text-sm hover:border-b-2 w-40' href={"!#"}>Send notification <IconArrowRight /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LineChart;