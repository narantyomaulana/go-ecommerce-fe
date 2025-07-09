import { useState } from 'react';
import { Link } from 'react-router-dom';
import useSortableHeader from '../../hooks/useSortableHeader';
import SortableHeader from '../SortableHeader/SortableHeader';
import Pagination from '../Pagination/Pagination';

function AdminOrderListSection() {
    const { handleSort, sortConfig } = useSortableHeader();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Order</h2>
            </div>
            <div className="table-responsive">
                <table className="table site-blocks-table">
                    <thead>
                        <tr>
                            <th>Nomor Order</th>
                            <SortableHeader
                                label="Pelanggan"
                                sortKey="customer"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Total"
                                sortKey="total"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Item</th>
                            <SortableHeader
                                label="Status"
                                sortKey="status"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Tanggal"
                                sortKey="date"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>#ORD-2025000001</td>
                            <td>Sari</td>
                            <td>Rp150.000</td>
                            <td>
                                <div>Produk 1 x 1</div>
                                <div>Produk 2 x 1</div>
                            </td>
                            <td>
                                <span className="badge bg-warning">Diproses</span>
                            </td>
                            <td>15 Jan 2025</td>
                            <td>
                                {/* TODO: add order link */}
                                <Link to="/admin/order">
                                    <button className="btn">
                                        Lihat Detail
                                    </button>
                                </Link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
            />
        </div>
    );
}

export default AdminOrderListSection