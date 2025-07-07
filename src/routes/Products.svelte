<script lang="ts">
  import { products } from '$lib/data/products';
  import Product from '$lib/Product.svelte';
  import * as m from '$lib/paraglide/messages';

  function getMessageKey(productName: string, type: 'description' | 'usage'): keyof typeof m {
    return `${productName}_${type}` as keyof typeof m;
  }

  function getProductDescription(name: string): string | undefined {
    const key = getMessageKey(name, 'description');
    return (m[key] as () => string)();
  }

  function getProductUsage(name: string): string | undefined {
    const key = getMessageKey(name, 'usage');

    return (m[key] as () => string)();
  }
</script>

<div class="product-list">
  {#each products as product (product.id)}
    <Product
      name={product.name}
      description={getProductDescription(product.name)}
      umlPath={product.umlPath}
      usage={getProductUsage(product.name)}
      repo={product.repo}
    />
  {/each}
</div>
