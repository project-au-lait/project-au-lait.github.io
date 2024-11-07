import { loadTranslations } from '$lib/translations';
import type { LayoutLoad } from './$types';
import Cookies from 'js-cookie';

export const prerender = true;

export const load: LayoutLoad = async () => {
  const locale = Cookies.get('locale') ?? navigator.language?.substring(0, 2) ?? 'en';
  await loadTranslations(locale);

  return {};
};
