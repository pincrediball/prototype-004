<script>
  import AnchorButton from '../../lib/components/AnchorButton.svelte';
</script>

<div class="flex flex-col justify-center min-h-screen">
  <div class="max-w-32 mx-auto text-center">
    <div class="flex flex-col gap-4">
      <AnchorButton href="/levels/001">New Game</AnchorButton>
      <AnchorButton href="/options">Options</AnchorButton>
      <AnchorButton href="/">Exit</AnchorButton>
    </div>
  </div>
</div>
