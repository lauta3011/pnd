<script>
  import Feed from '$lib/components/feed/Feed.svelte';
  import { mockData } from "$lib/mock-data/mockData";

  
</script>

<div class="h-full flex flex-col ml-4">
  <Feed list={mockData}/>
</div>