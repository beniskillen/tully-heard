import { describe, expect, it } from 'vitest';
import { googleAnalyticsId } from './analytics';

describe('googleAnalyticsId', () => {
  it('stays off until a GA4 measurement id is provided', () => {
    expect(googleAnalyticsId()).toBeNull();
  });
});
