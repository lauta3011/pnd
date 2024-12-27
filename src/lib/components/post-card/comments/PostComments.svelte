<script lang="ts">
    import { onMount } from "svelte";
    import { comments as mockComments } from "$lib/mock-data/mockData";
    
    export let postId;

    let comments: any = [];
    let isVisible = false;

    onMount(() => {
        isVisible = true;
        comments =  mockComments.filter((comment) => comment.id == postId);
    })
</script>

<div class="absolute rounded-lg z-10 border-x-2 border-b-2 border-gray-400 p-2 pt-6 bg-slate-300 w-full">
    {#if comments.length === 0}
        <p>No hay comentarios aún.</p>
    {:else}
        <ul>
            {#each comments as comment}
                <li class="py-2">
                    <strong>{comment.author}</strong>: {comment.text}
                </li>
            {/each}
        </ul>
    {/if}
</div>