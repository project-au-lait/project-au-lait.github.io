<script lang="ts">
  import '../app.css';
  import Header from '$lib/Header.svelte';
  import Footer from '$lib/Footer.svelte';
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<Header />

{@render children?.()}

<Footer />
