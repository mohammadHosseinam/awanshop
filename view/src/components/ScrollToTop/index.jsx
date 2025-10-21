import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const params = useParams(); // گرفتن پارامترهای URL

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname, params , location.pathname]); // وقتی مسیر یا پارامترها تغییر کرد، اسکرول به بالا می‌رود

  return null;
};

export default ScrollToTop;
