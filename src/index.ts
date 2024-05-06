import axios, { type AxiosRequestConfig } from 'axios';
import type {
   Coordinates,
   FieldName,
   Nullable,
   Region,
   WeekDay
} from './types';
import type {
   CapitalInfo,
   Car,
   CoatOfArmFormats,
   Country,
   Currency,
   Demonym,
   FlagFormats,
   IDD,
   MapLinks,
   Name,
   PostalCode
} from './interfaces';

function _parseParams(params?: string | string[]): string {
   return params
      ? typeof params === 'string'
         ? params
         : params.join(',')
      : undefined;
}

async function _get(
   path: string,
   config: AxiosRequestConfig
): Promise<Nullable<Country[]>> {
   try {
      const { data } = await axios.get(path, {
         responseType: 'json',
         baseURL: 'https://restcountries.com/v3.1',
         ...config
      });

      return data;
   } catch (_) {
      return null;
   }
}

/**
 * @description Get all the countries
 * @param fields The fields to keep in the respoonse
 * @returns All the countries
 * @example
 * ```ts
 * const countries = await getAll();
 * const countries = await getAll(['name', 'capital']);
 * ```
 */
async function getAll<F extends FieldName>(
   fields?: F[]
): Promise<Pick<Country, F>[]> {
   return await _get('/all', {
      params: {
         fields: _parseParams(fields)
      }
   });
}

/**
 * @description Search among the countries by their name
 * @param name The name to search for
 * @param options The options
 * @param options.exact Whether to search for the exact name
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const country = await searchByName('United States');
 * const country = await searchByName('United States', { exact: true });
 * const country = await searchByName('United States', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByName<F extends FieldName>(
   name: string,
   options?: {
      exact?: boolean;
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/name/${name}`, {
      params: {
         fields: _parseParams(options?.fields),
         fullText: options?.exact
      }
   });
}

/**
 * @description Search among the countries by their code (cc2, ccn3, cca3, cioc)
 * @param code The code(s) to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchByCode('usa');
 * const countries = await searchByCode(['usa', 'gb'])
 * const countries = await searchByCode('usa', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByCode<F extends FieldName>(
   code: string | string[],
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get('/alpha', {
      params: {
         fields: _parseParams(options?.fields),
         codes: _parseParams(code)
      }
   });
}

/**
 * @description Search among the countries by their currency
 * @param currency The currency to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchByCurrency('usd');
 * const countries = await searchByCurrency('euro', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByCurrency<F extends FieldName>(
   currency: string,
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/currency/${currency}`, {
      params: {
         fields: _parseParams(options?.fields)
      }
   });
}

/**
 * @description Search among the countries by their demonym
 * @param demonym The demonym to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchByDemonym('american');
 * const countries = await searchByDemonym('american', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByDemonym<F extends FieldName>(
   demonym: string,
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/demonym/${demonym}`, {
      params: {
         fields: _parseParams(options?.fields)
      }
   });
}

/**
 * @description Search among the countries by their language
 * @param language The language to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchByLanguage('english');
 * const countries = await searchByLanguage('english', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByLanguage<F extends FieldName>(
   language: string,
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/lang/${language}`, {
      params: {
         fields: _parseParams(options?.fields)
      }
   });
}

/**
 * @description Search among the countries by their capital city
 * @param capitalCity The capital city to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchByCapital('washington');
 * const countries = await searchByCapital('washington', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByCapital<F extends FieldName>(
   capitalCity: string,
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/capital/${capitalCity}`, {
      params: {
         fields: _parseParams(options?.fields)
      }
   });
}

/**
 * @description Search among the countries by their region
 * @param region The region to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchByRegion('europe');
 * const countries = await searchByRegion('europe', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByRegion<F extends FieldName>(
   region: Uncapitalize<Region> | string,
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/region/${region}`, {
      params: {
         fields: _parseParams(options?.fields)
      }
   });
}

/**
 * @description Search among the countries by their subregion
 * @param subregion The subregion to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchBySubregion('southern europe');
 * const countries = await searchBySubregion('southern europe', { fields: ['name', 'capital'] });
 * ```
 */
async function searchBySubregion<F extends FieldName>(
   subregion: string,
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/subregion/${subregion}`, {
      params: {
         fields: _parseParams(options?.fields)
      }
   });
}

/**
 * @description Search among the countries by their translation
 * @param translation The translation to search for
 * @param options The options
 * @param options.fields The fields to keep in the response
 * @returns The matching countries
 * @example
 * ```ts
 * const countries = await searchByTranslation('الولايات المتحدة');
 * const countries = await searchByTranslation('الولايات المتحدة', { fields: ['name', 'capital'] });
 * ```
 */
async function searchByTranslation<F extends FieldName>(
   translation: string,
   options?: {
      fields?: F[];
   }
): Promise<Nullable<Pick<Country, F>[]>> {
   return await _get(`/translation/${translation}`, {
      params: {
         fields: _parseParams(options?.fields)
      }
   });
}

export {
   // functions
   getAll,
   searchByName,
   searchByCode,
   searchByCurrency,
   searchByDemonym,
   searchByLanguage,
   searchByCapital,
   searchByRegion,
   searchBySubregion,
   searchByTranslation,
   // types
   type Coordinates,
   type FieldName,
   type Nullable,
   type Region,
   type WeekDay,
   // interfaces
   type CapitalInfo,
   type Car,
   type CoatOfArmFormats,
   type Country,
   type Currency,
   type Demonym,
   type FlagFormats,
   type IDD,
   type MapLinks,
   type Name,
   type PostalCode
};
