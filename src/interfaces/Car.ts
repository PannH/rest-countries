/**
 * Information about the car rules
 */
export default interface Car {
   /**
    * The country code displayed on the car plate
    */
   signs: string[];
   /**
    * The side of the road the country drives on
    */
   side: 'left' | 'right';
}
