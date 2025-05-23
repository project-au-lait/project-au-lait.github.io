<script lang="ts">
  import { CodeCopy } from 'svelte-code-copy';
  import Highlight from 'svelte-highlight';
  import { dos } from 'svelte-highlight/languages';
  import { slide } from 'svelte/transition';
  import AngleRightOutline from 'flowbite-svelte-icons/AngleRightOutline.svelte';
  import type { Snippet } from 'svelte';
  import { m } from '$lib/paraglide/messages';
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

  const refimplLabel = m.SVQK_archetype_refimpl({
    referenceLabel: createReferenceLink(
      m.SVQK_archetype_referenceUrl(),
      m.SVQK_archetype_referenceLabel()
    ),
  });
  const archLavel = m.SVQK_archetype_arch({
    referenceLabel: createReferenceLink(
      m.SVQK_archetype_referenceUrl(),
      m.SVQK_archetype_referenceLabel()
    ),
  });
  const skeletonLabel = m.SVQK_archetype_skeleton({
    referenceLabel: createReferenceLink(
      m.SVQK_archetype_referenceUrl(),
      m.SVQK_archetype_referenceLabel()
    ),
  });
  const taskFinishedLink = m.SVQK_usage_taskFinished({
    link: createReferenceLink('http://localhost:5173/worlds', 'http://localhost:5173/worlds'),
  });
  const generatorDetailsLink = m.SVQK_usage_generatorDetails({
    link: createReferenceLink(m.SVQK_readmeLink() as unknown as string, 'README'),
  });
</script>

<ol class="list-decimal sm:px-8 px-3">
  {@render setUtf_8?.()}

  <li>
    <p class={qsStepClass}>
      {m.SVQK_usage_createPj()}
    </p>
    {@render createPjCommand()}
    <button onclick={() => toggleAccordion(0)} class="accordion-header">
      <div class="accordion-icon-wrapper" class:rotated={accordionStates[0]}>
        <AngleRightOutline class="xs icon" size="sm" />
      </div>
      {m.SVQK_summaryArchetype()}
    </button>
    {#if accordionStates[0]}
      <div transition:slide class="pt-2">
        {m.SVQK_archetype_supplement()}
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
    <p class={qsStepClass}>{m.SVQK_usage_setup()}</p>
    {@render setupCommand()}
    <button onclick={() => toggleAccordion(4)} class="accordion-header">
      <div class="accordion-icon-wrapper" class:rotated={accordionStates[4]}>
        <AngleRightOutline class="xs icon" size="sm" />
      </div>
      {m.SVQK_summarySetupCommand()}
    </button>
    {#if accordionStates[4]}
      <div transition:slide class="pt-2">
        {m.SVQK_setupCommandDescription()}
        <ul class="list-decimal ml-8 my-3">
          <li>
            <b>{m.SVQK_dbmsSetupTitle()}</b>
            <ul>
              <li>{m.SVQK_dbmsSetupDescription()}</li>
            </ul>
          </li>
          <li>
            <b>{m.SVQK_dbMigrationTitle()}</b>
            <ul>
              <li>{m.SVQK_dbMigrationDescription()}</li>
            </ul>
          </li>
          <li>
            <b>{m.SVQK_frontendBuildTitle()}</b>
            <ul>
              <li>{m.SVQK_frontendBuildDescription()}</li>
            </ul>
          </li>
          <li>
            <b>{m.SVQK_backendBuildTitle()}</b>
            <ul>
              <li>
                {m.SVQK_backendBuildDescription()}
              </li>
            </ul>
          </li>
          <li>
            <b>{m.SVQK_integrationTestTitle()}</b>
            <ul>
              <li>
                {m.SVQK_integrationTestDescription()}
              </li>
            </ul>
          </li>
          <li>
            <b>{m.SVQK_e2eTestTitle()}</b>
            <ul>
              <li>
                {m.SVQK_e2eTestDescription()}
              </li>
            </ul>
          </li>
        </ul>
      </div>
    {/if}
  </li>

  <li>
    <p class={qsStepClass}>
      {m.SVQK_usage_openWs()}
    </p>
    <CodeCopy>
      <Highlight language={dos} code={'code my-artifactid.code-workspace'} />
    </CodeCopy>
    <button onclick={() => toggleAccordion(2)} class="accordion-header">
      <div class="accordion-icon-wrapper" class:rotated={accordionStates[2]}>
        <AngleRightOutline class="xs icon" size="sm" />
      </div>
      {m.SVQK_summaryStructure()}
    </button>
    {#if accordionStates[2]}
      <div transition:slide class="pt-2">
        {m.SVQK_usage_structure()}
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
    <p class={qsStepClass}>{m.SVQK_usage_runTask()}</p>
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
    <p class={qsStepClass}>{m.SVQK_usage_access()}</p>
    <p class={qsStepClass}>
      {@html createReferenceLink('http://localhost:5173', 'http://localhost:5173')}
    </p>
  </li>

  <li>
    <p class={qsStepClass}>{m.SVQK_usage_tryGenerator()}</p>
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
