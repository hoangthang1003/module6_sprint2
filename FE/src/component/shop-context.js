import React, {createContext, useEffect, useState} from "react";
import {productService} from "../service/ProductService";
import {CartService} from "../service/CartService";

export const ShopContext = createContext(null);


export const ShopContextProvider = (props) => {
    const [products, setProducts] = useState([]);
    const getList = async () => {
        const productsData = await productService.show();
        setProducts(productsData);
        console.log(productsData)
    };
    const token = localStorage.getItem("token");
    const username = localStorage.getItem("username");
    useEffect(() => {
        getList();
        }, []);

    useEffect(() => {
        // Lấy dữ liệu từ sessionStorage
        const storedItems = JSON.parse(sessionStorage.getItem('store'));

        if (!storedItems) {
            // Nếu không có dữ liệu trong store, thì mới gọi getDefaultCart
            const defaultCart = getDefaultCart();
            setCartItems(defaultCart);
        } else {
            // Nếu có dữ liệu trong store, cập nhật cartItems từ dữ liệu đã lưu
            setCartItems(storedItems);
        }

    }, []);



    // useEffect(() => {
    //     const defaultCart = getDefaultCart();
    //     setCartItems(defaultCart);
    // }, [products]);

    const getDefaultCart = () => {
        const cart = {};
        for (let i = 1; i < products.length + 1; i++) {
            cart[i] = 0;
        }
        return cart;
    };
    const [cartItems, setCartItems] = useState({});



    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = products.find((product) => product.idProduct === Number(item));
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };
    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            totalItems += cartItems[item];
        }
        return totalItems;
    };
    // const fetchDataFromBackend = async () => {
    //     try {
    //         const response = await CartService.findCartByCustomerId(token);
    //         setCartItems(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    // useEffect(()=>{
    //     fetchDataFromBackend()
    // },[])

    const addToCart = (itemId) => {
        setCartItems((prevCart) => {
            const newCart = { ...prevCart };
            newCart[itemId] = (newCart[itemId] || 0) + 1;
            return newCart;
        });
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
    };

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}));
    };

    const checkout = () => {
        setCartItems(getDefaultCart());
    };


    useEffect(() => {
        const storedItems = JSON.parse(sessionStorage.getItem('store'));
        if (storedItems) {
            setCartItems(storedItems);
        }
    },[])
    useEffect(() => {
        // Lưu giữ liệu vào localStorage mỗi khi cartItems thay đổi
        sessionStorage.setItem('store', JSON.stringify(cartItems));
    }, [cartItems]);


    // useEffect(() => {
    //     // Gửi dữ liệu vào backend sau 5 phút nếu không có cập nhật trong cartItems
    //     const timeout = setTimeout(() => {
    //         if (username) {
    //             // Gọi hàm để đẩy dữ liệu vào backend ở đây
    //             CartService.addCart(cartItems,token);
    //             console.log('Đẩy dữ liệu vào backend...');
    //         }
    //         // else alert("Bạn cần đăng nhập để lưu dữ liệu cũ vào đây")
    //     },   60 *1000); // 5 phút
    //
    //     // Xóa timeout khi component unmount hoặc khi cartItems thay đổi (để tránh đẩy dữ liệu không cần thiết)
    //     return () => clearTimeout(timeout);
    // }, [cartItems]);
    const contextValue = {
        products,
        cartItems,
        addToCart,
        updateCartItemCount,
        removeFromCart,
        getTotalCartAmount,
        // checkout,
        getTotalCartItems
    };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};
