
import { caesarCipher } from './cipher';

describe('caesarCipher Utility Function', () => {
    test('ciphers text correctly with default right shift', () => {
        expect(caesarCipher("HELLO", 3)).toBe("KHOOR");
    });

    test('ciphers text correctly with left shift', () => {
        expect(caesarCipher("KHOOR", 3, 'left')).toBe("HELLO");
    });

    test('maintains non-alphabetic characters unchanged', () => {
        expect(caesarCipher("HELLO WORLD!", 3)).toBe("KHOOR ZRUOG!");
    });

    test('ciphers text correctly with large shifts', () => {
        expect(caesarCipher("HELLO", 29)).toBe("KHOOR"); // Equivalent to a shift of 3
    });
});
