// src/lib/utils.js
/**
 * Combines class names into a single string, ignoring falsy values.
 * Example: cn('btn', isActive && 'btn-active') => 'btn btn-active'
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
