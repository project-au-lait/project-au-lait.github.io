<script>
  export let name;
  export let description;
  export let umlPath;
  export let usage;
  export let repo;
</script>

<div class="product">
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-16 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <div class="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h1 class="text-gray-900 text-4xl title-font font-medium mb-4">
            {name}
          </h1>
          <div class="mb-6">
            <!-- eslint-disable-next-line svelte/no-at-html-tags -->
            <p class="leading-relaxed mb-2">{@html description}</p>
          </div>
          {#if usage}
            <div class="mb-6">
              <p class="leading-relaxed mb-2">{usage}</p>
            </div>
          {/if}
          <a
            href={repo}
            target="_blank"
            class="inline-flex items-center px-3 py-2 bg-gray-900 text-white rounded-md shadow hover:bg-gray-700"
          >
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.727-4.042-1.612-4.042-1.612-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.084-.729.084-.729 1.204.084 1.837 1.237 1.837 1.237 1.07 1.835 2.807 1.305 3.492.997.107-.774.418-1.305.76-1.605-2.665-.305-5.467-1.333-5.467-5.93 0-1.31.465-2.38 1.235-3.22-.123-.304-.535-1.527.117-3.18 0 0 1.008-.322 3.3 1.23.957-.266 1.984-.399 3.003-.404 1.018.005 2.045.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.24 2.876.118 3.18.77.84 1.233 1.91 1.233 3.22 0 4.61-2.806 5.623-5.475 5.92.43.372.815 1.104.815 2.225 0 1.606-.015 2.898-.015 3.293 0 .322.217.694.825.577C20.565 21.795 24 17.298 24 12c0-6.63-5.37-12-12-12z"
              />
            </svg>
            GitHub
          </a>
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
