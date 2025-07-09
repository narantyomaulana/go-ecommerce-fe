import { Link } from "react-router-dom"

function AdminOrderDetail() {
    return (
        <div className="admin-dashboard py-5">
            <div className="container">
                <div className="bg-white p-4 rounded-3">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2 className="section-title">Pesanan #ORD-2025000001</h2>
                        <Link to="/admin">
                            <button className="btn btn-primary">
                                Kembali ke Pesanan
                            </button>
                        </Link>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-4">
                            <h3 className="h4 mb-3">Informasi Pelanggan</h3>
                            <div className="p-3 border rounded">
                                <p className="mb-2"><strong>Nama:</strong> John Doe</p>
                                <p className="mb-2"><strong>Telepon:</strong> +6281234567890</p>
                                <p className="mb-2"><strong>Alamat:</strong> Jl. Mawar No. 123, Jakarta, Indonesia</p>
                                <p className="mb-0"><strong>Catatan:</strong> Mohon dikirim pagi hari</p>
                            </div>
                        </div>

                        <div className="col-md-6 mb-4">
                            <h3 className="h4 mb-3">Status Pesanan</h3>
                            <div className="p-3 border rounded">
                                <p className="mb-2"><strong>Status Saat Ini:</strong> <span className="badge bg-warning">Diproses</span></p>
                                <p className="mb-2"><strong>Tanggal Pesanan:</strong> 15 Januari 2025</p>
                                <div className="mt-3">
                                    <select className="form-select mb-2">
                                        <option value="pending">Menunggu</option>
                                        <option value="processing">Diproses</option>
                                        <option value="shipped">Dikirim</option>
                                        <option value="delivered">Diterima</option>
                                    </select>
                                    <button className="btn btn-primary w-100">Perbarui Status</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-12">
                            <h3 className="h4 mb-3">Item Pesanan</h3>
                            <div className="table-responsive">
                                <table className="table site-blocks-table">
                                    <thead>
                                        <tr>
                                            <th>Produk</th>
                                            <th>Harga</th>
                                            <th>Kuantitas</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Kaos Top Up</td>
                                            <td>Rp50.000</td>
                                            <td>1</td>
                                            <td>Rp50.000</td>
                                        </tr>
                                        <tr>
                                            <td>Kemeja Polo</td>
                                            <td>Rp100.000</td>
                                            <td>1</td>
                                            <td>Rp100.000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-end"><strong>Subtotal</strong></td>
                                            <td>Rp150.000</td>
                                        </tr>
                                        <tr>
                                            <td colSpan={3} className="text-end"><strong>Total</strong></td>
                                            <td><strong>Rp150.000</strong></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminOrderDetail
