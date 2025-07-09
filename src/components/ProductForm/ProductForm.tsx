function ProductForm() {
    return (
        <div className="p-4 p-lg-5 border bg-white">
            <div className="form-group mb-3">
                <label className="text-black" htmlFor="product_name">Nama Produk <span className="text-danger">*</span></label>
                <input type="text" className="form-control" id="product_name" placeholder="Nama Produk" />
            </div>

            <div className="form-group mb-3">
                <label className="text-black" htmlFor="product_price">Harga <span className="text-danger">*</span></label>
                <input type="number" className="form-control" id="product_price" placeholder="Harga Produk" />
            </div>

            <div className="form-group mb-3">
                <label className="text-black" htmlFor="product_image">Gambar Produk <span className="text-danger">*</span></label>
                <input type="file" className="form-control" id="product_image" accept="image/*" />
            </div>

            <div className="form-group mb-4">
                <label className="text-black" htmlFor="product_description">Deskripsi</label>
                <textarea className="form-control" id="product_description" rows={4} placeholder="Deskripsi produk..."></textarea>
            </div>

            <div className="form-group">
                <button className="btn btn-primary">Simpan Produk</button>
            </div>
        </div>
    )
}

export default ProductForm;
