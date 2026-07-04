import { Helmet } from 'react-helmet-async';
import PageWrapper from '@/components/common/PageWrapper';
import SectionHeader from '@/components/common/SectionHeader';
import { blogPosts } from '@/data/blogPosts';
import { Link } from 'react-router-dom';
import './Blog.scss';

export default function Blog() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Blog — IbadanRealty</title>
        <meta name="description" content="Real estate insights and guides for Ibadan property buyers." />
      </Helmet>

      <section className="blog-hero">
        <div className="container">
          <h1>Real Estate Blog</h1>
          <p>Insights, guides, and stories from Ibadan's property market</p>
        </div>
      </section>

      <section className="section container">
        <SectionHeader label="Blog Posts" title="Latest Articles" />
        <div className="blog-grid">
          {blogPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-card__image">
                <img src={post.image} alt={post.title} loading="lazy" />
              </div>
              <div className="blog-card__content">
                <span className="blog-card__category">{post.category}</span>
                <h3 className="blog-card__title">{post.title}</h3>
                <p className="blog-card__excerpt">{post.excerpt}</p>
                <div className="blog-card__meta">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString()}</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/blog/${post.slug}`} className="blog-card__link">
                  Read More →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
