<script lang="ts">
  export let clazz = '';
</script>

<button on:click class={`inline-flex group font-bold text-xl ${clazz}`}>
  <div
    class="
    py-2 px-8 grow shadow-firm
    bg-gradient-to-b from-purple-500 to-purple-800
  group-hover:from-purple-600 group-hover:to-purple-900
  "
  >
    <slot />
  </div>
</button>
