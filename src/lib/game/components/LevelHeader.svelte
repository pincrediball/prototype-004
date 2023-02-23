<script lang="ts">
  import { level } from '$lib/game/stores';
</script>

<div class="px-4 py-2 bg-black/40 shadow-inner-firm">
  <h2 class="font-bold text-4xl text-center">{$level?.title || 'Current Level'}</h2>
</div>
