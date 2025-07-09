import ProductHighlightSection from '../../components/ProductHighlightSection/ProductHighlightSection';
import WhyChooseUsSection from '../../components/WhyChooseUsSection/WhyChooseUsSection';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    return (
        <>
            <HeroSection
                title='Studio Desain Interior Modern'
                subtitle='Ubah ruang Anda dengan keanggunan abadi dan estetika modern. Kami menciptakan interior yang memadukan fungsionalitas dengan keanggunan, disesuaikan dengan gaya unik Anda.'
            />

            <ProductHighlightSection />

            <WhyChooseUsSection />
        </>
    );
};

export default Home;
