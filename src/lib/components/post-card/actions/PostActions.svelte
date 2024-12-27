<script>
    import Icon from "@iconify/svelte";

    export let handleShare;
    export let handleLike;
    export let handleComment;
</script>

<div class="relative w-full justify-between inline-flex px-3 pt-3">
    <button on:click={handleShare} class="button-container">
        <Icon icon="weui:previous-outlined" />
    </button>
    <button class="button-container shadow-lg absolute left-[40%] -top-[20%] text-3xl flex justify-center items-center bg-slate-400 w-14 h-14 p-2" on:click={handleComment} >
        <Icon icon="weui:max-window-outlined" />
    </button>
    <button on:click={handleLike} class="button-container">
        <Icon icon="weui:sticker-outlined" />
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
