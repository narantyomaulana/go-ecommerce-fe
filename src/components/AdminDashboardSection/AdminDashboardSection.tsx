import { Line, Bar, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

function AdminDashboardSection() {
    const salesData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
            label: 'Penjualan 2025',
            data: [45750000, 52250000, 27750000, 38500000, 42750000, 55000000],
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    const productData = {
        labels: ['Kursi Nordic', 'Meja Makan', 'Sofa Modern', 'Lemari Pakaian', 'Rak Buku'],
        datasets: [{
            label: 'Produk Terlaris',
            data: [65, 45, 38, 24, 18],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)',
            ],
        }]
    };

    const customerData = {
        labels: ['Baru', 'Reguler', 'Premium'],
        datasets: [{
            data: [30, 50, 20],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
            ],
        }]
    };

    return (
        <div>
            <h2 className="section-title mb-4">Dashboard Penjualan</h2>

            {/* Summary Cards */}
            <div className="row mb-4">
                <div className="col-md-3">
                    <div className="card bg-primary text-white">
                        <div className="card-body">
                            <h6>Penjualan Hari Ini</h6>
                            <h3>Rp12.750.000</h3>
                            <p className="mb-0">↑ 15% dari kemarin</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-success text-white">
                        <div className="card-body">
                            <h6>Order Baru</h6>
                            <h3>24</h3>
                            <p className="mb-0">↑ 8 dari kemarin</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-info text-white">
                        <div className="card-body">
                            <h6>Pelanggan Aktif</h6>
                            <h3>847</h3>
                            <p className="mb-0">↑ 12% bulan ini</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card bg-warning text-white">
                        <div className="card-body">
                            <h6>Produk Terjual</h6>
                            <h3>1,234</h3>
                            <p className="mb-0">↑ 25% bulan ini</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Charts */}
            <div className="row mb-4">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Grafik Penjualan</h5>
                            <Line data={salesData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top' as const,
                                    },
                                }
                            }} />
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Segmentasi Pelanggan</h5>
                            <Doughnut data={customerData} />
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title">Produk Terlaris</h5>
                            <Bar data={productData} options={{
                                responsive: true,
                                plugins: {
                                    legend: {
                                        position: 'top' as const,
                                    },
                                }
                            }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboardSection;
