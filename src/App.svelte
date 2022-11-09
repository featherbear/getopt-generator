<script lang="ts">
  import svelteLogo from "./assets/svelte.svg";
  import { generateShort, withOptions } from "./lib/getopt";
  import { ArgumentType, type OptionSet } from "./lib/getopt.type";
  import { deserialise, serialise } from "./lib/serialisation";
  import CodeOutput from "./lib/ui/CodeOutput.svelte";
  import OptionView from "./lib/ui/OptionView.svelte";

  let data: OptionSet = [];

  let stringParam = new URLSearchParams(location.search).get("s");
  if (stringParam) {
    try {
      data = deserialise<OptionSet>(stringParam);
    } catch (e) {
      console.error("Could not load URL");
    }
  }

  if (data.length == 0) {
    data = [
      {
        longFlag: "reee",
        description: "Description",
        argument: ArgumentType.REQUIRED,
        argumentPlaceholder: "data",
      },
      { shortFlag: "b", description: ["beeeee", "movie?"] },
    ];
  }

  let link: string;
  $: link =
    location.href.slice(0, location.href.indexOf(location.search)) +
    "?s=" +
    serialise(data);
</script>

<main>
  <h1>getopt generator</h1>

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

<footer class="footer footer-center p-4 bg-base-300 text-base-content">
  <div>
    <p>
      <a
        href="#"
        on:click={() => {
          navigator.clipboard.writeText(link).then(
            () => {
              alert("Link copied");
            },
            () => {
              alert("Failed to copy link");
            }
          );
        }}>{link}</a
      >
    </p>
  </div>
</footer>

<style lang="scss">
  main {
    flex: 1;
  }

  footer {
    > div > p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      max-width: 100%;
    }
  }
</style>
