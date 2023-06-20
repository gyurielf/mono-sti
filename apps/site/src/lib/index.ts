export { default as TelInput } from './components/Input/TelInput.svelte';
export {
	getCurrentCountry,
	isSelected,
	inputParser,
	inspectAllowedChars,
	normalizeTelInput,
	getCountryForPartialE164Number
} from './utils/helpers.js';
export { parsePhoneNumberWithError, ParseError } from 'libphonenumber-js/max';
export { clickOutsideAction } from './utils/directives/clickOutsideAction.js';
export { normalizedCountries } from './assets/index.js';
