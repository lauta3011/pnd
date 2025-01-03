<script>
    export let details;
    export let wasAproved = false;
    export let wasDeclined = false;
  </script>
  
  <div class="{wasAproved ? 'bg-green-900' : ''} {wasDeclined ? 'bg-red-900' : ''} mx-auto p-6 bg-slate-100 mb-8">
    <h2 class="text-3xl font-semibold text-gray-800 mb-4">{details.title}</h2>
    <div class="w-full flex justify-center">
      <img src={details.image} alt={details.title} class="sm:w-full md:w-3/4 h-auto rounded-lg mb-6" />
    </div>
    <div class="prose prose-lg text-gray-800">
      {@html details.description}
    </div>
    <div class="mt-4 text-sm text-gray-500">
      <p>Escrito por: <strong>{details.author}</strong></p>
    </div>
  </div>
  