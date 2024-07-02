<template>
  <!-- <NuxtLayout> -->
  <!-- <NuxtPage /> -->

  <!-- </NuxtLayout> -->
  Mermaid:
  <Mermaid>
    <pre>
      sequenceDiagram
	Site->>mermaid: initialize
	Site->>mermaid: content loaded
	mermaid->>mermaidAPI: init
     </pre
    >
  </Mermaid>
  Mermaid:------------------------
  <Mermaid>
    <pre>
    journey
    title My working day
    section Go to work
      Make tea: 5: Me
      Go upstairs: 3: Me
      Do work: 1: Me, Cat
    section Go home
      Go downstairs: 5: Me
      Sit down: 5: Me
  </pre
    >
  </Mermaid>

  <ClientOnly>
    <MarkmapToc></MarkmapToc>
  </ClientOnly>
</template>
