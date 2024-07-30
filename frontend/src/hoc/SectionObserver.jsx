import { useEffect, useState } from "react";

const SectionObserver = ( sections ) => {
    const [activeSection, setActiveSection] = useState("");
    useEffect(() => {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(entry.target.id);
              }
            });
          },
          {
            threshold: 1, // Adjust this threshold as needed
          }
        );
    
        sections.forEach((section) => {
          observer.observe(document.getElementById(section));
        });
    
        return () => {
          sections.forEach((section) => {
            observer.unobserve(document.getElementById(section));
          });
        };
      }, [sections]);
    
      return activeSection;
};

export default SectionObserver;