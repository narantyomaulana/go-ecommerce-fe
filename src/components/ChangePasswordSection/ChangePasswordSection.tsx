function ChangePasswordSection() {
    return (
        <div className="p-4 p-lg-5 border bg-white">
            <h2 className="h3 mb-3 text-black">Ubah Kata Sandi</h2>
            <div className="form-group">
                <label className="text-black" htmlFor="current_password">Kata Sandi Saat Ini</label>
                <input type="password" className="form-control" id="current_password" />
            </div>
            <div className="form-group">
                <label className="text-black" htmlFor="new_password">Kata Sandi Baru</label>
                <input type="password" className="form-control" id="new_password" />
            </div>
            <div className="form-group mb-3">
                <label className="text-black" htmlFor="confirm_password">Konfirmasi Kata Sandi Baru</label>
                <input type="password" className="form-control" id="confirm_password" />
            </div>
            <button className="btn btn-primary">Perbarui Kata Sandi</button>
        </div>
    )
}

export default ChangePasswordSection;
