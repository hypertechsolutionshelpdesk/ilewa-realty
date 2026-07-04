export const filterProperties = (properties, filters) => {
  return properties.filter(p => {
    if (filters.location && !p.location.neighborhood.toLowerCase().includes(filters.location.toLowerCase()))
      return false;
    if (filters.type && p.type !== filters.type)
      return false;
    if (filters.status && p.status !== filters.status)
      return false;
    if (filters.minPrice && p.price < filters.minPrice)
      return false;
    if (filters.maxPrice && p.price > filters.maxPrice)
      return false;
    if (filters.bedrooms && p.features.bedrooms < Number(filters.bedrooms))
      return false;
    if (filters.bathrooms && p.features.bathrooms < Number(filters.bathrooms))
      return false;
    return true;
  });
};

export const sortProperties = (properties, sortBy) => {
  const arr = [...properties];
  switch (sortBy) {
    case 'price-asc':
      return arr.sort((a, b) => a.price - b.price);
    case 'price-desc':
      return arr.sort((a, b) => b.price - a.price);
    case 'newest':
      return arr.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
    case 'popular':
      return arr.sort((a, b) => b.views - a.views);
    default:
      return arr;
  }
};
