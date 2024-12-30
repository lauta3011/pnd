<script>
  import Feed from '$lib/components/feed/Feed.svelte';
  import { mockData } from "$lib/mock-data/mockData";

  
</script>

<div class="flex flex-col bg-slate-700 ml-4">
  <Feed list={mockData}/>
</div>