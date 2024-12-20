import React, { useState } from "react";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");

  const handleAdd = () => {
    const name = prompt("Nhập tên hàng hóa:");
    const price = prompt("Nhập giá hàng hóa:");
    if (name && price) {
      setItems([...items, { name, price: parseFloat(price) }]);
    }
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleEdit = (index) => {
    const updatedItems = [...items];
    const name = prompt("Cập nhật tên:", updatedItems[index].name);
    const price = prompt("Cập nhật giá:", updatedItems[index].price);
    if (name && price) {
      updatedItems[index] = { name, price: parseFloat(price) };
      setItems(updatedItems);
    }
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const total = items.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="App">
      <h1>Bảng Thông Tin</h1>
      <div className="actions">
        <button className="btn-add" onClick={handleAdd}>
          Thêm Hàng Hóa
        </button>
        <input
          type="text"
          placeholder="Tìm kiếm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Tên</th>
            <th>Giá</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>
                <button className="btn-edit" onClick={() => handleEdit(index)}>
                  Chỉnh sửa
                </button>
                <button className="btn-delete" onClick={() => handleDelete(index)}>
                  Xóa
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td><b>Tổng số</b></td>
            <td><b>{total}</b></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <div className="pagination">
        <button disabled>Trước</button>
        <span>Trang 1/1</span>
        <button disabled>Sau</button>
      </div>
    </div>
  );
}

export default App;
