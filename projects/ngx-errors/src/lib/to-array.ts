import { ErrorOptions } from '../public-api';

export const toArray = (value: ErrorOptions): string[] => Array.isArray(value) ? value : [value];