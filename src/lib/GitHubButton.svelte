<script lang="ts">
  import GithubSolid from 'flowbite-svelte-icons/GithubSolid.svelte';
  import { Button } from 'flowbite-svelte';

  interface Props {
    repo: string;
  }

  let { repo }: Props = $props();
</script>

<Button size="sm" color="dark" href={repo} target="_blank">
  <GithubSolid class="me-2" />GitHub
</Button>
