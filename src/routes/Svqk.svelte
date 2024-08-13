<script>
  import { Carousel } from 'flowbite-svelte';

    export const images = [
    {
      alt: 'jeg',
      src: '/jpa-entity-generator.svg',
      title: 'jeg'
    },
    {
      alt: 'csv',
      src: '/batch-translator.svg',
      title: 'csv'
    },
  ];


</script>

<div >
  <Carousel {images} duration="3000" />
</div>
