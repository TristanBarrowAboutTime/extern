import { FormatDisplayType, NumberFormatter } from '../../utils/numberFormatter';

describe('Number Formatter', () => {
    it('returns the correct number given an int', () => {
        const num = NumberFormatter(10, FormatDisplayType.General);
        expect(typeof num).toBe('string');
        expect(num).toBe("10");
    }); 
    it('returns the correct number given a float', () => {
        const num = NumberFormatter(10.32, FormatDisplayType.General, 2);
        expect(typeof num).toBe('string');
        expect(num).toBe("10.32");
    });
    it('returns the correct number given negative float', () => {
        const num = NumberFormatter(-10.32, FormatDisplayType.General, 2);
        expect(typeof num).toBe('string');
        expect(num).toBe("-10.32");
    });
    it('returns the correct number given a large int', () => {
        const num = NumberFormatter(123456, FormatDisplayType.General, 2);
        expect(typeof num).toBe('string');
        expect(num).toBe("123,456");
    });
    it('returns the correct number given a large negative int', () => {
        const num = NumberFormatter(-123456, FormatDisplayType.General, 2);
        expect(typeof num).toBe('string');
        expect(num).toBe("-123,456");
    });
    it('returns the correct number given a very large negative float', () => {
        const num = NumberFormatter(-123456789123456.293, FormatDisplayType.General, 2);
        expect(typeof num).toBe('string');
        expect(num).toBe("-123,456,789,123,456.30");
    });
});