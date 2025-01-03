<script lang="ts">
    import { supabase } from "$lib/api/client";
    import ModerateView from "$lib/components/news-form/moderate-view/ModerateView.svelte";
    import { onMount } from "svelte";

    $: articleIndex = 0;
    let articles: any = [];

    onMount(async () => {
        await supabase.from('submited-articles').select().then(({ data, error }: any) => {
            articles = data;
        });
    });
</script>

{#if articleIndex < articles.length}
    {#key articleIndex}
        <ModerateView article={articles[articleIndex]} handleNextArticle={() => articleIndex += 1}/>
    {/key}
{:else}
    <span>no hay mas flaco</span>
{/if}