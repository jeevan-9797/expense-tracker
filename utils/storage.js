const STORAGE_KEY = 'expenses';

/**
 * Retrieves all expenses from localStorage.
 * @returns {Array} An array of expense objects.
 */
export function getExpenses() {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    console.error('Failed to parse stored expenses:', e);
    return [];
  }
}

/**
 * Saves an array of expenses to localStorage.
 * @param {Array} expenses - The array of expense objects to save.
 */
export function setExpenses(expenses) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(expenses));
  } catch (e) {
    console.error('Failed to save expenses to localStorage:', e);
  }
}

/**
 * Removes all expenses from localStorage.
 */
export function removeExpenses() {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.error('Failed to remove expenses from localStorage:', e);
  }
}

/**
 * Generic get item function for localStorage.
 * @param {string} key - The key to retrieve.
 * @returns {string|null} The stored value or null.
 */
export function getItem(key) {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem(key);
  } catch (e) {
    console.error('Failed to get item from localStorage:', e);
    return null;
  }
}

/**
 * Generic set item function for localStorage.
 * @param {string} key - The key to store.
 * @param {string} value - The value to store.
 */
export function setItem(key, value) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.error('Failed to set item in localStorage:', e);
  }
}

/**
 * Generic remove item function for localStorage.
 * @param {string} key - The key to remove.
 */
export function removeItem(key) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.error('Failed to remove item from localStorage:', e);
  }
}
