<script type="ts" context="module">
  export type Color = [r: number, g: number, b: number];
  export type RGB = 'r' | 'g' | 'b';
  export type Swizzle = (c: Color) => Color;
</script>

<script type="ts">
  import ActivityChart from "./ActivityChart.svelte";
import { show } from "./store";

  export let data;

  const swizzle: Record<string, Swizzle> = {
    rgb: ([r, g, b]) => [r, g, b],
    rrr: ([r, g, b]) => [r, r, r],
    ggg: ([r, g, b]) => [g, g, g],
    bbb: ([r, g, b]) => [b, b, b],
  };

  const getHour = (e) => e.Hour;
  const getDay = (e) => e["Day of Week Num"] - 1;
  const fromPercent = (p: number) => p / 100;

  const transform = (e) => ({
    x: getDay(e),
    y: getHour(e),
    color: [
      fromPercent(e["% in Sedentary"]),
      fromPercent(e["% in Light"]),
      fromPercent(e["% in MVPA"]),
    ] as Color,
    data: e,
  });


  const onMouseOver = (data) => currentEntry = data;

  // "% in Sedentary": "78.33%",
  // "% in Light": "18.33%",
  // "% in Moderate": "1.67%",
  $: entries = data.map(transform);
  $: currentEntry = entries[0].data;
</script>

<div class="flex gap-4">
  <div class="flex charts">
    {#if $show.combined}
      <ActivityChart {entries} {onMouseOver} swizzle={swizzle.rgb} />
    {/if}
    {#if $show.r}
      <ActivityChart {entries} {onMouseOver} swizzle={swizzle.rrr} />
    {/if}
    {#if $show.g}
      <ActivityChart {entries} {onMouseOver} swizzle={swizzle.ggg} />
    {/if}
    {#if $show.b}
      <ActivityChart {entries} {onMouseOver} swizzle={swizzle.bbb} />
    {/if}
  </div>
  
  {#if $show.info}
    <div>
      <pre>
        {JSON.stringify(currentEntry, null, 2)}
      </pre>
    </div>
  {/if}
</div>


<!-- <Info data={currentEntry} /> -->
<style>
  .flex {
    display: flex;
  }
  
  .gap-4 {
    gap: 1rem;
  }

  .charts {
    height: 480px;
  }
</style>
