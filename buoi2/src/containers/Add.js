import React, { useState } from 'react';

export default function Add() {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState('');

  const handleCheck = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].checked = !updatedProducts[index].checked;
    setProducts(updatedProducts);
  };

  const handleDelete = (index) => {
    const updatedProducts = products.filter((_, i) => i !== index);
    setProducts(updatedProducts);
  };

  const handleEdit = (index) => {
    const newName = prompt('Enter new name', products[index].name);
    if (newName) {
      const updatedProducts = [...products];
      updatedProducts[index].name = newName;
      setProducts(updatedProducts);
    }
  };

  const handleAdd = () => {
    if (newProduct.trim()) {
      setProducts([...products, { name: newProduct, checked: false }]);
      setNewProduct('');
    }
  };

  return (
    <div className='flex w-screen h-screen items-center justify-center'>
    <div className='flex flex-col justify-center h-1/2'>
    <div className='flex items-center'>
      <h3>Thêm sản phẩm mới:</h3>
      <input className='border border-black rounded ml-2.5 pl-2 py-0.5'
        type="text"
        value={newProduct}
        onChange={(e) => setNewProduct(e.target.value)}
        placeholder="Tên sản phẩm"
      />
      <button className='bg-slate-100 px-2 py-1 shadow-md hover:bg-slate-200 ml-3' onClick={handleAdd}>Add</button>
      </div>
    
      <ul className='flex flex-col mt-5'>
        {products.map((product, index) => (
          <li className='flex items-center justify-between w-full' key={index}>
            <div className='flex mt-6'>
            <input
            className='mr-1'
              type="checkbox"
              checked={product.checked}
              onChange={() => handleCheck(index)}
            />
            <p>{product.name}</p>
            </div>
            <div className='flex justify-end w-1/2 flex-end'>
            <button className='bg-blue-200 px-2 py-1 w-16 shadow-md hover:bg-blue-300 ' onClick={() => handleEdit(index)}>Edit</button>
            <button className='bg-red-200 px-2 py-1 w-16 shadow-md hover:bg-red-300 ml-2' onClick={() => handleDelete(index)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    
    </div>
    </div>
  );
}

