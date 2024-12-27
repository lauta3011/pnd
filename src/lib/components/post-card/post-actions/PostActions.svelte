<script>
    import Icon from "@iconify/svelte";

    export let handleShare;
    export let handleLike;
    export let handleComment;
</script>

<div class="relative w-full justify-between inline-flex px-3 pt-3">
    <button on:click={handleShare} class="button-container">
        <Icon icon="mdi:share" />
    </button>
    <button on:click={handleComment} class="button-container">
        <Icon icon="mdi:comment" />
    </button>
    <button on:click={handleLike} class="button-container">
        <Icon icon="mdi:like" />
    </button>
</div>

<style>
    .button-container {
        padding: 10px;
        border-radius: 50px;
    }
    .button-container:hover {
        background-color: slategray;
    }
</style>
