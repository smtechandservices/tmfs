import DUBAI_MAINLAND from './dubai-mainland';
import ABU_DHABI_MAINLAND from './abu-dhabi-mainland';
import SHARJAH_MAINLAND from './sharjah-mainland';
import AJMAN_MAINLAND from './ajman-mainland';
import RAK_MAINLAND from './ras-al-khaimah-mainland';
import FUJAIRAH_MAINLAND from './fujairah-mainland';
import UAQ_MAINLAND from './umm-al-quwain-mainland';
import IFZA from './ifza';
import MEYDAN from './meydan';
import RAKEZ from './rakez';
import SHAMS from './shams';
import SPC from './spc';
import AJMAN_FREE_ZONE from './ajman-free-zone';
import SRTIP from './srtip';
import DMCC from './dmcc';
import DIFC from './difc';
import RAK_ICC from './rak-icc';

// Catalog items that have a full jurisdiction page. A mainland emirate, free
// zone or offshore item only gets a live route once its copy is added here.
export const JURISDICTION_PAGES = [
  DUBAI_MAINLAND,
  ABU_DHABI_MAINLAND,
  SHARJAH_MAINLAND,
  AJMAN_MAINLAND,
  RAK_MAINLAND,
  FUJAIRAH_MAINLAND,
  UAQ_MAINLAND,
  IFZA,
  MEYDAN,
  RAKEZ,
  SHAMS,
  SPC,
  AJMAN_FREE_ZONE,
  SRTIP,
  DMCC,
  DIFC,
  RAK_ICC,
];

export const jurisdictionFor = (href) => JURISDICTION_PAGES.find((p) => p.href === href);
