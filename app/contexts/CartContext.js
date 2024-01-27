"use client"
import React, { createContext, useReducer, useContext, useEffect } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            const productToAdd = {
                ...action.payload,
                quantity: 1
            };
            return { ...state, items: [...state.items, productToAdd] };

        case 'REMOVE_FROM_CART':
            return { ...state, items: state.items.filter(item => item.id !== action.payload) };

        case 'INCREASE_QUANTITY':
            const increasedItems = state.items.map(item => {
                if (item.id === action.payload) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });

            return { ...state, items: increasedItems };

        case 'DECREASE_QUANTITY':
            const decreasedItems = state.items.map(item => {
                if (item.id === action.payload && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                }
                return item;
            });

            return { ...state, items: decreasedItems };

        default:
            return state;
    }
};


const CartProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, { items: [] });

    useEffect(() => {
        const savedCart = localStorage.getItem('cart');
        if (savedCart) {
            dispatch({ type: 'SET_CART', payload: JSON.parse(savedCart) });
        }
    }, []);

    useEffect(() => {
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