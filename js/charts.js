document.addEventListener('DOMContentLoaded', () => {
    // Hero Chart
    const heroCtx = document.getElementById('heroChart');
    if (heroCtx) {
        new Chart(heroCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [{
                    label: 'Revenue',
                    data: [12000, 19000, 15000, 25000, 22000, 30000],
                    borderColor: '#0066FF',
                    backgroundColor: 'rgba(0, 102, 255, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'Expenses',
                    data: [8000, 9000, 8500, 10000, 9500, 11000],
                    borderColor: '#EF4444',
                    backgroundColor: 'transparent',
                    borderDash: [5, 5],
                    tension: 0.4
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0,0,0,0.05)'
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        }
                    }
                }
            }
        });
    }

    // Dashboard Demo Charts (will be initialized when visible or immediately)
    // Revenue Line
    const demoRevCtx = document.getElementById('demoRevenueChart');
    if (demoRevCtx) {
        new Chart(demoRevCtx, {
            type: 'bar',
            data: {
                labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                datasets: [{
                    label: 'Net Profit',
                    data: [45000, 52000, 48000, 61000],
                    backgroundColor: '#6A5CFF',
                }]
            },
            options: { responsive: true }
        });
    }

    // Expense Doughnut
    const demoExpCtx = document.getElementById('demoExpenseChart');
    if (demoExpCtx) {
        new Chart(demoExpCtx, {
            type: 'doughnut',
            data: {
                labels: ['Payroll', 'Software', 'Office', 'Travel'],
                datasets: [{
                    data: [40, 20, 15, 25],
                    backgroundColor: ['#0A2540', '#0066FF', '#6A5CFF', '#F59E0B']
                }]
            },
            options: { responsive: true }
        });
    }
});
