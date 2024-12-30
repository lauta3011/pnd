<script>
  import { goto } from "$app/navigation";
  import Icon from "@iconify/svelte";

  let isOpen = false;  
</script>
<aside on:mouseenter={() => isOpen = true} on:mouseleave={() => isOpen = false} class="{isOpen ? 'translate-x-0' : '-translate-x-24'} transition-transform h-full bg-gray-800 z-50 fixed top-0 shadow-md text-white p-4">
  <div class="items-center flex h-full flex-col justify-around">
    <div class="text-2xl font-bold">
      <a href="/">MiLogo</a>
    </div>
  
    <div class="{!isOpen ? 'translate-x-14' : 'translate-x-0'} w-2/4 transition-transform rounded-full bg-slate-800 flex flex-col items-center">
      <div class="my-4 items-center flex w-7 flex-col">
        <button class="text-4xl" on:click={() => goto("/news-form")}>
          <Icon class="bg-slate-600 rounded-full" icon="weui:add2-outlined"/>
        </button>
      </div>

      <div class="my-4 items-center flex w-7 flex-col">
        <button class="text-4xl" on:click={() => goto("/moderate-news")}>
          <Icon class="bg-slate-600 rounded-full" icon="weui:display-outlined"/>
        </button>
      </div>
    </div>      
  </div>
</aside>
  