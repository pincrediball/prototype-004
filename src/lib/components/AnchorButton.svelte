<script lang="ts">
  export let href: string;
</script>

<a {href} class="flex group font-bold text-xl w-full text-center">
  <img
    class="invisible group-hover:visible group-hover:animate-spin inline-block w-8 m-2"
    src="/favicon.png"
    alt="Spinning Pincrediball logo"
  />
  <div
    class="
    py-2 px-8 grow shadow-firm text-amber-50
    bg-gradient-to-b from-purple-500 to-purple-800
  group-hover:from-purple-600 group-hover:to-purple-900
  "
  >
    <slot />
  </div>
  <img
    class="invisible group-hover:visible group-hover:animate-spin inline-block w-8 m-2"
    src="/favicon.png"
    alt="Spinning Pincrediball logo"
  />
</a>
