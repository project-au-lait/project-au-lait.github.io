<script lang="ts">
  import { locale, locales } from '$lib/translations';
  import { onDestroy } from 'svelte';
  import Cookies from 'js-cookie';

  const localeLabels: { [key: string]: string } = { en: 'English', ja: '日本語' };

  const unsubscribe = locale.subscribe(value => {
    Cookies.set('locale', value);
  });

  onDestroy(unsubscribe);
</script>

<nav class="bg-black sticky top-0 py-4 px-6 z-10">
  <div class="flex justify-between">
    <a href="/">
      <div class="flex items-center">
        <img src="./logo.svg" alt="logo" class="h-10" />
        <p class="ml-2 text-xl text-white">Project Au Lait</p>
      </div>
    </a>
    <ul class="flex space-x-3 items-center">
      <li>
        <select class="text-xs" bind:value={$locale}>
          {#each $locales as localeValue}
            <option value={localeValue}>{localeLabels[localeValue]}</option>
          {/each}
        </select>
      </li>
      <li>
        <a href="https://github.com/project-au-lait">
          <img src="./github-mark-white.svg" alt="GitHub" class="h-8" />
        </a>
      </li>
    </ul>
  </div>
</nav>
