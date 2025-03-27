
/**
 * Handles the reveal animation for elements with the "reveal" class
 */
export const setupRevealAnimations = () => {
  const handleScroll = () => {
    const reveals = document.querySelectorAll(".reveal");
    
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active");
      }
    });
  };
  
  window.addEventListener("scroll", handleScroll);
  // Trigger once on load
  setTimeout(handleScroll, 100);
  
  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
};
