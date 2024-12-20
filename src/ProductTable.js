import React, { useState } from "react";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleAddProduct = () => {
    const newProduct = { id: products.length + 1, name: "Hàng hóa mới", price: 0 };
    setProducts([...products, newProduct]);
  };

  const handleEdit = (id) => {
    alert(`Chỉnh sửa sản phẩm có ID: ${id}`);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <button className="btn btn-primary mb-3" onClick={handleAddProduct}>
        Thêm Hàng Hóa
      </button>
      <input
        type="text"
        placeholder="Tìm kiếm..."
        className="form-control mb-3"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => handleEdit(product.id)}
                  >
                    Chỉnh sửa
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(product.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3" className="text-center">
                Không có dữ liệu
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
