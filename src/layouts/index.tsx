import { useEffect, useState } from 'react';
import { Outlet, useLocation } from 'umi';
import './index.css';

export default function Layout() {
  const location = useLocation();
  const [showBack, setShowBack] = useState(false);
  const handleBack = () => {
    // @ts-ignore
    const transition = document.createDocumentTransition();
    transition.start(() => {
      history.back();
    });
  }

  useEffect(() => {
    setShowBack(location.pathname !== '/');
  }, [location.pathname]);


  return (
    <div>
      <div className="main-header">{showBack ? <button onClick={handleBack}>back</button> : null}导航栏</div>
      <Outlet />
    </div>
  );
}
