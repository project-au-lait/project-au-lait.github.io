<script lang="ts">
  import { locale, locales } from '$lib/translations';
  import { onDestroy } from 'svelte';
  import Cookies from 'js-cookie';
  import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import ChevronDownOutline from 'flowbite-svelte-icons/ChevronDownOutline.svelte';
  import GlobeSolid from 'flowbite-svelte-icons/GlobeSolid.svelte';

  const localeLabels: { [key: string]: string } = { en: 'English', ja: '日本語' };
  let dropdownOpen = false;

  function chooseItem(locVal: string) {
    dropdownOpen = false;
    locale.set(locVal);
  }

  const unsubscribe = locale.subscribe(value => {
    Cookies.set('locale', value);
  });

  onDestroy(unsubscribe);

  $: xLink = $locale === 'ja' ? 'https://x.com/prj_au_lait_jp' : 'https://x.com/project_au_lait';
</script>

<nav class="bg-black sticky top-0 py-4 px-6 z-10">
  <div class="flex justify-between items-center">
    <a href="/">
      <div class="flex items-center">
        <img src="./logo.svg" alt="logo" class="h-10" />
        <p class="ml-2 text-xl text-white">Project Au Lait</p>
      </div>
    </a>

    <div class="flex justify-end items-center">
      <div class="flex items-center justify-between w-[12rem]">
        <div class="w-12 flex justify-center relative">
          <div class="w-full">
            <Button class="w-full !p-0 flex items-center justify-center h-10">
              <GlobeSolid size="lg" />
              <ChevronDownOutline class="w-5 h-5 ms-1 text-white dark:text-white" />
            </Button>
            <Dropdown bind:open={dropdownOpen} class="w-full mt-2 z-50">
              {#each $locales as localeValue}
                <DropdownItem class="text-center" on:click={() => chooseItem(localeValue)}>
                  {localeLabels[localeValue]}
                </DropdownItem>
              {/each}
            </Dropdown>
          </div>
        </div>

        <div class="w-12 flex justify-center">
          <a href="https://github.com/project-au-lait">
            <img src="./github-mark-white.svg" alt="GitHub" class="h-8" />
          </a>
        </div>

        <div class="w-12 flex justify-center">
          <a href={xLink} target="_blank" rel="noopener noreferrer">
            <img src="./x-logo-white.png" alt="X" class="h-5" />
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
