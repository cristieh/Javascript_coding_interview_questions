function fixNames(names) {
    if (names.length === 0) {
      return '';
    }
  
    const uniqueNames = {};
    const fixedNames = [];
  
    names.forEach((name) => {
      const words = name.trim().split(/\s+/);
      const fixedName = words
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())            
        .join(' ');
  
      if (!uniqueNames[fixedName]) {
       uniqueNames[fixedName] = true;
        fixedNames.push(fixedName);
      }
    });
  
    return fixedNames.join(', ');
  }
  
  // Example usage:
  const inputNames = [" mr \trOgeRs", "TiM\n\nsmIth", "cRiSTIE", "", "alessIO", "hEnrY"];
  const result = fixNames(inputNames);
  console.log(result); // Output: 'Mr Rogers, Tim Smith'

  
