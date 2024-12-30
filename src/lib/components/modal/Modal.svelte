<script>
    import Icon from "@iconify/svelte";

    export let isOpen = false;
    export let onClose;
</script>

{#if isOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-slate-100 overflow-y-auto md:rounded-lg p-4 max-w-3xl h-full md:w-full">
            <button class="flex justify-self-end sticky top-0 text-3xl" on:click={onClose}>
                <Icon icon="weui:close2-filled" />
            </button>
            <slot></slot>
        </div>
    </div>
{/if}
  