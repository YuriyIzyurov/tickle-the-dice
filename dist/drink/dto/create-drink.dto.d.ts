declare class Price {
    readonly ml50: number;
    readonly ml100: number;
    readonly bottle: number;
}
export declare class CreateDrinkDto {
    readonly name: string;
    readonly country: string;
    readonly price: Price;
    readonly specification: any;
}
export {};
