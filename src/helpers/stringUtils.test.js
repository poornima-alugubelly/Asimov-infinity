import { capitalizeWords, truncateString } from './stringUtils';

describe('String Utils', () => {
  describe('capitalizeWords', () => {
    it('should capitalize first letter of each word', () => {
      expect(capitalizeWords('hello world')).toBe('Hello World');
      expect(capitalizeWords('HELLO WORLD')).toBe('Hello World');
      expect(capitalizeWords('hELLo wORLd')).toBe('Hello World');
    });

    it('should handle empty string', () => {
      expect(capitalizeWords('')).toBe('');
    });

    it('should handle null input', () => {
      expect(capitalizeWords(null)).toBe('');
    });
  });

  describe('truncateString', () => {
    it('should truncate string if longer than maxLength', () => {
      expect(truncateString('Hello World', 8)).toBe('Hel...');
      expect(truncateString('Hello', 8)).toBe('Hello');
    });

    it('should handle empty string', () => {
      expect(truncateString('', 5)).toBe('');
    });

    it('should handle null input', () => {
      expect(truncateString(null, 5)).toBe('');
    });
  });
});
