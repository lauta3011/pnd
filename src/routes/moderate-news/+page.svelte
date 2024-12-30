<script>
    import AcceptDeclineUpdate from "$lib/components/news-form/actions/AcceptDeclineUpdate.svelte";
import PostDetails from "$lib/components/post-card/details/PostDetails.svelte";
    import { mockData } from "$lib/mock-data/mockData";
</script>

<div class="h-full bg-slate-700 ml-4">
        <PostDetails data={mockData[0]} />
        <AcceptDeclineUpdate />
</div>