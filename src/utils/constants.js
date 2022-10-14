// Dependencies
import UAParser from 'ua-parser-js'

// Environment Constants
export const DEV = import.meta.env.DEV
export const PROD = import.meta.env.PROD

// Responsive Constants
export const BREAKPOINTS = {
  XXXS: 0,
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
