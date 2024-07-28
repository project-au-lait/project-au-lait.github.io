import { loadTranslations } from '$lib/translations';

import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = async () => {
  const initLocale = 'en';
  // TODO building mechanism to switch locale
  await loadTranslations(initLocale);

  return {};
};
