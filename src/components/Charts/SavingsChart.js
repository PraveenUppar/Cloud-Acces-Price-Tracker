import React, { useContext } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import { AppContext } from '../../Context/AppContext';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const SavingsChart = () => {
  const { data_size, days_cool, data_retrieve, cool_percent, region } = useContext(AppContext);

  // Calculate savings (using the same logic from Month-saving-with-cool-access.js)
  const monthly_hours = 730;
  const cool_rates = 0.0001;
  const standard_region_rates = 0.0001;
  const standard_network_rates = 0.02;

  const standard_rates = () => {
    if (region === "India") {
      return 0.000223;
    } else if (region === "Australia") {
      return 0.000292;
    } else {
      return 0.000202;
    }
  };

  // Calculate savings
  const hot_hours = (days_cool * 24) % monthly_hours;
  const cool_hours = monthly_hours - hot_hours;
  const Month_12_Store_cool = data_size * 1024 * (cool_percent / 100);
  
  const Month_1_part_1 = data_size * 1024 * standard_region_rates * hot_hours;
  const Month_1_part_2 = (data_size * 1024 - Month_12_Store_cool) * standard_region_rates * cool_hours;
  
  const Standard_month_1_cost = Month_1_part_1 + Month_1_part_2;
  const Cool_const_Month_1 = Month_1_part_2 * cool_rates * cool_hours;
  
  const Total_Network = data_size * 1024 * (cool_percent / 100) * standard_network_rates;
  const Retrieve_Cost = data_size * 1024 * (cool_percent / 100) * (data_retrieve / 100) * 0.024;
  
  const Month_2_store_cool = data_size * 1024 * (cool_percent / 100) - data_size * 1024 * (cool_percent / 100) * (data_retrieve / 100);
  const standard_cool_month_2 = Math.abs((data_size * 1024 - Month_2_store_cool) * standard_rates(region) * monthly_hours);
  const Month_2_cool_cost = Month_2_store_cool * cool_rates * monthly_hours;
  
  const Without_cool = Math.abs(data_size * monthly_hours * standard_rates(region) * 1024);
  const Total_saving = standard_cool_month_2 + Month_2_cool_cost + Retrieve_Cost;
  const monthly_saving = Without_cool - Total_saving;
  const weekly_saving = monthly_saving / 4.33; // Average weeks per month
  
  // Chart configurations
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          color: '#E2E8F0',
          font: {
            family: 'Inter',
            size: 12,
            weight: '500'
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.95)',
        titleColor: '#F1F5F9',
        bodyColor: '#E2E8F0',
        borderColor: '#334155',
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        titleFont: {
          family: 'Inter',
          size: 14,
          weight: '600'
        },
        bodyFont: {
          family: 'Inter',
          size: 13,
          weight: '500'
        },
        callbacks: {
          label: function(context) {
            return `${context.dataset.label}: $${context.parsed.y.toFixed(2)}`;
          }
        }
      }
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(51, 65, 85, 0.3)',
          drawBorder: false
        },
        ticks: {
          color: '#94A3B8',
          font: {
            family: 'Inter',
            size: 11,
            weight: '500'
          }
        }
      },
      y: {
        grid: {
          color: 'rgba(51, 65, 85, 0.3)',
          drawBorder: false
        },
        ticks: {
          color: '#94A3B8',
          font: {
            family: 'Inter',
            size: 11,
            weight: '500'
          },
          callback: function(value) {
            return '$' + value.toFixed(0);
          }
        }
      }
    }
  };

  // Time-based savings data
  const timeBasedData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Month 1', 'Month 6', 'Year 1', 'Year 2', 'Year 3'],
    datasets: [
      {
        label: 'Cumulative Savings',
        data: [
          weekly_saving,
          weekly_saving * 2,
          weekly_saving * 3,
          weekly_saving * 4,
          monthly_saving,
          monthly_saving * 6,
          monthly_saving * 12,
          monthly_saving * 24,
          monthly_saving * 36
        ],
        borderColor: '#06B6D4',
        backgroundColor: 'rgba(6, 182, 212, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#06B6D4',
        pointBorderColor: '#0891B2',
        pointBorderWidth: 2,
        pointRadius: 6,
        pointHoverRadius: 8
      }
    ]
  };

  // Monthly comparison data
  const monthlyComparisonData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [
      {
        label: 'Without Cool Storage',
        data: Array(12).fill(Without_cool),
        backgroundColor: 'rgba(239, 68, 68, 0.8)',
        borderColor: '#DC2626',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      },
      {
        label: 'With Cool Storage',
        data: Array(12).fill(Total_saving),
        backgroundColor: 'rgba(16, 185, 129, 0.8)',
        borderColor: '#059669',
        borderWidth: 2,
        borderRadius: 8,
        borderSkipped: false,
      }
    ]
  };

  // Cost breakdown data
  const costBreakdownData = {
    labels: ['Hot Storage Cost', 'Cool Storage Cost', 'Network Cost', 'Savings'],
    datasets: [
      {
        data: [
          standard_cool_month_2,
          Month_2_cool_cost,
          Retrieve_Cost,
          monthly_saving
        ],
        backgroundColor: [
          'rgba(239, 68, 68, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(245, 158, 11, 0.8)',
          'rgba(16, 185, 129, 0.8)'
        ],
        borderColor: [
          '#DC2626',
          '#2563EB',
          '#D97706',
          '#059669'
        ],
        borderWidth: 2,
        hoverOffset: 8
      }
    ]
  };

  const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#E2E8F0',
          font: {
            family: 'Inter',
            size: 12,
            weight: '500'
          },
          padding: 15,
          usePointStyle: true,
          pointStyle: 'circle'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(30, 41, 59, 0.95)',
        titleColor: '#F1F5F9',
        bodyColor: '#E2E8F0',
        borderColor: '#334155',
        borderWidth: 1,
        cornerRadius: 12,
        padding: 12,
        callbacks: {
          label: function(context) {
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((context.parsed / total) * 100).toFixed(1);
            return `${context.label}: $${context.parsed.toFixed(2)} (${percentage}%)`;
          }
        }
      }
    },
    cutout: '60%'
  };

  return (
    <div className="charts-container">
      <h2 className="charts-title">
        <span className="chart-icon">📊</span>
        Savings Analytics & Projections
      </h2>
      
      <div className="charts-grid">
        <div className="chart-card">
          <h3 className="chart-card-title">Cumulative Savings Over Time</h3>
          <div className="chart-wrapper">
            <Line data={timeBasedData} options={chartOptions} />
          </div>
        </div>
        
        <div className="chart-card">
          <h3 className="chart-card-title">Monthly Cost Comparison</h3>
          <div className="chart-wrapper">
            <Bar data={monthlyComparisonData} options={chartOptions} />
          </div>
        </div>
        
        <div className="chart-card">
          <h3 className="chart-card-title">Cost Breakdown Analysis</h3>
          <div className="chart-wrapper">
            <Doughnut data={costBreakdownData} options={doughnutOptions} />
          </div>
        </div>
      </div>
      
      <div className="savings-summary">
        <div className="summary-card">
          <div className="summary-icon">📈</div>
          <div className="summary-content">
            <div className="summary-value">${weekly_saving.toFixed(2)}</div>
            <div className="summary-label">Weekly Savings</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon">💰</div>
          <div className="summary-content">
            <div className="summary-value">${monthly_saving.toFixed(2)}</div>
            <div className="summary-label">Monthly Savings</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon">🎯</div>
          <div className="summary-content">
            <div className="summary-value">${(monthly_saving * 12).toFixed(2)}</div>
            <div className="summary-label">Annual Savings</div>
          </div>
        </div>
        
        <div className="summary-card">
          <div className="summary-icon">🚀</div>
          <div className="summary-content">
            <div className="summary-value">{((monthly_saving / Without_cool) * 100).toFixed(1)}%</div>
            <div className="summary-label">Cost Reduction</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SavingsChart;