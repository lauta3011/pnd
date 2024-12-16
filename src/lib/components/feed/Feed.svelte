<script>
    import PostCard from "$lib/components/post-card/PostCard.svelte";

    export let list;
</script>

<div class="bg-slate-700 flex flex-col">
    <div class="justify-center">
        {#each list as post}
            <PostCard post={post} />
        {/each}
    </div>
</div>
