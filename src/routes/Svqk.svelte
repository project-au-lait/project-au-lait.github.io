<script>
  import { Carousel, P, Tabs, TabItem } from 'flowbite-svelte';
  import { t } from '$lib/translations';
  import WinGuide from '$lib/svqk/Win.svx';
  import MacGuide from '$lib/svqk/Mac.svx';

  const images = [
    {
      alt: 'setup',
      src: '/svqk/setup.png',
      title: 'setup',
    },
    {
      alt: 'pw-repo',
      src: '/svqk/pw-repo.png',
      title: 'pw-repo',
    },
    {
      alt: 'vscode-ws',
      src: '/svqk/vscode-ws.png',
      title: 'vscode-ws',
    },
    {
      alt: 'regist-issue',
      src: '/svqk/regist-issue.png',
      title: 'regist-issue',
    },
  ];
</script>

<div class="container mx-auto lg:w-4/5">
  <P size="4xl">SVQK</P>
  <!-- eslint-disable-next-line svelte/no-at-html-tags -->
  <p class="text-gray-600">{@html $t('msg.products.SVQK.feature')}</p>

  <P size="2xl">Quick Start</P>

  <Tabs>
    <TabItem open title="Windows">
      <WinGuide />
    </TabItem>
    <TabItem title="Mac">
      <MacGuide />
    </TabItem>
  </Tabs>

  <div class="max-w-4xl mx-auto">
    <!-- TODO 高さが固定値指定以外で拡張できない -->
    <Carousel {images} duration={5000} style="height: 32rem;" />
  </div>
</div>
