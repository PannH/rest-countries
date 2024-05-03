# REST Countries
This library is a wrapper for the [REST Countries API (v3.1)](https://restcountries.com/) to access information about 250 countries around the world easily and is written in TypeScript to ensure type safety and provide a better developer experience.

## Links
- [REST Countries API](https://restcountries.com/)
- [GitHub](https://github.com/PannH/rest-countries)
- [npm](https://www.npmjs.com/package/rest-countries)
- [Documentation](https://pannh.github.io/rest-countries/)
- [Contact me](https://bento.me/pannh)

## Installation
```bash
npm i rest-countries

yarn add rest-countries

pnpm add rest-countries

bun add rest-countries
```

## Example
```typescript
import { getAll, searchByName } from 'rest-countries';

// Fetch all the countries
const countries = await getAll();

// Fetch all the countries with filtered fields (this will make the request faster)
const countries = await getAll({ fields: ['name', 'capital', 'population'] });

// Search for a country by name
const country = await searchByName('Vietnam');
```