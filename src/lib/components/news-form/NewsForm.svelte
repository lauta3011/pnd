<script>
    let title = '';
    let description = '';
    let keyPhrases = '';
    let authorName = '';
    let file = null;
    let error = false;

    function handleImageChange(event) {
      file = event.target.files[0];
    }

    const displayError = () => {
        error = true;
        setTimeout(() => {
            error = false;
        }, 2000);
    }
  
    async function handleSubmit(event) {
        if(title.trim() !== '' && description.trim() !== '' && keyPhrases.trim() !== '' && authorName !== '') {
            console.log('Form submitted!');
        } else {
            displayError()
        }
      event.preventDefault();
    }
  </script>
  
  <form on:submit={handleSubmit} class="lg:w-md p-4 {!error ? 'bg-slate-200' : 'bg-red-800'}  shadow-md rounded">
    <div class="border-b-2 border-gray-400 pb-4 mb-8">
        <h1 class="text-4xl my-4 font-light text-center">Agrega una noticia</h1>
        <span class="text-gray-600 text-lg">una vez que completes el formulario, sera analizado y en caso de ser aprobado este sera re-escrito de manera "profesional" para mostrarse en el muro de noticias. Toma de referencia el formulario de ejemplo ya precargado al momento de ingresar nueva informacion.</span>
    </div>
    
    <div class="flex flex-col my-4">
        <label for="title" class="text-gray-600 text-sm">* Titulo</label>
        <div class="p-4">
            <span class="text-gray-600 text-sm italic">
                utiliza el titulo para darle enfasis a lo que se enfoca la noticia, ya que el titulo en si puede variar en el resultado final
            </span>
        </div>
      <input type="text" id="title" class="p-2 w-full text-xl shadow-lg font-semibold text-gray-600" 
        placeholder="Lagarto bicicleteo por 53 horas batiendo un nuevo records local y personal." value={title}
        on:input={(e) => title = e.target.value} />
    </div>

    <div class="flex flex-col my-4">
        <label class="text-gray-600 text-sm">* Descripcion del articulo</label>
        <div class="p-4">
            <span class="text-gray-600 text-sm italic">
                la descripcion no tiene porque ser escrita de manera profesional si no mas bien detallada, clara y proporsionando la mayor cantidad de informacion posible para poder realizar un buen analisis y transormarla en un articulo mas completo.
            </span>
        </div>
      <textarea class="p-2 w-full text-sm shadow-lg font-semibold text-gray-600"
       placeholder="El dia sabado 23 Julio Alvarez 'El Lagarto' anduvo en bicicleta 53 horas seguidas al rededor de la plaza para colaborar con el tratamiento de una vecina del pueblo..." 
       value={description}
  on:input={(e) => description = e.target.value} />
    </div>

    <div class="flex flex-col my-4">
      <label for="keyPhrases" class="text-gray-600 text-sm">* Frases clave separadas por coma</label>
      
      <div class="p-4">
        <span class="text-gray-600 text-sm italic">este espacio es muy importante, ya que agregamos mas informacion con datos clave aislados para profundisar en este tema, puede ser la fecha exacta, localidad, frases que aporten al articulo o una reflexion sobre el mismo.</span>
      </div>
      <input type="text" id="keyPhrases" class="p-2 w-full text-sm shadow-lg font-semibold text-gray-600"
      placeholder="record en bicicleta de personaje celebre local, recaudacion de fondos para Gabriela Cantera, plaza 19 de abril de pan de azucar"
  value={keyPhrases} on:input={(e) => keyPhrases = e.target.value.split(',')} />
    </div>

    <div class="flex flex-col my-4">
      <label for="authorName" class="text-gray-600 text-sm">* Autor</label>
      <input type="text" id="authorName"
        placeholder="Juan Perez"
      class="p-4 w-full text-sm shadow-lg font-semibold text-gray-600" value={authorName}
  on:input={(e) => authorName = e.target.value} />
    </div>

    <div class="flex flex-col my-4 bg-slate-400 p-4">
      <label for="image" class="text-gray-600 text-sm">Imagen</label>
      <input type="file" id="image" on:change={handleImageChange} accept=".jpg, .jpeg, .png" />
    </div>

    <button disabled={error} type="submit" class=" {!error ? 'bg-orange-500' : 'bg-red-500 animate-ping'}  text-white font-bold py-2 px-4
  rounded">Submit</button>
  </form>