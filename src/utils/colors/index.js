const mainColors = {
  pink1: '#FF66C4',
  pink2: '#BB2380',
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  grey3: '#EDEEF0',
  grey4: '#B1B7C2',
  blue1: '#0066CB',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: mainColors.pink1,
  secondary: mainColors.pink2,
  tertiary: mainColors.blue1,
  white: 'white',
  black: 'black',
  disable: mainColors.grey3,
  text: {
    primary: mainColors.pink2,
    secondary: mainColors.grey1,
    menuInactive: 'white',
    menuActive: mainColors.pink2,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.pink1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.pink2,
    },
    disable: {
      background: mainColors.grey3,
      text: mainColors.grey4,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
