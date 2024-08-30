<script>
  import { t } from '$lib/translations';
  import Autoplay from 'embla-carousel-autoplay';
  import emblaCarouselSvelte from 'embla-carousel-svelte';
  import { Kbd, TabItem, Tabs } from 'flowbite-svelte';
  import { CodeCopy } from 'svelte-code-copy';
  import Highlight from 'svelte-highlight';
  import { bash, dos } from 'svelte-highlight/languages';
  import monokai from 'svelte-highlight/styles/monokai';

  const qsStepClass = 'text-lg mt-4 mb-2';

  const images = [
    {
      alt: 'setup',
      src: '/svqk/setup.png',
    },
    {
      alt: 'pw-repo',
      src: '/svqk/pw-repo.png',
    },
    {
      alt: 'vscode-ws',
      src: '/svqk/vscode-ws.png',
    },
    {
      alt: 'regist-issue',
      src: '/svqk/regist-issue.png',
    },
  ];
</script>

<!-- eslint-disable svelte/no-at-html-tags -->
<svelte:head>
  {@html monokai}
</svelte:head>

<div class="container mx-auto lg:w-4/5">
  <p class="text-4xl title-font font-medium my-4">SVQK</p>
  <p class="text-gray-600 mb-4">{@html $t('msg.products.SVQK.feature')}</p>

  <p class="text-3xl mb-2">Quick Start</p>
  <p class="mb-2">{$t('msg.products.SVQK.usage.description')}</p>

  <Tabs>
    <TabItem open title="Windows">
      <ol class="list-decimal px-8">
        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setUtf-8')}</p>
          <CodeCopy><Highlight language={dos} code={'chcp 65001'} /></CodeCopy>
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.createPj')}</p>
          <CodeCopy>
            <Highlight
              language={dos}
              code={`mvn archetype:generate ^
  -DarchetypeGroupId=dev.aulait.svqk ^
  -DarchetypeArtifactId=svqk-archetype-refimpl ^
  -DarchetypeVersion=0.8 ^
  -DgroupId=my-groupId ^
  -DartifactId=my-artifactid`}
            />
          </CodeCopy>
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setup')}</p>
          <CodeCopy><Highlight language={dos} code={'cd my-artifactid'} /></CodeCopy>
          <CodeCopy><Highlight language={dos} code={'mvnw install -T 1C -P setup'} /></CodeCopy>
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.openWs')}</p>
          <CodeCopy
            ><Highlight language={dos} code={'code my-artifactid.code-workspace'} /></CodeCopy
          >
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.runTask')}</p>
          <ul class="list-disc pl-4">
            <li>
              <p class={qsStepClass}>
                <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd
                  class="px-2 py-1.5">P</Kbd
                > &gt; Tasks: Run task &gt; start-back
              </p>
            </li>
            <li>
              <p class={qsStepClass}>
                <Kbd class="px-2 py-1.5">Ctrl</Kbd> + <Kbd class="px-2 py-1.5">Shift</Kbd> + <Kbd
                  class="px-2 py-1.5">P</Kbd
                > &gt; Tasks: Run task &gt; start-front
              </p>
            </li>
          </ul>
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.access')}</p>
          <p class={qsStepClass}>
            <a
              href="http://localhost:5173"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >http://localhost:5173</a
            >
          </p>
        </li>
      </ol>
    </TabItem>

    <TabItem title="Mac">
      <ol class="list-decimal px-8">
        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.createPj')}</p>
          <CodeCopy>
            <Highlight
              language={bash}
              code={`mvn archetype:generate \\
  -DarchetypeGroupId=dev.aulait.svqk \\
  -DarchetypeArtifactId=svqk-archetype-refimpl \\
  -DarchetypeVersion=0.8 \\
  -DgroupId=my-groupId \\
  -DartifactId=my-artifactid`}
            />
          </CodeCopy>
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setup')}</p>
          <CodeCopy><Highlight language={bash} code={'cd my-artifactid'} /></CodeCopy>
          <CodeCopy><Highlight language={bash} code={'./mvnw install -T 1C -P setup'} /></CodeCopy>
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.openWs')}</p>
          <CodeCopy
            ><Highlight language={bash} code={'code my-artifactid.code-workspace'} /></CodeCopy
          >
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.runTask')}</p>
          <ul class="list-disc pl-4">
            <li>
              <p class={qsStepClass}>
                <Kbd class="px-2 py-1.5">⌘ Command</Kbd> + <Kbd class="px-2 py-1.5">⇧ Shift</Kbd> + <Kbd
                  class="px-2 py-1.5">P</Kbd
                > &gt; Tasks: Run task &gt; start-back
              </p>
            </li>
            <li>
              <p class={qsStepClass}>
                <Kbd class="px-2 py-1.5">⌘ Command</Kbd> + <Kbd class="px-2 py-1.5">⇧ Shift</Kbd> + <Kbd
                  class="px-2 py-1.5">P</Kbd
                > &gt; Tasks: Run task &gt; start-front
              </p>
            </li>
          </ul>
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.access')}</p>
          <p class={qsStepClass}>
            <a
              href="http://localhost:5173"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >http://localhost:5173</a
            >
          </p>
        </li>
      </ol>
    </TabItem>
  </Tabs>

  <!-- carousel -->
  <div
    class="overflow-hidden max-w-4xl mx-auto my-4"
    use:emblaCarouselSvelte={{ options: { loop: true }, plugins: [Autoplay({ delay: 5000 })] }}
  >
    <div class="flex items-center">
      {#each images as img}
        <div class="min-w-0" style="flex: 0 0 100%;">
          <img src={img.src} alt={img.alt} class="rounded-lg" />
        </div>
      {/each}
    </div>
  </div>
</div>
