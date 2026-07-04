import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import PageWrapper from '@/components/common/PageWrapper';
import './NotFound.scss';

export default function NotFound() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Page Not Found — IbadanRealty</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <div className="not-found">
        <div className="not-found__content">
          <div className="not-found__code">404</div>
          <h1>Page Not Found</h1>
          <p>Sorry, the page you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="not-found__link">
            Back to Home
          </Link>
        </div>
      </div>
    </PageWrapper>
  );
}
