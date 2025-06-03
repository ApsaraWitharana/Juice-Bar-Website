import React from 'react';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';
import { Minus, Plus, X } from 'lucide-react';

export const Cart: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, getCartTotal } = useCart();

  const cartItems = items.map(item => ({
    ...item,
    product: products.find(p => p.id === item.id)!
  }));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      
      <div className="absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-xl">
        <div className="flex h-full flex-col">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <h2 className="text-lg font-semibold">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="rounded-full p-1 hover:bg-gray-100"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {cartItems.length === 0 ? (
            <div className="flex-1 p-4 text-center">
              <p className="text-gray-500">Your cart is empty</p>
            </div>
          ) : (
            <>
              <div className="flex-1 overflow-y-auto p-4">
                {cartItems.map(({ product, quantity }) => (
                  <div key={product.id} className="mb-4 flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-16 w-16 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium">{product.name}</h3>
                      <p className="text-sm text-gray-500">${product.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateQuantity(product.id, quantity - 1)}
                        className="rounded-full p-1 hover:bg-gray-100"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, quantity + 1)}
                        className="rounded-full p-1 hover:bg-gray-100"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="ml-2 rounded-full p-1 hover:bg-gray-100"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t p-4">
                <div className="mb-4 flex justify-between">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">${getCartTotal().toFixed(2)}</span>
                </div>
                <button className="btn-primary w-full">
                  Proceed to Checkout
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};