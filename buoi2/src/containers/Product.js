import { useState, useEffect, useRef } from "react";
import axios from "axios";

export default function Product() {
    const detailRef = useRef(null);
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/product")
            .then((response) => {
                if (response.status === 200) {
                    setProducts(response.data.products);
                }
            })
            .catch((error) => {
                console.error("Có lỗi xảy ra khi gọi API:", error);
            });
    }, []);

    const [detailProducts, setDetailProducts] = useState(null);
    useEffect(() => {
        axios.get("http://localhost:8080/detailProduct")
            .then((response) => {
                if (response.status === 200) {
                    setDetailProducts(response.data.detail);
                }
            })
            .catch((error) => {
                console.error("Có lỗi xảy ra khi gọi API:", error);
            });
    }, []);

    const [type, setType] = useState([])
    useEffect(() => {
        axios.get("http://localhost:8080/type")
            .then((response) => {
                if (response.status === 200) {
                    setType(response.data.type);
                }
            })
            .catch((error) => {
                console.error("Có lỗi xảy ra khi gọi API:", error);
            });
    }, []);

    const [detailProduct, setDetailProduct] = useState(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (detailRef.current && !detailRef.current.contains(event.target)) {
                setDetailProduct(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
    const onViewDetail = (product) => {
        setDetailProduct(product);
    };
    const listProduct = products.map((product) => {
        return (
            <article className=" w-full lg:h-[350px] h-[250px] flex p-2 flex-col items-center rounded-md ">
                <div className="relative group hover:grow hover:scale-105 hover:shadow-xl transition ease-in-out duration-200">

                    <img className="mb-2.5 w-full lg:h-[250px] bg-gray-400 h-[150px] rounded-sm transition duration-300 ease-in-out" src={require(`../../uploads/${product.hinhanh}`)} alt={`Image of ${product.tensp}`} />
                    <div className="absolute items-center lg:h-[250px] h-[150px] w-full top-0 bg-black hidden group-hover:bg-opacity-40 group-hover:flex justify-center transition ease-in-out duration-200">
                        <div className="flex flex-col justify-between items-center h-1/3">
                            <button onClick={onViewDetail} className="text-black text-center px-2.5 py-1.5 bg-gray-100 rounded-md shadow-md hover:bg-gray-300 transition ease-in-out duration-200">Xem chi tiết</button>
                        </div>

                        <div className="pt-1 flex items-center justify-between group-hover:px-3 transition ease-in-out duration-200">
                            <p className="mb-4"><strong>{product.tensp}</strong></p>
                            <p className="mb-4"><strong>{product.giasp}</strong></p>
                        </div>
                        <p className="mb-8 group-hover:px-3 transition ease-in-out duration-200">{product.thongtinchitiet}</p>
                    </div>
                </div>
            </article>
        );
    });

    return (
        <div className="relative w-screen">
            <h2 className="lg:text-3xl text-xl tracking-wide font-bold uppercase text-center">Sản phẩm</h2>
            <div className="container mx-auto grid md:grid-cols-3 xl:grid-cols-4 grid-cols-2 gap-5 pt-4 pb-12 ">
                {listProduct}
            </div>
            <div className={`absolute top-0 w-full h-[30rem] justify-center items-start pt-20 ${detailProduct ? 'flex' : 'hidden'}`}>
                <div ref={detailRef} className="container mx-auto h-full w-1/3 xl:w-1/4 flex items-center justify-around flex-col shadow-xl rounded-md bg-slate-200">
                    <h2 className="text-black text-2xl font-bold">Chi tiết sản phẩm</h2>
                    {detailProduct && (
                        <>
                            <img className="w-1/3 h-1/3" src={require(`../../uploads/${detailProduct.hinhanh}`)} alt="product" />
                            <div className="flex flex-col justify-start w-full pl-4">
                                <div >
                                    <div className="flex ">     
                                        <p className="text-black text-lg font-bold">Mã sản phẩm:</p>
                                        <p className="text-black text-lg">{detailProduct.masp}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-black text-lg font-bold">Tên sản phẩm: </p>
                                        <p className="text-black text-lg">{detailProduct.tensp}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-black text-lg font-bold">Giá: </p>
                                        <p className="text-black text-lg">{detailProduct.giasp}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-black text-lg font-bold">Loại sản phẩm: </p>
                                        <p className="text-black text-lg">{detailProduct.loaisp}</p>
                                    </div>
                                    <div className="flex">
                                        <p className="text-black text-lg font-bold">Nhà sản xuất: </p>
                                        <p className="text-black text-lg">{detailProduct.tennsx}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex justify-center items-center flex-col">
                                <p className="text-black text-lg font-bold">Chi tiết sản phẩm</p>
                                <p className="text-black text-lg px-4">{detailProduct.thongtinchitiet}</p>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
