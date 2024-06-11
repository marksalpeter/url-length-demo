import { useEffect, useState } from 'react';

export const useUserAgent = () => {
  const [userAgent, setUserAgent] = useState<string | null>(null);

  useEffect(() => {
    setUserAgent(window.navigator.userAgent);
  }, []);

  return { userAgent };
}