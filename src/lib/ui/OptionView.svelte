<script lang="ts">
    import type { Option, OptionSet } from "../getopt.type";
    import OptionRow from "./OptionRow.svelte";

    export let data: OptionSet;
    
    function handleAddEntry() {
        data = [...data, <Option>{}]
    }
</script>

<div class="overflow-x-auto">
    <table class="table w-full">
        <thead>
            <tr>
                <td></td>
                <th>Short Name</th>
                <th>Long Name</th>
                <th>Argument</th>
                <th>Description</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            {#each data as _, i}
                <OptionRow bind:data index={i} />
            {/each}
            <button
                class="btn mt-6"
                on:click={handleAddEntry}>Add option</button
            >
        </tbody>
    </table>
</div>
