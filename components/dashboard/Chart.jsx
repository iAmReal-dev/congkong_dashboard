import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto'
import Link from 'next/link'
import { IconArrowBounce, IconArrowRight, IconBinaryTreeFilled } from '@tabler/icons-react'

const LineChart = () => {
  const chartRef = useRef(null)
  const chartInstance = useRef(null)

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }

      const ctx = chartRef.current.getContext('2d')
      const gradient = ctx.createLinearGradient(0, 0, 0, 400)
      gradient.addColorStop(0, 'rgba(59, 130, 246, 0.1)')
      gradient.addColorStop(1, 'rgba(59, 130, 246, 0)')

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['09:00', '10:00', '11:00', '12:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00'],
          datasets: [
            {
              label: 'Participation Login',
              data: [65, 59, 80, 81, 56, 55, 70, 65, 59, 80, 81, 60],
              borderColor: 'rgb(59, 130, 246)',
              backgroundColor: gradient,
              tension: 0.4,
              fill: true,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: 'Meeting',
              data: [28, 48, 40, 19, 86, 27, 40, 28, 48, 40, 19, 86],
              borderColor: 'rgb(16, 185, 129)',
              backgroundColor: 'transparent',
              tension: 0.4,
              pointRadius: 4,
              pointHoverRadius: 6,
            },
            {
              label: 'Total Meetings',
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
                  return `${context.dataset.label}: ${context.parsed.y}`
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
                text: '',
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
                  return value
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
      })
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy()
      }
    }
  }, [])

  return (
    <div className='flex flex-col gap-10 md:w-[50vw]'>
      <div className="bg-white rounded-xl shadow-sm md:p-5 w-full">
        <div className="flex justify-between items-center flex-wrap gap-2 my-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800">Activity by Time</h3>

        </div>
        <div className="h-[300px]">
          <canvas ref={chartRef}></canvas>
        </div>
      </div>
      <div>
        <p className='font-bold text-xl sm:text-2xl mb-5'>Real-Time Insights</p>
        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <div className="flex gap-2">
            <IconArrowBounce className='bg-yellow-200 size-10 p-2 rounded-lg text-yellow-400' />
            <div className="flex flex-col gap-1">
              <p className='font-bold text-base'>Surge Industry Identified</p>
              <p className='text-xs sm:text-sm'>Match success rate between 4 random quality</p>
              <Link className='flex gap-2 text-xs sm:text-sm text-blue-600' href="!#">View detailed report <IconArrowRight /></Link>
            </div>
          </div>
          <div className="flex gap-2">
            <IconBinaryTreeFilled className='bg-yellow-200 size-10 p-2 rounded-lg text-yellow-400' />
            <div className="flex flex-col gap-1">
              <p className='font-bold text-base'>Numerous Uncompleted Profile</p>
              <p className='text-xs sm:text-sm'>24 participations completing profile, potentially low quality</p>
              <Link className='flex gap-2 text-xs sm:text-sm text-blue-600' href="!#">Send notification <IconArrowRight /></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LineChart

