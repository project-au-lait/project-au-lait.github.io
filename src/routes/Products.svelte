<script>
  import { products } from '$lib/data/products';
  import Product from '$lib/Product.svelte';
  import { t } from '$lib/translations';
</script>

<div class="product-list">
  {#each products as product (product.id)}
    <Product
      name={product.name}
      description={$t(`msg.products.${product.name}.description`)}
      umlPath={product.umlPath}
      usage={$t(`msg.products.${product.name}.usage`)}
      repo={product.repo}
    />
  {/each}
</div>
