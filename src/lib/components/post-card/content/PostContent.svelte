<script>
    export let title;
    export let content;
    export let author;
</script>

<div class="p-6 bg-slate-100 rounded-lg shadow-lg">
  <h2 class="text-2xl font-semibold text-gray-800">{title}</h2>
  <p class="text-base text-gray-600 mb-4">{content}</p>
  <div class="text-sm text-gray-500 mt-4">
    <span>Autor: {author}</span>
  </div>
</div>
