<script lang="ts">
  import { show } from './lib/store';
  import Activity from './lib/Activity.svelte';

  type Schema = Record<string, (x: string) => number | string>;
  type FromSchema<S extends Schema> = { [K in keyof S]: ReturnType<S[K]> };
  type DataRecord = FromSchema<typeof recordSchema>;

  let records: DataRecord[];
  let recordsGrouped: Record<string, DataRecord[]>;
  let status = "";
  let selected = [];

  const types = {
    number: parseFloat,
    string: (x: any) => `${x}`,
  };

  const recordSchema = {
    Subject: types.string,
    Filename: types.string,
    Epoch: types.number,
    "Weight (lbs)": types.number,
    Age: types.number,
    Gender: types.string,
    Date: types.string,
    Hour: types.number,
    "Day of Week": types.string,
    "Day of Week Num": types.number,
    Sedentary: types.number,
    Light: types.number,
    Moderate: types.number,
    Vigorous: types.number,
    "% in Sedentary": types.number,
    "% in Light": types.number,
    "% in Moderate": types.number,
    "% in Vigorous": types.number,
    "Total MVPA": types.number,
    "% in MVPA": types.number,
    "Axis 1 Counts": types.number,
    "Axis 2 Counts": types.number,
    "Axis 3 Counts": types.number,
    "Vector Magnitude Counts": types.number,
    "Steps Counts": types.number,
    Time: types.number,
    "Time Unfiltered": types.number,
    "Calendar Days": types.number,
  };


  function transform<S extends Schema>(
    obj: {},
    schema: S
  ) {
    return Object.fromEntries(
      Object.keys(schema).map(k => [k, schema[k](obj[k])])
    ) as FromSchema<S>;
  };

  function group<T extends Record<string, string | number>, K extends keyof T>(
    arr: T[],
    key: K,
  ) {
    const result = Object.fromEntries(arr.map(x => [x[key], []])) as Record<T[K], T[]>;

    for(let i = 0; i < arr.length; i++) {
      const current = arr[i];
      result[current[key]].push(current);
    }
    
    return result;
  }


  function zip(a: Array<any>, b: Array<any>) {
    const shortest = Math.min(a.length, b.length);
    const result = [];

    for (let i = 0; i < shortest; i++) {
      result.push([a[i], b[i]]);
    }

    return result;
  }

  function readFileContent(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const fr = new FileReader();
      fr.onload = () => resolve(fr.result as string);
      fr.onerror = (e) => reject(e);

      fr.readAsText(file);
    });
  }

  async function handleFileChange(e: Event) {
    const file = this.files[0];

    if (file) {
      status = "loading";
      const rawContent = await readFileContent(file);
      status = "processing";
      const csv = rawContent
        .split("\n")
        .filter(l => !!l)
        .map((l) => l.split(","));

      const head = csv[0].slice(0, csv[0].indexOf(""));
      records = csv
        .slice(1)
        .map((l) => Object.fromEntries(zip(head, l)))
        .map((r) => transform(r, recordSchema));

      recordsGrouped = group(records, 'Filename');

      status = "finished loading";
    }
  }
</script>

<div class="sidebar">
  <input type="file" on:change={handleFileChange} />

  <label>
    <input type="checkbox" bind:checked={$show.combined}>
    <span>Combined</span>
  </label>

  <label>
    <input type="checkbox" bind:checked={$show.r}>
    <span>R</span>
  </label>

  <label>
    <input type="checkbox" bind:checked={$show.g}>
    <span>G</span>
  </label>

  <label>
    <input type="checkbox" bind:checked={$show.b}>
    <span>B</span>
  </label>

  <label>
    <input type="checkbox" bind:checked={$show.info}>
    <span>Info</span>
  </label>
  
  {#if status}
    <h3>
      {status}
    </h3>
  {/if}
  
  {#if recordsGrouped}
    <select bind:value={selected} multiple>
      {#each Object.entries(recordsGrouped) as [k, recs]}
        <option value={k}>{k}</option>
      {/each}
    </select>
  {/if}
</div>

<main>
  {#each selected as sel}
    <Activity data={recordsGrouped[sel]} />
  {/each}
</main>

<style>
  .sidebar {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 340px;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 1rem;
    box-sizing: border-box;
    background: #eee;
  }

  main {
    position: relative;
    margin-left: 340px;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }

  select {
    flex: 1;
  }
</style>
