<script lang="ts">
  import { machine } from '$lib/game/stores';
  import { onMount } from 'svelte';
  import { MachineScene } from './MachineScene';

  $: style = `
    width: ${$machine.width}px;
    height: ${$machine.height}px;`;

  let game: Phaser.Game;

  onMount(() => {
    const scene = new MachineScene();
    game = new Phaser.Game({
      type: Phaser.AUTO,
      parent: 'phaserElement',
      width: 400,
      height: 600,
      scene: [scene],
    });
    // Just for now to see that it all works:
    setTimeout(() => scene.plunge(), 1000);
  });
</script>

<div class="px-4 text-center">
  <div class="border border-black shadow-firm relative">
    <div id="phaserElement" {style} />
  </div>
</div>
