import { Link } from "react-router-dom"

interface HeroSectionProps {
    title: string;
    subtitle: string;
}

function HeroSection(props: HeroSectionProps) {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>{props.title}</h1>
                            <p className="mb-4">{props.subtitle}</p>
                            <p>
                                <Link to="/shop" className="btn btn-secondary me-2">Belanja Sekarang</Link>
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="hero-img-wrap">
                            <img src="/images/couch.png" className="img-fluid" alt="Couch" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
