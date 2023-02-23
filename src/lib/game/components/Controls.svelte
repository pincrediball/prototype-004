<script lang="ts">
  import { game } from '$lib/game/stores';
  import { onDestroy } from 'svelte';

  function run() {
    $game.run();
  }

  function stop() {
    $game.reset();
  }

  onDestroy(() => {
    $game.pause();
  });
</script>

<div class="grid grid-cols-3 gap-2">
  <button
    on:click={stop}
    class="
  py-2 px-4
  bg-red-700 border border-red-800 shadow-firm
  hover:bg-red-500 hover:border-red-900
">🔄 Reset</button
  >
  <button
    on:click={run}
    class="
  py-2 px-4
  bg-green-700 border border-green-800 shadow-firm
  hover:bg-green-500 hover:border-green-900
">▶ Run it!</button
  >
  <button
    class="
  py-2 px-4
  bg-purple-700 border border-purple-800 shadow-firm
  hover:bg-purple-500 hover:border-purple-900
">⏩ Skip</button
  >
</div>
