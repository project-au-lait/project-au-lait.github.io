<script lang="ts">
  import GitHubButton from '$lib/GitHubButton.svelte';
  import { t, locale } from '$lib/translations';
  import EmblaCarousel from 'embla-carousel';
  import type { EmblaCarouselType } from 'embla-carousel';
  import { Kbd, TabItem, Tabs } from 'flowbite-svelte';
  import { CodeCopy } from 'svelte-code-copy';
  import Highlight from 'svelte-highlight';
  import { bash, dos } from 'svelte-highlight/languages';
  import monokai from 'svelte-highlight/styles/monokai';
  import { Button } from 'flowbite-svelte';
  import BookOutline from 'flowbite-svelte-icons/BookOutline.svelte';
  import LinkOutline from 'flowbite-svelte-icons/LinkOutline.svelte';

  import { onMount } from 'svelte';
  import SvqkCommonContents from '$lib/components/SvqkCommonContents.svelte';

  const qsStepClass = 'mt-4 mb-2';
  const kbdClass = 'px-2 py-1.5';

  const images = [
    {
      alt: 'setup',
      src: '/images/svqk/setup.gif',
      message: 'msg.products.SVQK.usage.message.setup',
    },
    {
      alt: 'open-ws',
      src: '/images/svqk/open-ws.gif',
      message: 'msg.products.SVQK.usage.message.openWs',
    },
    {
      alt: 'front-demo',
      src: '/images/svqk/front-demo.gif',
      message: 'msg.products.SVQK.usage.message.frontDemo',
    },
    {
      alt: 'pw-test',
      src: '/images/svqk/pw-test.gif',
      message: 'msg.products.SVQK.usage.message.pwTest',
    },
  ];

  let version = 'CHECK_THE_LATEST_ON_GITHUB';
  let emblaNode: HTMLElement;
  let embla: EmblaCarouselType;

  onMount(async () => {
    const res = await fetch('https://api.github.com/repos/project-au-lait/svqk/releases/latest');

    if (res.ok) {
      const data = await res.json();
      version = data.tag_name.replace(/^v/i, '');
    }

    if (emblaNode) {
      embla = EmblaCarousel(emblaNode, { loop: true });
    }
  });

  let accordionStates = [false, false, false, false, false, false];
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
  {@html monokai}
</svelte:head>

<div id="svqk" class="container mx-auto lg:w-4/5 sm:px-5 text-gray-600 body-font section">
  <div class="section-title">
    <h1 class="text-4xl title-font font-medium text-gray-900 my-4">SVQK</h1>
    <a class="section-link-icon" href="#svqk">
      <LinkOutline size="xl" />
    </a>
  </div>
  <ul class="list-disc ml-8">
    {#each $t('msg.products.SVQK.features').split('\n') as feature}
      <li>{feature}</li>
    {/each}
  </ul>

  <p class="my-4">
    <GitHubButton repo="https://github.com/project-au-lait/svqk" />
    <Button
      size="sm"
      color="dark"
      href={`https://aulait.dev/svqk/${version}/${$locale}/`}
      target="_blank"><BookOutline class="me-2" />Docs</Button
    >
  </p>

  <h2 class="text-3xl mb-2 text-gray-900">Quick Start</h2>

  <p>{$t('msg.products.SVQK.usage.requiredSoftware')}</p>

  <ul class="list-disc ml-8 my-3">
    <li>Docker Desktop</li>
    <li>JDK v21</li>
    <li>Maven</li>
    <li>Node.js v22</li>
    <li>pnpm</li>
    <li>Git</li>
    <li>Visual Studio Code</li>
  </ul>

  <p class="mb-2">{$t('msg.products.SVQK.usage.description')}</p>

  <Tabs>
    <TabItem open title="Windows (cmd)">
      <SvqkCommonContents>
        <li slot="setUtf-8">
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setUtf-8')}</p>
          <CodeCopy><Highlight language={dos} code={'chcp 65001'} /></CodeCopy>
        </li>
        <div slot="createPjCommand">
          <CodeCopy>
            <Highlight
              language={dos}
              code={`mvn archetype:generate ^
        -DarchetypeGroupId=dev.aulait.svqk ^
        -DarchetypeArtifactId=svqk-archetype-refimpl ^
        -DarchetypeVersion=${version} ^
        -DgroupId=my.group.id ^
        -DartifactId=my-artifactid ^
        -Dversion=1.0-SNAPSHOT`}
            />
          </CodeCopy>
        </div>
        <div slot="setupCommand">
          <CodeCopy><Highlight language={dos} code={'cd my-artifactid'} /></CodeCopy>
          <CodeCopy><Highlight language={dos} code={'mvnw install -T 1C -P setup'} /></CodeCopy>
        </div>
        <div slot="runTaskComand">
          <Kbd class={kbdClass}>Ctrl</Kbd> + <Kbd class={kbdClass}>Shift</Kbd> + <Kbd
            class={kbdClass}
          >
            P
          </Kbd>
        </div>
      </SvqkCommonContents>
    </TabItem>

    <TabItem title="Mac">
      <SvqkCommonContents>
        <div slot="createPjCommand">
          <CodeCopy>
            <Highlight
              language={bash}
              code={`mvn archetype:generate \\
  -DarchetypeGroupId=dev.aulait.svqk \\
  -DarchetypeArtifactId=svqk-archetype-refimpl \\
  -DarchetypeVersion=${version} \\
  -DgroupId=my.group.id  \\
  -DartifactId=my-artifactid \\
  -Dversion=1.0-SNAPSHOT`}
            />
          </CodeCopy>
        </div>
        <div slot="setupCommand">
          <CodeCopy><Highlight language={bash} code={'cd my-artifactid'} /></CodeCopy>
          <CodeCopy><Highlight language={bash} code={'chmod u+x mvnw'} /></CodeCopy>
          <CodeCopy><Highlight language={bash} code={'./mvnw install -T 1C -P setup'} /></CodeCopy>
        </div>
        <div slot="runTaskComand">
          <Kbd class={kbdClass}>⌘ Command</Kbd> + <Kbd class={kbdClass}>⇧ Shift</Kbd> + <Kbd
            class={kbdClass}>P</Kbd
          >
        </div>
      </SvqkCommonContents>
    </TabItem>
  </Tabs>

  <!-- carousel -->
  <div class="embla overflow-hidden max-w-4xl mx-auto my-4" bind:this={emblaNode}>
    <div class="flex items-center">
      {#each images as img}
        <div class="min-w-0" style="flex: 0 0 100%;">
          <img src={img.src} alt={img.alt} class="rounded-lg" />
          <p class="pt-2">{$t(img.message)}</p>
        </div>
      {/each}
    </div>
  </div>

  <div class="flex justify-center my-4">
    <button on:click={() => embla?.scrollPrev()} class="px-4 py-2 rounded-lg mr-2">
      <img src="./arrow-back.svg" alt="back" />
    </button>
    <button on:click={() => embla?.scrollNext()} class="px-4 py-2 rounded-lg mr-2">
      <img src="./arrow-foward.svg" alt="forward" />
    </button>
  </div>
</div>

<style>
  .section {
    scroll-margin-top: 6rem; /* ヘッダーの高さ + 余裕 */
  }

  .section-title {
    display: flex;
    align-items: center;
    gap: 8px;
    position: relative;
  }

  .section-link-icon {
    opacity: 0;
  }

  .section-title:hover .section-link-icon {
    opacity: 1;
  }
</style>
