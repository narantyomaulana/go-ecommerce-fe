import { useState } from 'react'
import useSortableHeader from '../../hooks/useSortableHeader';
import SortableHeader from '../SortableHeader/SortableHeader';
import Pagination from '../Pagination/Pagination';

function AdminCustomerListSection() {
    const { handleSort, sortConfig } = useSortableHeader();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Daftar Pelanggan</h2>
            </div>
            <div className="table-responsive">
                <table className="table site-blocks-table">
                    <thead>
                        <tr>
                            <SortableHeader
                                label="Nama"
                                sortKey="name"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Email"
                                sortKey="email"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Total Pembelian"
                                sortKey="totalPurchases"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Tanggal Bergabung"
                                sortKey="joinDate"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Status</th>
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>John Doe</td>
                            <td>john.doe@email.com</td>
                            <td>Rp15.500.000</td>
                            <td>15 Jan 2025</td>
                            <td><span className="badge bg-success">Active</span></td>
                            <td>
                                <button className="btn btn-secondary btn-sm me-2">Detail</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Jane Smith</td>
                            <td>jane.smith@email.com</td>
                            <td>Rp8.750.000</td>
                            <td>20 Dec 2024</td>
                            <td><span className="badge bg-success">Active</span></td>
                            <td>
                                <button className="btn btn-secondary btn-sm me-2">Detail</button>
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

export default AdminCustomerListSection;
