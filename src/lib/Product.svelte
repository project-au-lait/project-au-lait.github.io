<script lang="ts">
  import GitHubButton from './GitHubButton.svelte';

  export let name;
  export let description;
  export let umlPath;
  export let usage;
  export let repo;

  let mounted: boolean;
  setTimeout(() => (mounted = typeof window !== 'undefined'));
</script>

<div class="product">
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container sm:px-5 sm:py-16 py-8 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h1 class="text-gray-900 text-4xl title-font font-medium mb-4">
            {name}
          </h1>
          <div class="mb-6">
            <p class="leading-relaxed mb-2">
              <!-- eslint-disable-next-line svelte/no-at-html-tags -->
              {#key mounted}{@html description}{/key}
            </p>
          </div>
          {#if usage}
            <div class="mb-6">
              <p class="leading-relaxed mb-2">{usage}</p>
            </div>
          {/if}
          <GitHubButton {repo} />
        </div>
        <img
          alt="PlantUML"
          class="lg:w-1/2 w-full object-contain object-center rounded"
          src={umlPath}
        />
      </div>
    </div>
  </section>
</div>
