import HeroSection from '../../components/HeroSection/HeroSection';
import ServicesSection from '../../components/ServicesSection/ServicesSection';
import ProductHighlightSection from '../../components/ProductHighlightSection/ProductHighlightSection';

const Services = () => {
    return (
        <>
            <HeroSection
                title="Layanan"
                subtitle="Rasakan solusi desain interior berkualitas tinggi yang disesuaikan dengan kebutuhan Anda. Dari konsep hingga penyelesaian, kami mewujudkan visi Anda dengan elegansi dan presisi."
            />

            <ServicesSection />

            <ProductHighlightSection beforeFooter />
        </>
    );
};

export default Services;
