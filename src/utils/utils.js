export const detectScreen = (screenType) => {
    const isMobile = window.innerWidth <= 760;
    const isDesktop = window.innerWidth >= 1200;
    const isTablet = window.innerWidth >= 768;

    if (screenType === 'mobile') {
      return isMobile;
    }

    if (screenType === 'tablet') {
      return isTablet;
    }

    if (screenType === 'desktop') {
      return isDesktop;
    }
}