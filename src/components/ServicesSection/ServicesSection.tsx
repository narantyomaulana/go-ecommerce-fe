const services = [
    {
        icon: "images/truck.svg",
        title: "Pengiriman Cepat & Gratis",
        description: "Dapatkan pesanan Anda dengan cepat melalui layanan pengiriman kami yang dapat diandalkan dan gratis."
    },
    {
        icon: "images/bag.svg",
        title: "Pengalaman Belanja yang Mudah",
        description: "Nikmati perjalanan belanja yang lancar dan bebas repot dengan platform kami yang intuitif."
    },
    {
        icon: "images/support.svg",
        title: "Dukungan Pelanggan 24/7",
        description: "Butuh bantuan? Tim dukungan kami yang berdedikasi tersedia sepanjang waktu untuk membantu Anda."
    },
    {
        icon: "images/return.svg",
        title: "Pengembalian Tanpa Ribet",
        description: "Tidak puas? Kami menawarkan kebijakan pengembalian yang sederhana untuk pengalaman tanpa kekhawatiran."
    },
    {
        icon: "images/secure-payments.svg",
        title: "Pembayaran Aman",
        description: "Belanja dengan percaya diri menggunakan metode pembayaran yang terenkripsi dan terlindungi."
    },
    {
        icon: "images/exclusive-offers.svg",
        title: "Penawaran Eksklusif",
        description: "Dapatkan penawaran khusus dan diskon yang hanya tersedia untuk pelanggan kami yang berharga."
    },
    {
        icon: "images/quality-assurance.svg",
        title: "Jaminan Kualitas",
        description: "Kami memastikan kualitas terbaik di semua produk kami dengan pengujian yang ketat."
    },
    {
        icon: "images/loyalty-rewards.svg",
        title: "Hadiah Loyalitas",
        description: "Kumpulkan poin dan nikmati manfaat melalui program loyalitas pelanggan kami yang menguntungkan."
    }
];


function ServicesSection() {
    return (
        <div className="why-choose-section">
            <div className="container">
                <div className="row my-5">
                    {services.map((service, index) => (
                        <div key={index} className="col-6 col-md-6 col-lg-3 mb-4">
                            <div className="feature">
                                <div className="icon">
                                    <img src={service.icon} alt={service.title} className="img-fluid" />
                                </div>
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ServicesSection;
