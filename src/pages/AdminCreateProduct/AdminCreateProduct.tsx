import PlainHeroSection from '../../components/PlainHeroSection/PlainHeroSection'
import ProductForm from '../../components/ProductForm/ProductForm'

function AdminCreateProduct() {
    return (
        <>
            <PlainHeroSection title='Tambah Produk' />

            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminCreateProduct;
