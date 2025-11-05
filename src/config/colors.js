// Central color configuration for the entire website
// Change colors here to update them across all components

export const WEBSITE_COLORS = {
  // Primary brand colors
  primary: '#F06000',        // Orange - main brand color
  secondary: '#11ABB0',      // Teal - secondary brand color
  
  // Project category colors
  projectColors: {
    genai: '#9C27B0',        // Purple for GenAI projects
    blockchain: [             // Blue spectrum for Blockchain projects
      '#1976d2', 
      '#1565c0', 
      '#0277bd'
    ],
    other: [                 // Warm colors for other projects
      '#388e3c',             // Green
      '#7b1fa2',             // Purple
      '#5d4037',             // Brown
      '#455a64',             // Blue Grey
      '#e65100',             // Deep Orange
      '#bf360c'              // Red
    ]
  },

  // UI element colors
  ui: {
    background: '#0f0f0f',   // Dark background
    cardBackground: '#fff',   // White card background
    textPrimary: '#313131',   // Dark text
    textSecondary: '#838C95', // Grey text
    textMuted: '#4b5563',     // Muted text
    border: '#e5e7eb',        // Light border
    hover: '#f5f5f5'          // Hover background
  },

  // Status colors
  status: {
    success: '#10b981',       // Green
    warning: '#f59e0b',       // Amber
    error: '#ef4444',         // Red
    info: '#3b82f6'           // Blue
  },

  // Social media and external link colors
  social: {
    github: '#333333',
    linkedin: '#0077b5',
    twitter: '#1da1f2',
    email: '#ea4335'
  }
};

// Helper function to get project colors (same logic as before but centralized)
export const getProjectColor = (category, index = 0) => {
  const categoryLower = category.toLowerCase();
  
  // GenAI projects - Uniform color
  if (categoryLower.includes('generative ai') || categoryLower.includes('genai') || 
      (categoryLower.includes('ai') && !categoryLower.includes('blockchain'))) {
    return WEBSITE_COLORS.projectColors.genai;
  }
  // Blockchain projects - Rotating blue spectrum
  else if (categoryLower.includes('blockchain') || categoryLower.includes('web3') || 
           categoryLower.includes('dao') || categoryLower.includes('nft') || 
           categoryLower.includes('defi')) {
    const colors = WEBSITE_COLORS.projectColors.blockchain;
    return colors[index % colors.length];
  }
  // Other projects - Rotating warm colors
  else {
    const colors = WEBSITE_COLORS.projectColors.other;
    return colors[index % colors.length];
  }
};

// Helper function to get lighter/darker variations of colors
export const getColorVariation = (color, variation = 0.1) => {
  // Simple hex color lightening/darkening
  const hex = color.replace('#', '');
  const num = parseInt(hex, 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + Math.round(255 * variation)));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + Math.round(255 * variation)));
  const b = Math.min(255, Math.max(0, (num & 0x0000FF) + Math.round(255 * variation)));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
};

// CSS custom properties helper
export const setCSSCustomProperties = () => {
  const root = document.documentElement;
  
  // Set primary colors
  root.style.setProperty('--color-primary', WEBSITE_COLORS.primary);
  root.style.setProperty('--color-secondary', WEBSITE_COLORS.secondary);
  
  // Set UI colors
  root.style.setProperty('--color-background', WEBSITE_COLORS.ui.background);
  root.style.setProperty('--color-text-primary', WEBSITE_COLORS.ui.textPrimary);
  root.style.setProperty('--color-text-secondary', WEBSITE_COLORS.ui.textSecondary);
  root.style.setProperty('--color-text-muted', WEBSITE_COLORS.ui.textMuted);
  root.style.setProperty('--color-border', WEBSITE_COLORS.ui.border);
  root.style.setProperty('--color-hover', WEBSITE_COLORS.ui.hover);
  
  // Set project colors
  root.style.setProperty('--color-genai', WEBSITE_COLORS.projectColors.genai);
  
  // Set status colors
  root.style.setProperty('--color-success', WEBSITE_COLORS.status.success);
  root.style.setProperty('--color-warning', WEBSITE_COLORS.status.warning);
  root.style.setProperty('--color-error', WEBSITE_COLORS.status.error);
  root.style.setProperty('--color-info', WEBSITE_COLORS.status.info);
};

export default WEBSITE_COLORS;