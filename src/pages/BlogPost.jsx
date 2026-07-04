import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import PageWrapper from '@/components/common/PageWrapper';
import { blogPosts } from '@/data/blogPosts';
import { FiArrowLeft } from 'react-icons/fi';
import './BlogPost.scss';

export default function BlogPost() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <PageWrapper>
        <div className="container" style={{ paddingTop: '200px', textAlign: 'center' }}>
          <h1>Blog Post Not Found</h1>
          <button onClick={() => navigate('/blog')}>Back to Blog</button>
        </div>
      </PageWrapper>
    );
  }

  return (
    <PageWrapper>
      <Helmet>
        <title>{post.title} — IbadanRealty Blog</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>

      <article className="blog-post">
        <div className="container container--narrow">
          <button className="back-btn" onClick={() => navigate('/blog')}>
            <FiArrowLeft /> Back to Blog
          </button>

          <header className="blog-post__header">
            <span className="blog-category">{post.category}</span>
            <h1>{post.title}</h1>
            <div className="blog-meta">
              <span className="blog-author">By {post.author}</span>
              <span className="blog-date">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span className="blog-read-time">{post.readTime}</span>
            </div>
          </header>

          <img
            src={post.image}
            alt={post.title}
            className="blog-post__image"
            loading="lazy"
          />

          <div className="blog-post__content">
            {post.content.split('\n').map((paragraph, idx) => {
              if (paragraph.trim().startsWith('##')) {
                return <h2 key={idx}>{paragraph.replace('## ', '')}</h2>;
              }
              if (paragraph.trim().startsWith('###')) {
                return <h3 key={idx}>{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.trim()) {
                return <p key={idx}>{paragraph}</p>;
              }
              return null;
            })}
          </div>
        </div>
      </article>
    </PageWrapper>
  );
}
