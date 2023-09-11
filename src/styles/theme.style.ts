interface ThemeSetup {
  defaultTheme?: string;
  currentTheme?: keyof ThemeColors;
}

interface ThemeNames {
  dark?: ThemeColors;
  light?: ThemeColors;
}

interface ThemeColorsSetup {
  primary: string;
  secondary: string;
  tertiary: string;
  primaryDark: string;
  text: string;
}

export class ThemeColors {
  primary: string;
  secondary: string;
  tertiary: string;
  primaryDark: string;
  text: string;

  constructor(setup: ThemeColorsSetup) {
    const {primary, secondary, tertiary, primaryDark, text} = Object(setup);

    this.primary = primary;
    this.secondary = secondary;
    this.tertiary = tertiary;
    this.primaryDark = primaryDark;
    this.text = text;
  }

  getColor(colorName: keyof ThemeColors) {
    return this[colorName];
  }
}

export class Theme {
  defaultTheme: string;
  currentTheme?: keyof ThemeNames;

  constructor(setup?: ThemeSetup) {
    const {defaultThemeCustom, currentTheme} = Object(setup);

    this.defaultTheme = defaultThemeCustom || this.defaultType;
    this.currentTheme = currentTheme || this.defaultTheme;
  }

  private defaultType = 'dark';

  get colors() {
    return this.themes[this.currentTheme || 'dark'];
  }

  get themes(): ThemeNames {
    return {
      dark: new ThemeColors({
        primary: '#2C363F',
        secondary: '#2C363F',
        tertiary: '#B0FE76',
        primaryDark: '#191F24',
        text: '#F7F7F7',
      }),
      light: new ThemeColors({
        primary: '#FFFFFF',
        secondary: '#FFFFFF',
        tertiary: '#000000',
        primaryDark: '#EEEEEE',
        text: '#000',
      }),
    };
  }
}

global.ThemeCore = new Theme();
