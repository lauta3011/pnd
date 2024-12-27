<script>
    let title = '';
    let description = '';
    let keyPhrases = [];
    let authorName = '';
    let file = null;
  
    function handleImageChange(event) {
      file = event.target.files[0];
    }
  
    async function handleSubmit(event) {
      // Form submission logic here, e.g., send request to API
      console.log('Form submitted!');
      event.preventDefault();
    }
  </script>
  
  <form on:submit={handleSubmit} class="max-w-md mx-auto p-4 bg-white shadow-md rounded">
    <h2 class="text-lg font-bold mb-4">New Resource Form</h2>
    <div class="mb-4">
      <label for="title" class="block text-sm font-medium">Title:</label>
      <input type="text" id="title" class="w-full p-1 pl-10 text-sm border-gray-200 rounded" value={title}
  on:input={(e) => title = e.target.value} />
    </div>
    <div class="mb-4">
      <label for="description" class="block text-sm font-medium">Description:</label>
      <textarea id="description" class="w-full p-1 pl-10 text-sm border-gray-200 rounded" value={description}
  on:input={(e) => description = e.target.value} />
    </div>
    <div class="mb-4">
      <label for="keyPhrases" class="block text-sm font-medium">Key Phrases (comma-separated):</label>
      <input type="text" id="keyPhrases" class="w-full p-1 pl-10 text-sm border-gray-200 rounded"
  value={keyPhrases.join(', ')} on:input={(e) => keyPhrases = e.target.value.split(',')} />
    </div>
    <div class="mb-4">
      <label for="authorName" class="block text-sm font-medium">Author Name:</label>
      <input type="text" id="authorName" class="w-full p-1 pl-10 text-sm border-gray-200 rounded" value={authorName}
  on:input={(e) => authorName = e.target.value} />
    </div>
    <div class="mb-4">
      <label for="image" class="block text-sm font-medium">Image:</label>
      <input type="file" id="image" on:change={handleImageChange} accept=".jpg, .jpeg, .png" />
    </div>
    <button type="submit" class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4
  rounded">Submit</button>
  </form>