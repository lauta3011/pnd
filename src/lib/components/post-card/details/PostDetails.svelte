<script>
    export let data;
  </script>
  
  <div class=" mx-auto p-6 bg-white mb-8">
    <h2 class="text-3xl font-semibold text-gray-800 mb-4">{data.title}</h2>
    <img src={data.image} alt={data.title} class="w-full h-auto rounded-lg mb-6" />
    <div class="prose prose-lg text-gray-800">
      {@html data.content}
    </div>
    <div class="mt-4 text-sm text-gray-500">
      <p>Escrito por: <strong>{data.author}</strong></p>
    </div>
  </div>
  