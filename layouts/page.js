import Meta from '../components/meta';
import AppHeader from '../components/app-header';

export default ({children}) => (
  <div>
    <Meta />
    <AppHeader />
    <div className="page-content">
      {children}
    </div>
    <style jsx>{`
      .page-content {
        padding: 10px;
      }
    `}
    </style>
  </div>
);