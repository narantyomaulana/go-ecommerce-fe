interface PlainHeroSection {
    title: string;
}

function PlainHeroSection(props: PlainHeroSection) {
    return (
        <div className="hero">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-5">
                        <div className="intro-excerpt">
                            <h1>{props.title}</h1>
                        </div>
                    </div>
                    <div className="col-lg-7">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default PlainHeroSection;
