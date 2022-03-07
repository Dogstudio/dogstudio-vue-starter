// Dependencies
import UAParser from 'ua-parser-js'

// Environment Constants
export const PROD = import.meta.env.PROD

// Responsive Constants
export const BREAKPOINTS = {
  XXS: 320,
  XS: 450,
  S: 600,
  M: 768,
  L: 1024,
  XL: 1340,
  XXL: 1440,
  XXXL: 1920,
}

// UA Constants
// UA Parser
const PARSER = new UAParser()

// Set UA Parser
PARSER.setUA(navigator.userAgent)

export const OS = PARSER.getOS()
export const DEVICE = PARSER.getDevice()
export const BROWSER = PARSER.getBrowser()

export const IS_MOBILE = DEVICE.type === 'mobile'
export const IS_TABLET = DEVICE.type === 'tablet'

// Grid Constants
export const DEFAULT_GRID_GUTTER = 18
export const DEFAULT_GRID_COLUMNS = 16
