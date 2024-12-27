<script lang="ts">
    import PostContent from "./content/PostContent.svelte";
    import PostActions from "./actions/PostActions.svelte";
    import Modal from "../modal/Modal.svelte";
    import PostDetails from "./details/PostDetails.svelte";
    
    export let post;

    $: openDetail = false;
  </script>
  
  <div class="bg-slate-300 shadow-md ease-in-out rounded-lg m-3">
    <PostContent title={post?.title} content={post?.preview} author={post?.author}/>
    <PostActions handleComment={() => openDetail = !openDetail} handleShare={() => console.log('share')} handleLike={() => console.log('like')}/>

    {#if openDetail}
      <Modal onClose={() => openDetail = false} isOpen={openDetail}>
        <PostDetails data={post}/>
      </Modal>
    {/if}
  </div>