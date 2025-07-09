import React, { useState } from 'react'
import useSortableHeader from '../../hooks/useSortableHeader';
import SortableHeader from '../SortableHeader/SortableHeader';
import Pagination from '../Pagination/Pagination';
import { Link } from 'react-router-dom';

function AdminProductListSection() {
    const { handleSort, sortConfig } = useSortableHeader();
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    return (
        <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
                <h2 className="section-title">Produk</h2>
                <Link to="/admin/products/create">
                    <button className="btn btn-primary">Tambah Produk</button>
                </Link>
            </div>
            <div className="table-responsive">
                <table className="table site-blocks-table">
                    <thead>
                        <tr>
                            <th>Gambar</th>
                            <SortableHeader
                                label="Nama Produk"
                                sortKey="name"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Harga"
                                sortKey="price"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <SortableHeader
                                label="Deskripsi"
                                sortKey="description"
                                currentSort={sortConfig}
                                onSort={handleSort}
                            />
                            <th>Aksi</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <img src="/images/product-1.png" width="50" alt="Produk" />
                            </td>
                            <td>Kursi Nordic</td>
                            <td>Rp775.000</td>
                            <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, ipsam?</td>
                            <td>
                                <button className="btn btn-secondary me-2">Edit</button>
                                <button className="btn">Hapus</button>
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

export default AdminProductListSection;
