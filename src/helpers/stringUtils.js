/**
 * Utility functions for string manipulation
 */

/**
 * Capitalizes the first letter of each word in a string
 * @param {string} str - The input string to capitalize
 * @returns {string} The string with each word capitalized
 */
export const capitalizeWords = (str) => {
  if (!str) return '';
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
};

/**
 * Truncates a string to a specified length and adds ellipsis if needed
 * @param {string} str - The input string to truncate
 * @param {number} maxLength - Maximum length of the string
 * @returns {string} Truncated string with ellipsis if needed
 */
export const truncateString = (str, maxLength) => {
  if (!str) return '';
  if (str.length <= maxLength) return str;
  return str.slice(0, maxLength - 3) + '...';
};
