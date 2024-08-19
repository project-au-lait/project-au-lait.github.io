<script>
  import { Carousel, P, Tabs, TabItem } from 'flowbite-svelte';
  // import { t } from '$lib/translations';

  const images = [
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

  const command = {
    win: `
chcp 65001

mvn archetype:generate ^
  -DarchetypeGroupId=dev.aulait.svqk ^
  -DarchetypeArtifactId=svqk-archetype-refimpl ^
  -DarchetypeVersion=0.8 ^
  -DgroupId=my-groupId ^
  -DartifactId=my-artifactId

cd my-artifactId

mvnw install -T 1C -P setup

code my-artifactId.code-workspace
    `,
    mac: `
mvn archetype:generate \\
  -DarchetypeGroupId=dev.aulait.svqk \\
  -DarchetypeArtifactId=svqk-archetype-refimpl \\
  -DarchetypeVersion=0.8 \\
  -DgroupId=my-groupId \\
  -DartifactId=my-artifactId

cd my-artifactId

./mvnw install -T 1C -P setup

code my-artifactId.code-workspace
    `,
  };
</script>

<div class="container mx-auto lg:w-4/5">
  <P size="6xl">SVQK</P>
  <P size="4xl">Features</P>
  <P size="4xl">Quick Start</P>
  <Tabs>
    <TabItem open title="Windows">
      <pre><code>{command.win}</code></pre>
    </TabItem>
    <TabItem title="Mac">
      <pre><code>{command.mac}</code></pre>
    </TabItem>
  </Tabs>

  <div>
    <Carousel {images}  duration="5000" />
  </div>
</div>
