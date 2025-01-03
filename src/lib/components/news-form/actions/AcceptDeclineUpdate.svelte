<script>
  export let handleDecline;
  export let handleAprove;
  </script>
  

    <div class="inline-flex overflow-hidden w-full my-4 justify-around">
      <button 
        class="px-6 py-2 bg-green-500 text-slate-100 font-semibold rounded-lg shadow-md"
        on:click={handleAprove}>
        Aceptar
      </button>
      
      <!-- <button 
        class="px-6 py-2 bg-slate-600 text-slate-100 font-semibold rounded-lg shadow-md"
        on:click={handleDecline}>
        Editar
      </button>
       -->
      <button 
        class="px-6 py-2 bg-red-500 text-slate-100 font-semibold rounded-lg shadow-md"
        on:click={handleDecline}>
        Rechazar
      </button>
    </div>
  