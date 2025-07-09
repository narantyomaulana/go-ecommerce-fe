import { Link } from 'react-router-dom';
import PlainHeroSection from '../../components/PlainHeroSection/PlainHeroSection';

function CheckoutSuccess() {
    return (
        <>
            <PlainHeroSection title='Pesanan Dikonfirmasi' />

            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <div className="p-4 p-lg-5 border bg-white">
                                <div className="text-center mb-4">
                                    <span className="display-3 thankyou-icon mb-4">
                                        <i className="bi bi-check-circle-fill"></i>
                                    </span>
                                    <h2 className="text-black">Terima kasih atas pesanan Anda!</h2>
                                </div>

                                <div className="row mb-4">
                                    <div className="col-12">
                                        <div className="border-bottom pb-2">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-black">Nomor Pesanan:</span>
                                                <strong className="text-black">#ORD-2025000001</strong>
                                            </div>
                                        </div>
                                        <div className="border-bottom py-2">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-black">Total yang harus dibayar:</span>
                                                <strong className="text-black">Rp5.500.000</strong>
                                            </div>
                                        </div>
                                        <div className="py-2 border-bottom">
                                            <div className="d-flex justify-content-between">
                                                <span className="text-black">Batas waktu pembayaran:</span>
                                                <strong className="text-black">30 November 2023 23:59</strong>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-center">
                                    <a
                                        href={"#"}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary mb-3"
                                    >
                                        Bayar Sekarang
                                    </a>
                                    <div>
                                        <Link to="/shop" className="btn btn-secondary me-2">Lanjut Belanja</Link>
                                        <Link to="/profile/orders" className="btn btn-primary">Lihat Riwayat Pesanan</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CheckoutSuccess;
