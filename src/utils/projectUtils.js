// Shared color utility for consistent colors between Portfolio and ProjectModal
import { getProjectColor } from '../config/colors';

export const getProjectIconColor = (category, index = 0) => {
  console.log('getProjectIconColor called with:', { category, index });
  const color = getProjectColor(category, index);
  console.log('Returning color:', color);
  return color;
};

export const getProjectIconClass = (category) => {
  const categoryLower = category.toLowerCase();
  
  // GenAI/AI Projects
  if (categoryLower.includes('generative ai') || categoryLower.includes('genai') || 
      (categoryLower.includes('ai') && !categoryLower.includes('blockchain'))) {
    return 'fa fa-magic'; // Magic wand for GenAI (available in FA 4.0.3)
  } 
  // Blockchain Projects  
  else if (categoryLower.includes('blockchain') || categoryLower.includes('web3') || 
           categoryLower.includes('dao') || categoryLower.includes('nft') || 
           categoryLower.includes('defi')) {
    return 'fa fa-chain'; // Chain icon for Blockchain (available in FA 4.0.3)
  }
  // Data Projects
  else if (categoryLower.includes('data') || categoryLower.includes('privacy tech')) {
    return 'fa fa-bar-chart'; // Bar chart for data science (available in FA 4.0.3)
  }
  // Enterprise Solutions
  else if (categoryLower.includes('enterprise') || categoryLower.includes('fintech')) {
    return 'fa fa-building'; // Building for enterprise (available in FA 4.0.3)
  }
  // Developer Tools
  else if (categoryLower.includes('developer tools') || categoryLower.includes('automation')) {
    return 'fa fa-cogs'; // Cogs for tools (available in FA 4.0.3)
  }
  // Education/HR Tech
  else if (categoryLower.includes('edtech') || categoryLower.includes('hr tech') || 
           categoryLower.includes('identity')) {
    return 'fa fa-users'; // Users icon for HR/Identity (available in FA 4.0.3)
  }
  // Default
  return 'fa fa-code';
};