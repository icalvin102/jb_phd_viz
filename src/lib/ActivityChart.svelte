<script type="ts">
  import type { Swizzle, Color } from "./Activity.svelte";
  const rgb: Swizzle = ([r, g, b]) => [r, g, b];

  export let size = 10;
  export let swizzle = rgb;
  export let entries;
  export let onMouseOver;

  const cssColor = ([a, b, c]: Color, hsl = false) => {
    return hsl
      ? `hsl(${a*360}, ${b*100}%, ${c*100}%)`
      : `rgb(${a*255}, ${b*255}, ${c*255})`
  }

</script>

<svg
  viewBox="0 0 {7 * size} {24 * size}"
  xmlns="http://www.w3.org/2000/svg"
>
  {#each entries as { x, y, color, data }}
    <rect
      x={x * size}
      y={y * size}
      width={size}
      height={size}
      fill={cssColor(swizzle(color))}
      on:focus
      on:mouseover={() => onMouseOver && onMouseOver(data)}
    />
  {/each}
</svg>
