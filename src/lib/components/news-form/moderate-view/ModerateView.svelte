<script>
    import { supabase } from "$lib/api/client";
    import PostDetails from "$lib/components/post-card/details/PostDetails.svelte";
    import AcceptDeclineUpdate from "../actions/AcceptDeclineUpdate.svelte";

    export let article;
    export let handleNextArticle;

    const { id, declines_number, aproves_number } = article;

    let wasAproved = false;
    let wasDeclined = false;

    async function handleDecline() {     
        await supabase.from('submited-articles').update({ declines_number: declines_number + 1 }).eq('id', id).select()
        wasDeclined = true;
    }

    async function handleAprove() {
        await supabase.from('submited-articles').update({ aproves_number: aproves_number + 1 }).eq('id', id).select()
        wasAproved = true;
    }
</script>

<div class="h-full bg-slate-700 ml-4">
    <PostDetails details={article} wasAproved={wasAproved} wasDeclined={wasDeclined} />
    <AcceptDeclineUpdate handleAprove={() => { handleAprove(); setTimeout(() => handleNextArticle(), 1000) }} handleDecline={() => { handleDecline(); setTimeout(() => handleNextArticle(), 1000) }} />
</div>