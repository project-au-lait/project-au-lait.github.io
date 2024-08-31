import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';
import Cookies from 'js-cookie';

export const ssr = false;

export const load: LayoutLoad = async () => {
  const locale = Cookies.get('locale') ?? navigator.language;
  await loadTranslations(locale);

  return {};
};
