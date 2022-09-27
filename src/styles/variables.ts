import { IColor, IDevices, ISize } from '../interfaces/variables';

const sizes: ISize = {
    miniMobile: 320,
    mobile: 576,
    tablet: 768,
    laptop: 1024,
    largeLaptop: 1440,
    desktop: 1920,
    largeDesktop: 2560,
    wideScreen: 3840
};

const devices: IDevices = {
    miniMobile: `(min-width: ${sizes.miniMobile}px)`,
    mobile: `(min-width: ${sizes.mobile}px)`,
    tablet: `(min-width: ${sizes.tablet}px)`,
    laptop: `(min-width: ${sizes.laptop}px)`,
    largeLaptop: `(min-width: ${sizes.largeLaptop}px)`,
    desktop: `(min-width: ${sizes.desktop}px)`,
    largeDesktop: `(min-width: ${sizes.largeDesktop}px)`
};

const color: IColor = {
    darkPurple: '#240D57',
    lightPurple: '#501FC1',
    envitedPurple: '#8456EC',
    envitedPink: '#E87BF8',
    purple1: '#CCB6FF',
    purple2: '#EDE5FF',
    purple3: '#F6F2FF',
    redBackgroundColor: '#FFD7E0',
    redForeground: '#E61445',
    greenBackground: '#D3FFE2',
    greenForeground: '#00805E',
    neutrals1: '#4F4F4F',
    neutrals2: '#828282',
    neutrals3: '#BDBDBD',
    neutrals4: '#E0E0E0',
    neutrals5: '#F2F2F2',
    neutrals6: '#BDBDBD',
};

export { color, devices, sizes };
