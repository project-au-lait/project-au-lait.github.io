<script lang="ts">
  import { CodeCopy } from 'svelte-code-copy';
  import { t } from '$lib/translations';
  import Highlight from 'svelte-highlight';
  import { dos } from 'svelte-highlight/languages';
  import { slide } from 'svelte/transition';
  import AngleRightOutline from 'flowbite-svelte-icons/AngleRightOutline.svelte';
  import type { Snippet } from 'svelte';
  interface Props {
    setUtf_8?: Snippet;
    createPjCommand: Snippet;
    setupCommand: Snippet;
    runTaskComand: Snippet;
  }

  let { setUtf_8, createPjCommand, setupCommand, runTaskComand }: Props = $props();

  const qsStepClass = 'mt-4 mb-2';
  const runTaskComandStyle = 'display: flex; align-items: center;';

  let accordionStates = $state([false, false, false, false, false, false]);
  const toggleAccordion = (index: number) => {
    accordionStates[index] = !accordionStates[index];
  };
  const createReferenceLink = (href: string, label: string) => {
    return `<a href="${href}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">${label}</a>`;
  };
  const refimplLabel = $t('msg.products.SVQK.usage.archetype.description.refimpl', {
    referenceLabel: createReferenceLink(
      $t('msg.products.SVQK.usage.archetype.referenceUrl'),
      $t('msg.products.SVQK.usage.archetype.referenceLabel')
    ),
  } as any);
  const archLavel = $t('msg.products.SVQK.usage.archetype.description.arch', {
    referenceLabel: createReferenceLink(
      $t('msg.products.SVQK.usage.archetype.referenceUrl'),
      $t('msg.products.SVQK.usage.archetype.referenceLabel')
    ),
  } as any);
  const skeletonLabel = $t('msg.products.SVQK.usage.archetype.description.skeleton', {
    referenceLabel: createReferenceLink(
      $t('msg.products.SVQK.usage.archetype.referenceUrl'),
      $t('msg.products.SVQK.usage.archetype.referenceLabel')
    ),
  } as any);
  const taskFinishedLink = $t('msg.products.SVQK.usage.taskFinished', {
    link: createReferenceLink('http://localhost:5173/worlds', 'http://localhost:5173/worlds'),
  } as any);
  const generatorDetailsLink = $t('msg.products.SVQK.usage.generatorDetails', {
    link: createReferenceLink($t('msg.products.SVQK.readmeLink'), 'README'),
  } as any);
</script>

