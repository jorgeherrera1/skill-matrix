import Meta from '../components/meta';
import AppHeader from '../components/app-header';

export default ({children}) => (
  <div>
    <Meta />
    <AppHeader />
    {children}
  </div>
);