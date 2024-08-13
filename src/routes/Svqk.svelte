<script>
  import { Carousel, Tabs, TabItem } from 'flowbite-svelte';

  export const images = [
    {
      alt: 'jeg',
      src: '/jpa-entity-generator.svg',
      title: 'jeg',
    },
    {
      alt: 'csv',
      src: '/batch-translator.svg',
      title: 'csv',
    },
  ];
</script>

<Tabs>
  <TabItem open title="Windows">mvnw</TabItem>
  <TabItem title="Mac">./mvnw</TabItem>
</Tabs>

<div>
  <Carousel {images} duration="3000" />
</div>
