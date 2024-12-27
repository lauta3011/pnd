<script lang="ts">
    import PostContent from "./content/PostContent.svelte";
    import PostActions from "./post-actions/PostActions.svelte";
    import PostComments from "./comments/PostComments.svelte";
    
    export let post;

    $: toggleComments = false;
  </script>
  
  <div class="bg-slate-300 relative shadow-md ease-in-out rounded-lg m-3">
    <PostContent title={post.title} content={post.content} author={post.author}/>
    <PostActions handleComment={() => toggleComments = !toggleComments} handleShare={() => console.log('share')} handleLike={() => console.log('like')}/>

    {#if toggleComments}
      <PostComments postId={post.id}/>
    {/if}
  </div>