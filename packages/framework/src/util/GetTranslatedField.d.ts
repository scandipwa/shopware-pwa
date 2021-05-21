/* eslint-disable max-len */
import { TranslatableFields } from '@scandipwa/types';

/** @namespace Framework/Util/GetTranslatedField/d/getTranslatedField */
export const getTranslatedField = <T, K extends Extract<keyof T, TranslatableFields>>(obj: T, fieldName: K): T[K] => T[K];
