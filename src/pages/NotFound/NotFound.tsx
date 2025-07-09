import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="hero not-found">
            <div className="container">
                <div className="row justify-content-center align-items-center text-center" style={{ minHeight: "60vh" }}>
                    <div className="col-lg-6">
                        <div className="intro-excerpt">
                            <h1 className="mb-4">404</h1>
                            <h2 className="mb-4" style={{ color: "#f9bf29" }}>Page Not Found</h2>
                            <p className="mb-5">The page you're looking for doesn't exist or has been moved.</p>
                            <p><Link to="/" className="btn btn-secondary me-2">Back to Home</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound