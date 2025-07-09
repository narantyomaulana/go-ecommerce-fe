import { useState } from "react";

function Footer() {
    const currentYear = new Date().getFullYear();
    const [showModal, setShowModal] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you can add newsletter subscription logic
        setShowModal(true);
        // setName('');
        // setEmail('');
    };

    return (
        <footer className="footer-section">
            <div className="container relative">
                <div className="sofa-img">
                    <img src="/images/sofa.png" alt="Sofa" className="img-fluid" />
                </div>

                <div className="row">
                    <div className="col-lg-8">
                        <div className="subscription-form">
                            <h3 className="d-flex align-items-center">
                                <span className="me-1">
                                    <img src="/images/envelope-outline.svg" alt="Amplop" className="img-fluid" />
                                </span>
                                <span>Langganan Newsletter</span>
                            </h3>

                            <form className="row g-3" onSubmit={handleSubmit}>
                                <div className="col-auto">
                                    <input type="text" className="form-control" placeholder="Masukkan nama Anda" />
                                </div>
                                <div className="col-auto">
                                    <input type="email" className="form-control" placeholder="Masukkan email Anda" />
                                </div>
                                <div className="col-auto">
                                    <button className="btn btn-primary">
                                        <span className="fa fa-paper-plane"></span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div className="border-top copyright">
                    <div className="row pt-4">
                        <div className="col-lg-6">
                            <p className="mb-2 text-center text-lg-start">
                                Copyright &copy;{currentYear}. All Rights Reserved. &mdash; Designed with love by
                                <a href="https://untree.co"> Untree.co</a> Distributed By
                                <a href="https://themewagon.com"> ThemeWagon</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Success Modal */}
            <div className={`modal fade ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-body text-center p-5">
                            <i className="bi bi-check-circle-fill display-1 mb-4"></i>
                            <h3>Terima Kasih!</h3>
                            <p>Anda telah berhasil berlangganan newsletter kami.</p>
                            <button className="btn btn-primary" onClick={() => setShowModal(false)}>Tutup</button>
                        </div>
                    </div>
                </div>
                <div className="modal-backdrop fade show"></div>
            </div>
        </footer>
    )
}

export default Footer