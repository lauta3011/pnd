<script lang="ts">
    import PostContent from "./content/PostContent.svelte";
    export let post;
  </script>
  
  <div class="bg-white shadow-md rounded-lg p-6 m-5 max-w-md w-full">
    <PostContent title={post.title} content={post.content} author={post.author}/>
  </div>
  