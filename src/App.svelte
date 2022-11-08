<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import { generateShort, withOptions } from "./lib/getopt";
  import { ArgumentType, type OptionSet } from "./lib/getopt.type";
  import OptionView from "./lib/ui/OptionView.svelte";

  let data: OptionSet = [
    {
      longFlag: "reee",
      description: "Description",
      argument: ArgumentType.REQUIRED,
      argumentPlaceholder: "data",
    },
    { shortFlag: "b", description: ["beeeee", "movie?"] },
  ];
</script>

<main>
  <h1>Vite + Svelte</h1>

  <div class="card" />

  <p class="read-the-docs">Click on the Vite and Svelte logos to learn more</p>
  <div class="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    <div class="card-body">
      <h2 class="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>

  <OptionView bind:data />

  <div class="form-control">
    <label class="input-group input-group-vertical">
      <span><pre>const char *optstring</pre></span>
      <input
        type="text"
        placeholder="Add options to see optstring"
        class="input input-bordered"
        value={withOptions(data).generateShort()}
      />
    </label>
  </div>

  <div class="mockup-code">
    <pre data-prefix="$"><code>cat helpfile.txt</code></pre>
    <pre />
    {#each withOptions(data).generateHelpText({ outputAsArray: true }) as line}
      <pre data-prefix=""><code>{line}</code></pre>
    {/each}
  </div>

  <!--  -->
  <button class="btn">Button</button>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
