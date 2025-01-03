<script lang="ts">
  import Feed from '$lib/components/feed/Feed.svelte';
  import { supabase } from '$lib/api/client';
    import { onMount } from 'svelte';
  
  let articles: any;

  onMount(async() => {
    const { data } = await supabase.from('curated-articles').select();
    articles = data;
  });
</script>

<div class="h-full flex flex-col ml-4">
  <Feed list={articles}/>
</div>