import { useEffect } from 'react'

import "preline/preline"

export default function usePreline() {
  
  useEffect(() => {

    import("preline/preline").then(() => {

      if (window.HSStaticMethods) {
        window.HSStaticMethods.autoInit();
      }
    });
  }, []);
  
}