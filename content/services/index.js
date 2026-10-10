import BANKING from './banking';
import TAX from './tax';
import ACCOUNTING from './accounting';
import VISAS from './visas';
import COMPLIANCE from './compliance';

// Service items that have a full page. A catalog item only gets a live route
// once its copy is added to one of these practice files.
export const SERVICE_PAGES = [...BANKING, ...TAX, ...ACCOUNTING, ...VISAS, ...COMPLIANCE];

export const serviceFor = (href) => SERVICE_PAGES.find((p) => p.href === href);
