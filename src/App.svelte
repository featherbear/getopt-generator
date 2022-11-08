<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import { generateShort, withOptions } from "./lib/getopt";
  import { ArgumentType, type OptionSet } from "./lib/getopt.type";
  import CodeOutput from "./lib/ui/CodeOutput.svelte";
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

  $: console.log(withOptions(data).generateLong());
</script>

<main>
  <h1>getopt generator</h1>
  <!-- 
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
  </div> -->

  <OptionView bind:data />

  <div class="divider" />

  <div class="flex w-full">
    <div class="h-20 flex-grow place-items-center">
      <div class="flex flex-col w-full border-opacity-50">
        <div class="form-control">
          <label class="input-group input-group-vertical">
            <span><pre>const char *optstring</pre></span>
            <input
              type="text"
              placeholder="Add options to see optstring"
              class="input input-bordered"
              value={withOptions(data).generateShort()}
              readonly
            />
          </label>
        </div>
        <div class="divider" />
        <div class="form-control">
          <label class="input-group input-group-vertical">
            <span><pre>struct option[]</pre></span>
            <textarea
              placeholder="Add options to see optstring"
              class="input input-bordered"
              value={withOptions(data).generateLong()}
              readonly
            />
          </label>
        </div>
      </div>
    </div>
    <div class="divider divider-horizontal" />
    <div class="flex-grow place-items-center">
      <CodeOutput
        command="cat helptext"
        lines={withOptions(data).generateHelpText({ outputAsArray: true })}
      />
    </div>
  </div>
</main>

<style lang="scss">
</style>
