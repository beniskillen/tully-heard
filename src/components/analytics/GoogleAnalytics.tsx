import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { googleAnalyticsId, loadGoogleAnalytics, trackPageView } from '@/lib/analytics';

export const GoogleAnalytics = () => {
  const { pathname, search } = useLocation();
  const measurementId = googleAnalyticsId();

  useEffect(() => {
    if (!measurementId) return;
    loadGoogleAnalytics(measurementId);
    trackPageView(measurementId, `${pathname}${search}`);
  }, [measurementId, pathname, search]);

  return null;
};
