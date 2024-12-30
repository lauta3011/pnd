<script>
    // Funciones para manejar los clics en los botones
    function handleAccept() {
      alert('Aceptar');
    }
  
    function handleEdit() {
      alert('Editar');
    }
  
    function handleDeny() {
      alert('Denegar');
    }
  </script>
  

    <div class="inline-flex overflow-hidden w-full my-4 justify-around">
      <button 
        class="px-6 py-2 bg-green-500 text-slate-100 font-semibold rounded-lg shadow-md"
        on:click={handleAccept}>
        Aceptar
      </button>
      
      <button 
        class="px-6 py-2 bg-slate-600 text-slate-100 font-semibold rounded-lg shadow-md"
        on:click={handleEdit}>
        Editar
      </button>
      
      <button 
        class="px-6 py-2 bg-red-500 text-slate-100 font-semibold rounded-lg shadow-md"
        on:click={handleDeny}>
        Rechazar
      </button>
    </div>
  