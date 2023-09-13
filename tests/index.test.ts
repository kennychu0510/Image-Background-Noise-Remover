import { describe, expect, it } from 'vitest';
import { recognizeText } from '../src';

describe('OCR', () => {
  it('recognize image 1 correctly', async () => {
    expect(await recognizeText('./src/images/pic_1.jpeg')).toBe('>bW2');
  });
  it('recognize image 2 correctly', async () => {
    expect(await recognizeText('./src/images/pic_2.jpeg')).toBe('2LbL');
  });
  it('recognize image 3 correctly', async () => {
    expect(await recognizeText('./src/images/pic_3.jpeg')).toBe('H23Q');
  });
  it('recognize image 4 correctly', async () => {
    expect(await recognizeText('./src/images/pic_4.jpeg')).toBe('k6h&');
  });
  it('recognize image 5 correctly', async () => {
    expect(await recognizeText('./src/images/pic_5.jpeg')).toBe(('On@%').toLocaleLowerCase());
  });
});
