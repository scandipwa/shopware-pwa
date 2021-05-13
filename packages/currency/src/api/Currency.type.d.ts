import {
    ApiBaseWithDate,
    CustomFieldsBase,
    Extensions,
    TranslatableFields,
    TranslatedFields
} from '@scandipwa/types';

export interface Currency extends ApiBaseWithDate, CustomFieldsBase {
    isoCode: string;
    factor: number;
    symbol: string;
    shortName: string;
    name: string;
    position: number;
    shippingMethodPrices?: string;
    isSystemDefault: boolean;
    taxFreeFrom?: string;
    _uniqueIdentifier: string;
    translated: TranslatedFields<Extract<keyof Currency, TranslatableFields>>
    extensions: Extensions;
    id: string;
  }
