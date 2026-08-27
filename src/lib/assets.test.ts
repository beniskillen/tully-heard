import { describe, expect, it } from 'vitest';
import { assetUrl } from './assets';

describe('assetUrl', () => {
  it('prefixes public paths with the Vite base URL', () => {
    expect(assetUrl('/clients/gosford-rsl.svg')).toBe(
      `${import.meta.env.BASE_URL}clients/gosford-rsl.svg`,
    );
    expect(assetUrl('jt-headshot.jpg')).toBe(`${import.meta.env.BASE_URL}jt-headshot.jpg`);
  });
});
