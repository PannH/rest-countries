import type { Coordinates, Region, WeekDay } from '../types';
import type {
   CapitalInfo,
   Car,
   CoatOfArmFormats,
   Currency,
   Demonym,
   FlagFormats,
   IDD,
   MapLinks,
   Name,
   PostalCode
} from '.';

/**
 * A country
 */
export default interface Country {
   /**
    * The name of the country
    */
   name: Name & {
      /**
       * The native name of the country
       */
      native: Record<string, Name>;
   };
   /**
    * The top-level domain of the country
    */
   tld: string[];
   /**
    * The ISO 3166-1 alpha-2 code of the country
    */
   cca2: string;
   /**
    * The ISO 3166-1 numeric code of the country (UN M49)
    */
   ccn3: string;
   /**
    * The ISO 3166-1 alpha-3 code of the country
    */
   cca3: string;
   /**
    * The Code of the International Olympic Committee
    */
   cioc: string;
   /**
    * Whether the country is independent
    */
   independent: boolean;
   /**
    * The status of the country
    */
   status: string;
   /**
    * Whether the country is a member of the United Nations
    */
   unMember: boolean;
   /**
    * The currencies used in the country
    */
   currencies: Record<string, Currency>;
   /**
    * The calling codes of the country
    */
   idd: IDD;
   /**
    * The capital of the country
    */
   capital: string[];
   /**
    * The alternative spellings of the country name
    */
   altSpellings: string[];
   /**
    * The region of the country
    */
   region: Region;
   /**
    * The subregion of the country
    */
   subregion: string;
   /**
    * The languages spoken in the country
    */
   languages: Record<string, string>;
   /**
    * The translations of the country name
    */
   translations: Record<string, Name>;
   /**
    * The latitude and longitude of the country
    */
   latlng: Coordinates;
   /**
    * Whether the country is landlocked
    */
   landlocked: boolean;
   /**
    * The bordering countries of the country
    */
   borders: string[];
   /**
    * The size of the country (km²)
    */
   area: number;
   /**
    * The demonyms of the country
    */
   demonyms: Record<string, Demonym>;
   /**
    * The flag emoji of the country
    */
   flag: string;
   /**
    * The links to the maps of the country (Google Maps, OpenStreetMap)
    */
   maps: MapLinks;
   /**
    * The population of the country
    */
   population: number;
   /**
    * The Gini index of the country
    */
   gini: Record<string, number>;
   /**
    * The FIFA code of the country
    */
   fifa: string;
   /**
    * The car rules of the country
    */
   car: Car;
   /**
    * The timezones of the country
    */
   timezones: string[];
   /**
    * The regions of the country
    */
   continents: Region[];
   /**
    * The flag images of the country
    */
   flags: FlagFormats;
   /**
    * The coat of arms of the country
    */
   coatOfArms: CoatOfArmFormats;
   /**
    * The start of the week in the country
    */
   startOfWeek: WeekDay;
   /**
    * The geographical information of the country's capital
    */
   capitalInfo: CapitalInfo;
   /**
    * The postal code format of the country
    */
   postalCode: PostalCode;
}
