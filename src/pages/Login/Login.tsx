import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className="login-section">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-5">
                        <div className="login-wrap p-4">
                            <h2 className="section-title text-center mb-5">Masuk</h2>
                            <form action="#" className="login-form">
                                <div className="form-group mb-4">
                                    <input type="email" className="form-control" placeholder="Alamat Email" required />
                                </div>
                                <div className="form-group mb-4">
                                    <input type="password" className="form-control" placeholder="Kata Sandi" required />
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary btn-block">Masuk</button>
                                </div>
                                <div className="text-center mt-4">
                                    <p>Belum punya akun? <Link to="/register" className="text-primary">Daftar di sini</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;