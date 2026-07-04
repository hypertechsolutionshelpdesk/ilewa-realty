import { createContext, useState, useCallback } from 'react';
import { properties } from '@/data/properties';

export const PropertyContext = createContext();

export function PropertyProvider({ children }) {
  const [allProperties] = useState(properties);
  const [favorites, setFavorites] = useState([]);
  const [filters, setFilters] = useState({
    location: '',
    type: '',
    status: '',
    minPrice: 0,
    maxPrice: 500_000_000,
    bedrooms: '',
    bathrooms: ''
  });

  const toggleFavorite = useCallback((propId) => {
    setFavorites(prev =>
      prev.includes(propId)
        ? prev.filter(id => id !== propId)
        : [...prev, propId]
    );
  }, []);

  const isFavorite = useCallback((propId) => {
    return favorites.includes(propId);
  }, [favorites]);

  const updateFilters = useCallback((newFilters) => {
    setFilters(prev => ({ ...prev, ...newFilters }));
  }, []);

  const resetFilters = useCallback(() => {
    setFilters({
      location: '',
      type: '',
      status: '',
      minPrice: 0,
      maxPrice: 500_000_000,
      bedrooms: '',
      bathrooms: ''
    });
  }, []);

  const value = {
    allProperties,
    favorites,
    toggleFavorite,
    isFavorite,
    filters,
    updateFilters,
    resetFilters
  };

  return (
    <PropertyContext.Provider value={value}>
      {children}
    </PropertyContext.Provider>
  );
}
