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
  import { slide } from 'svelte/transition';
  import { Button } from 'flowbite-svelte';
  import BookOutline from 'flowbite-svelte-icons/BookOutline.svelte';
  import LinkOutline from 'flowbite-svelte-icons/LinkOutline.svelte';
  import AngleRightOutline from 'flowbite-svelte-icons/AngleRightOutline.svelte';

  import { onMount } from 'svelte';

  const qsStepClass = 'mt-4 mb-2';

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
  const toggleAccordion = (index: number) => {
    accordionStates[index] = !accordionStates[index];
  };
  const createReferenceLink = (href: string, label: string) => {
    return `<a href="${href}" class="font-medium text-blue-600 dark:text-blue-500 hover:underline" target="_blank">${label}</a>`;
  };
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
      <ol class="list-decimal sm:px-8 px-3">
        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setUtf-8')}</p>
          <CodeCopy><Highlight language={dos} code={'chcp 65001'} /></CodeCopy>
        </li>

        <li>
          <p class={qsStepClass}>
            {$t('msg.products.SVQK.usage.createPj')}
          </p>
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
          <div on:click={() => toggleAccordion(0)} class="accordion-header">
            <div class="accordion-icon-wrapper" class:rotated={accordionStates[0]}>
              <AngleRightOutline class="xs icon" size="sm" />
            </div>
            {$t('msg.products.SVQK.usage.summary.archetype')}
          </div>
          {#if accordionStates[0]}
            <div transition:slide class="pt-2">
              {$t('msg.products.SVQK.usage.archetype.supplement')}
              <ul class="list-disc ml-8 my-3">
                <li>
                  <b>svqk-archetype-refimpl</b>
                  <ul class="list-disc ml-4">
                    <li>
                      {@html $t('msg.products.SVQK.usage.archetype.description.refimpl', {
                        referenceLabel: createReferenceLink(
                          $t('msg.products.SVQK.usage.archetype.referenceUrl'),
                          $t('msg.products.SVQK.usage.archetype.referenceLabel')
                        ),
                      })}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>svqk-archetype-arch</b>
                  <ul class="list-disc ml-4">
                    <li>
                      {@html $t('msg.products.SVQK.usage.archetype.description.arch', {
                        referenceLabel: createReferenceLink(
                          $t('msg.products.SVQK.usage.archetype.referenceUrl'),
                          $t('msg.products.SVQK.usage.archetype.referenceLabel')
                        ),
                      })}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>svqk-archetype-skeleton</b>
                  <ul class="list-disc ml-4">
                    <li>
                      {@html $t('msg.products.SVQK.usage.archetype.description.skeleton', {
                        referenceLabel: createReferenceLink(
                          $t('msg.products.SVQK.usage.archetype.referenceUrl'),
                          $t('msg.products.SVQK.usage.archetype.referenceLabel')
                        ),
                      })}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          {/if}
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setup')}</p>
          <CodeCopy><Highlight language={dos} code={'cd my-artifactid'} /></CodeCopy>
          <CodeCopy><Highlight language={dos} code={'mvnw install -T 1C -P setup'} /></CodeCopy>
          <div on:click={() => toggleAccordion(1)} class="accordion-header">
            <div class="accordion-icon-wrapper" class:rotated={accordionStates[1]}>
              <AngleRightOutline class="xs icon" size="sm" />
            </div>
            {$t('msg.products.SVQK.usage.summary.setupCommand')}
          </div>
          {#if accordionStates[1]}
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
          <div on:click={() => toggleAccordion(2)} class="accordion-header">
            <div class="accordion-icon-wrapper" class:rotated={accordionStates[2]}>
              <AngleRightOutline class="xs icon" size="sm" />
            </div>
            {$t('msg.products.SVQK.usage.summary.structure')}
          </div>
          {#if accordionStates[2]}
            <div transition:slide class="pt-2">
              {$t('msg.products.SVQK.usage.structure')}
              <Highlight
                language={dos}
                code={`📁 my-artifactid 
├── 📁 my-artifactid-backend  <------ Quarkus (Maven)
│   └── 📄 pom.xml
├── 📁 my-artifactid-container  <- Docker
│   ├── 📄 compose.yml
│   └── 📄 pom.xml
├── 📁 my-artifactid-e2etest  <--- Playwright (pnpm)
│   ├── 📄 package.json
│   └── 📄 pom.xml
├── 📁 my-artifactid-frontend  <----- SvelteKit (pnpm)
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
      <ol class="list-decimal sm:px-8 px-2">
        <li>
          <p class={qsStepClass}>
            {$t('msg.products.SVQK.usage.createPj')}
          </p>
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
          <div on:click={() => toggleAccordion(3)} class="accordion-header">
            <div class="accordion-icon-wrapper" class:rotated={accordionStates[3]}>
              <AngleRightOutline class="xs icon" size="sm" />
            </div>
            {$t('msg.products.SVQK.usage.summary.archetype')}
          </div>
          {#if accordionStates[3]}
            <div transition:slide class="pt-2">
              {$t('msg.products.SVQK.usage.archetype.supplement')}
              <ul class="list-disc ml-8 my-3">
                <li>
                  <b>svqk-archetype-refimpl</b>
                  <ul class="list-disc ml-4">
                    <li>
                      {@html $t('msg.products.SVQK.usage.archetype.description.refimpl', {
                        referenceLabel: createReferenceLink(
                          $t('msg.products.SVQK.usage.archetype.referenceUrl'),
                          $t('msg.products.SVQK.usage.archetype.referenceLabel')
                        ),
                      })}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>svqk-archetype-arch</b>
                  <ul class="list-disc ml-4">
                    <li>
                      {@html $t('msg.products.SVQK.usage.archetype.description.arch', {
                        referenceLabel: createReferenceLink(
                          $t('msg.products.SVQK.usage.archetype.referenceUrl'),
                          $t('msg.products.SVQK.usage.archetype.referenceLabel')
                        ),
                      })}
                    </li>
                  </ul>
                </li>
                <li>
                  <b>svqk-archetype-skeleton</b>
                  <ul class="list-disc ml-4">
                    <li>
                      {@html $t('msg.products.SVQK.usage.archetype.description.skeleton', {
                        referenceLabel: createReferenceLink(
                          $t('msg.products.SVQK.usage.archetype.referenceUrl'),
                          $t('msg.products.SVQK.usage.archetype.referenceLabel')
                        ),
                      })}
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          {/if}
        </li>

        <li>
          <p class={qsStepClass}>{$t('msg.products.SVQK.usage.setup')}</p>
          <CodeCopy><Highlight language={bash} code={'cd my-artifactid'} /></CodeCopy>
          <CodeCopy><Highlight language={bash} code={'chmod u+x mvnw'} /></CodeCopy>
          <CodeCopy><Highlight language={bash} code={'./mvnw install -T 1C -P setup'} /></CodeCopy>
          <div on:click={() => toggleAccordion(4)} class="accordion-header">
            <div class="accordion-icon-wrapper" class:rotated={accordionStates[4]}>
              <AngleRightOutline class="xs icon" size="sm" />
            </div>
            {$t('msg.products.SVQK.usage.summary.setupCommand')}
          </div>
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
            <Highlight language={bash} code={'code my-artifactid.code-workspace'} />
          </CodeCopy>
          <div on:click={() => toggleAccordion(5)} class="accordion-header">
            <div class="accordion-icon-wrapper" class:rotated={accordionStates[5]}>
              <AngleRightOutline class="xs icon" size="sm" />
            </div>
            {$t('msg.products.SVQK.usage.summary.structure')}
          </div>
          {#if accordionStates[5]}
            <div transition:slide class="pt-2">
              {$t('msg.products.SVQK.usage.structure')}
              <Highlight
                language={dos}
                code={`📁 my-artifactid 
├── 📁 my-artifactid-backend  <------ Quarkus (Maven)
│   └── 📄 pom.xml
├── 📁 my-artifactid-container  <- Docker
│   ├── 📄 compose.yml
│   └── 📄 pom.xml
├── 📁 my-artifactid-e2etest  <--- Playwright (pnpm)
│   ├── 📄 package.json
│   └── 📄 pom.xml
├── 📁 my-artifactid-frontend  <----- SvelteKit (pnpm)
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

  .accordion-header {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 4px;
    gap: 6px;
  }

  .accordion-icon-wrapper {
    transition: transform 0.3s ease;
  }

  .rotated {
    transform: rotate(90deg);
  }
</style>
