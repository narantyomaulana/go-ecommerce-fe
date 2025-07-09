import { useState } from 'react'
import useSortableHeader from '../../hooks/useSortableHeader';
import SortableHeader from '../SortableHeader/SortableHeader';

function AdminSalesReportSection() {
    const { handleSort, sortConfig } = useSortableHeader();
    const [selectedPeriod, setSelectedPeriod] = useState('monthly');

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Laporan Penjualan</h2>
                <div className="d-flex align-items-center gap-2">
                    <select
                        className="form-select"
                        value={selectedPeriod}
                        onChange={(e) => setSelectedPeriod(e.target.value)}
                    >
                        <option value="daily">Harian</option>
                        <option value="weekly">Mingguan</option>
                        <option value="monthly">Bulanan</option>
                        <option value="yearly">Tahunan</option>
                    </select>
                    <button className="btn btn-primary form-select d-flex align-items-center">
                        <i className="fas fa-download me-2"></i> <span>Export</span>
                    </button>
                </div>
            </div>

            {/* Summary Cards */}
            <div className="row mb-4 gap-2">
                <div className="col-12 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Total Pendapatan</h6>
                            <h3 className="card-title">Rp125.750.000</h3>
                            <p className="card-text text-success">
                                <i className="fas fa-arrow-up"></i> 12.5%
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-5">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Total Order</h6>
                            <h3 className="card-title">847</h3>
                            <p className="card-text text-success">
                                <i className="fas fa-arrow-up"></i> 8.2%
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Rata-rata Order</h6>
                            <h3 className="card-title">Rp1.250.000</h3>
                            <p className="card-text text-danger">
                                <i className="fas fa-arrow-down"></i> 3.1%
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-5">
                    <div className="card">
                        <div className="card-body">
                            <h6 className="card-subtitle mb-2 text-muted">Produk Terjual</h6>
                            <h3 className="card-title">1,234</h3>
                            <p className="card-text text-success">
                                <i className="fas fa-arrow-up"></i> 15.7%
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Sales Table */}
            <div className="table-responsive">
                <table className="table site-blocks-table">
                    <thead>
                        <tr>
                            <SortableHeader
                                label="Periode"
                                sortKey="period"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Total Penjualan"
                                sortKey="total_sales"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Jumlah Order"
                                sortKey="order_count"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Produk Terjual"
                                sortKey="products_sold"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Detail</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Januari 2025</td>
                            <td>Rp45.750.000</td>
                            <td>287</td>
                            <td>432</td>
                            <td>
                                <button className="btn btn-secondary btn-sm">Lihat Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Februari 2025</td>
                            <td>Rp52.250.000</td>
                            <td>312</td>
                            <td>478</td>
                            <td>
                                <button className="btn btn-secondary btn-sm">Lihat Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Maret 2025</td>
                            <td>Rp27.750.000</td>
                            <td>248</td>
                            <td>324</td>
                            <td>
                                <button className="btn btn-secondary btn-sm">Lihat Detail</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdminSalesReportSection;
