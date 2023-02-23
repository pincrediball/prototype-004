<script lang="ts">
  import { goto } from '$app/navigation';

  // Svelte components:
  import GameButton from '$lib/components/GameButton.svelte';
  import Controls from '$lib/game/components/Controls.svelte';
  import LevelHeader from '$lib/game/components/LevelHeader.svelte';
  import LevelToolbox from '$lib/game/components/LevelToolbox.svelte';
  import Machine from '$lib/game/components/Machine.svelte';
  import Playbook from '$lib/game/components/Playbook.svelte';

  // Stores:
  import { game } from '$lib/game/stores';
  import { Game } from '$lib/game/entities/Game';

  // Level:
  import { LevelA01 } from '$lib/game/levels/LevelA01';

  let level = new LevelA01();
  game.set(new Game(level));

  function exit() {
    goto('/menu');
  }
</script>

<div class="m-4">
  <LevelHeader />
  <div class="grid grid-cols-[1fr_min-content_1fr] mt-4">
    <div class="flex flex-col gap-2">
      <LevelToolbox />
      <div class="mt-auto flex flex-col gap-2">
        <GameButton clazz="w-full">💸 Get a hint</GameButton>
        <GameButton clazz="w-full" on:click={exit}>🏃‍♂️ Exit level</GameButton>
      </div>
    </div>
    <div>
      <Machine />
    </div>
    <div class="flex flex-col gap-4">
      <Playbook />
      <div>
        <Controls />
      </div>
      <div class="text-xl px-4 py-2 border-2 border-black bg-neutral-500 mt-auto shadow-firm">
        <p>1200 points = 🥉 bronze!</p>
        <p>2400 points = 🥈 silver!</p>
        <p>3500 points = 🥇 gold!</p>
      </div>
    </div>
  </div>
</div>
