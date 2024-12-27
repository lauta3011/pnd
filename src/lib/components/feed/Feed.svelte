<script>
    import PostCard from "$lib/components/post-card/PostCard.svelte";

    export let list;
</script>

<div class="h-full bg-slate-700 flex flex-col md:flex-row md:flex-wrap py-8">
    <div class="flex justify-center flex-wrap">
        {#each list as post}
            <div class="w-full lg:w-1/4 md:w-1/2">
                <PostCard post={post} />
            </div>
        {/each}
    </div>
</div>