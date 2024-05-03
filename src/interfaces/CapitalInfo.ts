import type { Coordinates } from '../types';

/**
 * Geographical information about a capital city
 */
export default interface CapitalInfo {
   /**
    * The coordinates of the capital city
    */
   latlng: Coordinates;
}
