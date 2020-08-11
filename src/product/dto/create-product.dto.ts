export class CreateProductDto {
    readonly title: String;
    readonly description: String;
  
    readonly manufacture_details?: {
      readonly model_number: String;
      readonly release_date: String
    };
  
    readonly shipping_details?: {
      readonly weight: Number;
      readonly width: Number;
      readonly height: Number;
      readonly depth: Number
    };
  
    readonly quantity: Number;
  
    readonly pricing: {
      readonly price: Number
    }
}