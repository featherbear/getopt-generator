<script lang="ts">
    export let command: string = null
    export let lines: string[]
</script>

<div class="mockup-code">
    {#if command}
    <pre data-prefix="$"><code>{command}</code></pre>
    <pre />
    {/if}
    {#each lines as line}
        <pre data-prefix=""><code>{line}</code></pre>
    {/each}
</div>

<style lang="scss">
    .mockup-code {
        text-align: left;
    }
</style>