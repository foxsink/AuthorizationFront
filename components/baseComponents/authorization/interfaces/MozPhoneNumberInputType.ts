import { CountryCallingCode, CountryCode, NationalNumber, NumberType } from 'libphonenumber-js';

export type MozPhoneNumberInputType = {
    isValid: boolean
    isPossible?: boolean
    countryCode?: CountryCode
    countryCallingCode?: CountryCallingCode
    nationalNumber?: NationalNumber
    type?: NumberType
    formatInternational?: string
    formatNational?: string
    uri?: string
    e164?: string
    rfc3966?: string
  }
