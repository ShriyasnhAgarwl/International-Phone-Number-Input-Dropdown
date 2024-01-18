export interface IUserLoginVeiwProps{
  phoneCode: string | undefined;
    togglePhone: (i: string | undefined) => void;
    country: string | undefined;
    toggleCountry: (i: string | undefined) => void;
}}
