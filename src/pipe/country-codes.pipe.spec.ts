import { CountryCodesPipe } from './country-codes.pipe';

describe('CountryCodesPipe', () => {
  it('create an instance', () => {
    const pipe = new CountryCodesPipe();
    expect(pipe).toBeTruthy();
  });
});