<ol class="list-decimal sm:px-8 px-3">
  {@render setUtf_8?.()}

  <li>
    <p class={qsStepClass}>
      {$t('msg.products.SVQK.usage.createPj')}
    </p>
    {@render createPjCommand()}
    <button onclick={() => toggleAccordion(0)} class="accordion-header">
      <div class="accordion-icon-wrapper" class:rotated={accordionStates[0]}>
        <AngleRightOutline class="xs icon" size="sm" />
      </div>
      {$t('msg.products.SVQK.usage.summary.archetype')}
    </button>
    {#if accordionStates[0]}
      <div transition:slide class="pt-2">
        {$t('msg.products.SVQK.usage.archetype.supplement')}
        <ul class="list-disc ml-8 my-3">
          <li>
            <b>svqk-archetype-refimpl</b>
            <ul class="list-disc ml-4">
              <li>
                {@html refimplLabel}
              </li>
            </ul>
          </li>
          <li>
            <b>svqk-archetype-arch</b>
            <ul class="list-disc ml-4">
              <li>
                {@html archLavel}
              </li>
            </ul>
          </li>
          <li>
            <b>svqk-archetype-skeleton</b>
            <ul class="list-disc ml-4">
              <li>
                {@html skeletonLabel}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    {/if}
  </li>

  <li>
    <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setup')}</p>
    {@render setupCommand()}
    <button onclick={() => toggleAccordion(4)} class="accordion-header">
      <div class="accordion-icon-wrapper" class:rotated={accordionStates[4]}>
        <AngleRightOutline class="xs icon" size="sm" />
      </div>
      {$t('msg.products.SVQK.usage.summary.setupCommand')}
    </button>
    {#if accordionStates[4]}
      <div transition:slide class="pt-2">
        {$t('msg.products.SVQK.usage.setupCommand.description')}
        <ul class="list-decimal ml-8 my-3">
          <li>
            <b>{$t('msg.products.SVQK.usage.setupCommand.dbmsSetup.title')}</b>
            <ul>
              <li>{$t('msg.products.SVQK.usage.setupCommand.dbmsSetup.description')}</li>
            </ul>
          </li>
          <li>
            <b>{$t('msg.products.SVQK.usage.setupCommand.dbMigration.title')}</b>
            <ul>
              <li>{$t('msg.products.SVQK.usage.setupCommand.dbMigration.description')}</li>
            </ul>
          </li>
          <li>
            <b>{$t('msg.products.SVQK.usage.setupCommand.frontendBuild.title')}</b>
            <ul>
              <li>{$t('msg.products.SVQK.usage.setupCommand.frontendBuild.description')}</li>
            </ul>
          </li>
          <li>
            <b>{$t('msg.products.SVQK.usage.setupCommand.backendBuild.title')}</b>
            <ul>
              <li>
                {$t('msg.products.SVQK.usage.setupCommand.backendBuild.description')}
              </li>
            </ul>
          </li>
          <li>
            <b>{$t('msg.products.SVQK.usage.setupCommand.integrationTest.title')}</b>
            <ul>
              <li>
                {$t('msg.products.SVQK.usage.setupCommand.integrationTest.description')}
              </li>
            </ul>
          </li>
          <li>
            <b>{$t('msg.products.SVQK.usage.setupCommand.e2eTest.title')}</b>
            <ul>
              <li>
                {$t('msg.products.SVQK.usage.setupCommand.e2eTest.description')}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    {/if}
  </li>

  <li>
    <p class={qsStepClass}>
      {$t('msg.products.SVQK.usage.openWs')}
    </p>
    <CodeCopy>
      <Highlight language={dos} code={'code my-artifactid.code-workspace'} />
    </CodeCopy>
    <button onclick={() => toggleAccordion(2)} class="accordion-header">
      <div class="accordion-icon-wrapper" class:rotated={accordionStates[2]}>
        <AngleRightOutline class="xs icon" size="sm" />
      </div>
      {$t('msg.products.SVQK.usage.summary.structure')}
    </button>
    {#if accordionStates[2]}
      <div transition:slide class="pt-2">
        {$t('msg.products.SVQK.usage.structure')}
        <Highlight
          language={dos}
          code={`📁 my-artifactid 
├── 📁 my-artifactid-backend  <--- Quarkus (Maven)
│   └── 📄 pom.xml
├── 📁 my-artifactid-container  <- Docker
│   ├── 📄 compose.yml
│   └── 📄 pom.xml
├── 📁 my-artifactid-e2etest  <--- Playwright (pnpm)
│   ├── 📄 package.json
│   └── 📄 pom.xml
├── 📁 my-artifactid-frontend  <-- SvelteKit (pnpm)
│   ├── 📄 package.json
│   └── 📄 pom.xml
├── 📁 my-artifactid-migration  <- Flyway (Maven)
│   └── 📄 pom.xml
└── 📄 pom.xml`}
        />
      </div>
    {/if}
  </li>

  <li>
    <p class={qsStepClass}>{$t('msg.products.SVQK.usage.runTask')}</p>
    <ul class="list-disc pl-4">
      <li>
        <p class={qsStepClass} style={runTaskComandStyle}>
          {@render runTaskComand()}&gt; Tasks: Run task &gt; start-backend
        </p>
      </li>
      <li>
        <p class={qsStepClass} style={runTaskComandStyle}>
          {@render runTaskComand()}
          &gt; Tasks: Run task &gt; start-frontend
        </p>
      </li>
    </ul>
  </li>

  <li>
    <p class={qsStepClass}>{$t('msg.products.SVQK.usage.access')}</p>
    <p class={qsStepClass}>
      {@html createReferenceLink('http://localhost:5173', 'http://localhost:5173')}
    </p>
  </li>

  <li>
    <p class={qsStepClass}>{$t('msg.products.SVQK.usage.tryGenerator')}</p>
    <ul class="list-disc pl-4">
      <li>
        <p class={qsStepClass} style={runTaskComandStyle}>
          {@render runTaskComand()}
          &gt; Tasks: Run task &gt; generate
        </p>
      </li>
      <li><p class="mt-2 mb-2">Select a component -&gt; all</p></li>
      <li><p class="mt-2 mb-2">Enter tables -&gt; world</p></li>
    </ul>
    <p class="mt-4 mb-2">
      {@html taskFinishedLink}
    </p>
    <p class="mt-2 mb-2">
      {@html generatorDetailsLink}
    </p>
  </li>
</ol>

<style>
  .accordion-header {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    padding: 8px 16px;
    font: inherit;
    background: #fff;
    border: 1px solid #e5e7eb;
    border-radius: 4px;
    margin-bottom: 8px;
    transition:
      background-color 0.3s,
      box-shadow 0.3s;
  }

  .accordion-header:hover {
    background: #f9fafb;
    box-shadow: 0 1px 2px #0001;
  }

  .accordion-icon-wrapper {
    transition: transform 0.3s ease;
  }

  .rotated {
    transform: rotate(90deg);
  }
</style>
