
export const fadeIn = (delay = 0) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  });
  
  export const fadeInLeft = (delay = 0) => ({
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  });
  
  export const fadeInRight = (delay = 0) => ({
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  });
  
  export const scaleIn = (delay = 0) => ({
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay,
        duration: 0.6,
        ease: [0.23, 1, 0.32, 1]
      }
    }
  });
  
  export const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };