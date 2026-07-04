import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/common/PageWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { useContext, useState, useMemo } from 'react';
import { PropertyContext } from '@/context/PropertyContext';
import { filterProperties, sortProperties } from '@/utils/filterProperties';
import PropertyCard from '@/components/common/PropertyCard';
import { motion } from 'framer-motion';
import { staggerContainer, fadeUp } from '@/hooks/useScrollAnimation';
import './Properties.scss';

const CATEGORIES = [
  { label: 'All Properties', id: 'all', status: '', type: '', excludeType: '' },
  { label: '🏞️ Land', id: 'land', status: 'For Sale', type: 'Land', excludeType: '' },
  { label: '🏢 For Rent', id: 'rent', status: 'For Rent', type: '', excludeType: '' },
  { label: '🏠 For Sale', id: 'sale', status: 'For Sale', type: '', excludeType: 'Land' }
];

export default function Properties() {
  const { allProperties, filters, updateFilters } = useContext(PropertyContext);
  const [sortBy, setSortBy] = useState('newest');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    const activecat = CATEGORIES.find(c => c.id === activeCategory);
    const filterCopy = { ...filters };

    if (activecat?.status) {
      filterCopy.status = activecat.status;
    } else {
      delete filterCopy.status;
    }

    if (activecat?.type) {
      filterCopy.type = activecat.type;
    } else {
      delete filterCopy.type;
    }

    let result = filterProperties(allProperties, filterCopy);

    if (activecat?.excludeType) {
      result = result.filter(p => p.type !== activecat.excludeType);
    }

    return sortProperties(result, sortBy);
  }, [allProperties, filters, sortBy, activeCategory]);

  return (
    <PageWrapper>
      <Helmet>
        <title>Properties — IbadanRealty</title>
        <meta name="description" content="Browse verified property listings in Ibadan." />
      </Helmet>

      <section className="properties-hero">
        <div className="container">
          <h1>Browse Properties</h1>
          <p>Find your perfect property in Ibadan</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeader
          label="Our Listings"
          title="Featured Properties"
          subtitle={`Showing ${filtered.length} properties`}
        />

        <div className="properties-categories">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="properties-controls">
          <select value={sortBy} onChange={e => setSortBy(e.target.value)}>
            <option value="newest">Newest</option>
            <option value="price-asc">Price: Low to High</option>
            <option value="price-desc">Price: High to Low</option>
            <option value="popular">Most Popular</option>
          </select>
        </div>

        {filtered.length > 0 ? (
          <motion.div
            className="properties-grid"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            {filtered.map(property => (
              <motion.div key={property.id} variants={fadeUp}>
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <p className="text-center">No properties found. Try adjusting your filters.</p>
        )}
      </section>
    </PageWrapper>
  );
}
