<script lang="ts">
  import AnchorButton from '../lib/components/AnchorButton.svelte';

  let isLoaded = false;

  // TODO: Create Pha
</script>

<div class="flex flex-col justify-center min-h-screen">
  <div class="max-w-32 mx-auto text-center mb-32">
    <h1 class="font-bold text-8xl text-shadow text-stroke">Pincrediball!</h1>
    <p class="my-4 text-2xl">The Automata Pinball Wizard game!</p>
    <p class="my-4 text-xs opacity-75">
      ⚠ Careful: this game contains (sometimes flashy) animations.
    </p>
    <AnchorButton href="/menu">Play ball!</AnchorButton>
  </div>
</div>
