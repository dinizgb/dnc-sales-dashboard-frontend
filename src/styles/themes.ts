import { Theme } from '@/types'

export const lightTheme: Theme = {
  appBackground: '#FFF',
  appColor: '#000',
  appLogo: 'dnc-logo-black.svg',
  buttons: {
    alert: '#FF0000',
    alertColor: '#FFF',
    alertHover: '#EA0000',
    disabled: '#CCCCCC',
    disabledColor: '#666666',
    primary: '#0C70F2',
    primaryColor: '#FFF',
    primaryHover: '#0061DE',
  },
  textInput: {
    active: '#FFF',
    activeColor: '#000',
    borderColor: '#E0E0E0',
    disabled: '#EEE',
    disabledBorderColor: '#E0E0E0',
    disabledColor: '#666',
    placeholderColor: '#666',
  },
  typographies: {
    error: '#FF0202',
    success: '#008000',
  },
}

export const darkTheme: Theme = {
  appBackground: '#060B26',
  appColor: '#FFF',
  appLogo: 'dnc-logo-white.svg',
  buttons: {
    alert: '#FF0000',
    alertColor: '#FFF',
    alertHover: '#EA0000',
    disabled: '#313649',
    disabledColor: '#6D7B8E',
    primary: '#0C70F2',
    primaryColor: '#FFF',
    primaryHover: '#0061DE',
  },
  textInput: {
    active: '#0F1535',
    activeColor: '#FFF',
    borderColor: '#21497D',
    disabled: '#282D49',
    disabledBorderColor: '#2E3F55',
    disabledColor: '#58677C',
    placeholderColor: '#89A7CE',
  },
  typographies: {
    error: '#FF0202',
    success: '#008000',
  },
}
