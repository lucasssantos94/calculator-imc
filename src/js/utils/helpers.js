export const helpers = {
  /**
   * Safely get element by ID
   * @param {string} id - Element ID
   * @returns {HTMLElement|null}
   */
  getElementById(id) {
    const element = document.getElementById(id);
    if (!element) {
      console.warn(`Element with ID '${id}' not found`);
    }
    return element;
  },

  /**
   * Format number to fixed decimal places
   * @param {number} value - Number to format
   * @param {number} decimals - Number of decimal places
   * @returns {string}
   */
  formatNumber(value, decimals = 1) {
    return Number(value).toFixed(decimals);
  },

  /**
   * Validate if value is a valid number
   * @param {any} value - Value to validate
   * @returns {boolean}
   */
  isValidNumber(value) {
    return !isNaN(value) && isFinite(value) && value > 0;
  },
};
