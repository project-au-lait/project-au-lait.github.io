<script lang="ts">
  import GithubSolid from 'flowbite-svelte-icons/GithubSolid.svelte';
  import { Button } from 'flowbite-svelte';

  export let repo: string;
</script>

<Button size="sm" color="dark" href={repo} target="_blank">
  <GithubSolid class="me-2" />GitHub
</Button>
