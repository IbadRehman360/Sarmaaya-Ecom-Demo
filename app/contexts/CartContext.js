"use client"
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return { ...state, items: [...state.items, action.payload] };
        case 'REMOVE_FROM_CART':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };
        // Add more actions as needed
        default:
            return state;
    }
};

const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, { items: [] });

    useEffect(() => {
        // Load cart data from localStorage on component mount
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
        }
    }, []);

    useEffect(() => {
        // Save cart data to localStorage whenever it changes
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};
const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export { CartProvider, useCart };