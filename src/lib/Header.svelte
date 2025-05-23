<script lang="ts">
  import { Button, Dropdown, DropdownItem } from 'flowbite-svelte';
  import { ChevronDownOutline, FilePenOutline } from 'flowbite-svelte-icons';
  import GlobeSolid from 'flowbite-svelte-icons/GlobeSolid.svelte';
  import { getLocale, locales, setLocale, type Locale } from './paraglide/runtime';

  const localeLabels: { [key: string]: string } = { en: 'English', ja: '日本語' };
  let dropdownOpen = $state(false);

  function chooseItem(locVal: Locale) {
    dropdownOpen = false;
    setLocale(locVal);
  }

  let xLink = $derived(
    getLocale() === 'ja' ? 'https://x.com/prj_au_lait_jp' : 'https://x.com/project_au_lait'
  );
  let blogLink = $derived(
    getLocale() === 'ja' ? 'https://zenn.dev/prj_au_lait_jp' : 'https://dev.to/project_au_lait'
  );
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
              {#each locales as localeValue}
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

        <div class="w-12 flex justify-center">
          <a href={blogLink} target="_blank">
            <FilePenOutline class="w-6 h-6 ms-1 text-white dark:text-white" />
          </a>
        </div>
      </div>
    </div>
  </div>
</nav>
