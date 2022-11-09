<script lang="ts">
    import { ArgumentType, type OptionSet } from "../getopt.type";
    import DeleteIconButton from "./DeleteIconButton.svelte";

    export let data: OptionSet;
    export let index: number;

    let descriptionText: string = Array.isArray(data[index].description)
        ? (<string[]>data[index].description).join("\n")
        : <string>data[index].description;
    $: data[index].description = descriptionText?.split("\n");

    function handleMoveUp() {
        data = [
            ...data.slice(0, index - 1),
            data[index],
            data[index - 1],
            ...data.slice(index + 1),
        ];
    }

    function handleMoveDown() {
        data = [
            ...data.slice(0, index),
            data[index + 1],
            data[index],
            ...data.slice(index + 2),
        ];
    }

    function handleDelete() {
        data = [...data.slice(0, index), ...data.slice(index + 1)];
    }

    let timeout: NodeJS.Timeout;
    function handleEnableArgument(evt: Event) {
        if (timeout) {
            evt.preventDefault();
            return;
        }

        timeout = setTimeout(() => {
            timeout = null;
            data[index].argument = ArgumentType.REQUIRED;
        }, 200);
    }
</script>

<tr>
    <td>
        <div>
            {#if index != 0}
                <button class="btn btn-outline place-content-center" on:click={handleMoveUp}>⌃</button>
            {/if}
            {#if data.length != index + 1}
                <button class="btn btn-outline place-content-center" on:click={handleMoveDown}>⌄</button>
            {/if}
        </div>
    </td>
    <td
        ><input
            type="text"
            placeholder="Short Name"
            class="input input-ghost w-full max-w-xs"
            bind:value={data[index].shortFlag}
            maxlength={1}
            minlength={1}
        /></td
    >
    <td
        ><input
            type="text"
            placeholder="Long Name"
            class="input input-ghost w-full max-w-xs"
            bind:value={data[index].longFlag}
        /></td
    >
    <td>
        {#if !!data[index].argument && data[index].argument != ArgumentType.NONE}
            <div class="form-control">
                <div class="input-group">
                    <select
                        class="select select-bordered"
                        bind:value={data[index].argument}
                    >
                        <option value={ArgumentType.NONE}>No argument</option>
                        <option value={ArgumentType.OPTIONAL}>Optional</option>
                        <option value={ArgumentType.REQUIRED}>Required</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Argument name"
                        class="input input-bordered"
                        bind:value={data[index].argumentPlaceholder}
                    />
                </div>
            </div>
        {:else}
            <input
                type="checkbox"
                class="toggle"
                on:click={handleEnableArgument}
            />
        {/if}</td
    >
    <td
        ><textarea
            class="textarea textarea-ghost"
            placeholder="Description"
            bind:value={descriptionText}
        /></td
    >
    <td>
        <DeleteIconButton on:click={handleDelete} />
    </td>
</tr>
