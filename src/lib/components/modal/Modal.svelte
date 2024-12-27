<script>
    export let isOpen = false;
    export let onClose;
</script>

{#if isOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
        <div class="bg-white rounded-lg p-4 max-w-sm w-full">
            <button class="absolute top-2 right-2" on:click={onClose}>✖</button>
            <slot></slot>
        </div>
    </div>
{/if}

<style>
    /* Estilos para el modal si es necesario */
</style>