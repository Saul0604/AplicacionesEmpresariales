document.addEventListener('DOMContentLoaded', () => {
  // Simulación de archivos y carpetas
  const archivosYCarpetas = [
    { name: 'documento.txt', type: 'file', content: 'Contenido del documento.txt' },
    { name: 'musica', type: 'folder' },
    { name: 'imagen.jpg', type: 'file', content: 'Contenido de la imagen.jpg' },
    { name: 'videos', type: 'folder' },
  ];

  // Función para renderizar los archivos y carpetas
  function mostrarArchivosYCarpetas() {
    const filesList = document.getElementById('filesList');
    filesList.innerHTML = ''; // Limpiar la lista

    archivosYCarpetas.forEach(item => {
      const div = document.createElement('div');
      div.classList.add(item.type === 'folder' ? 'folder' : 'file');

      div.innerHTML = `
        <i class="bi ${item.type === 'folder' ? 'bi-folder-fill' : 'bi-file-earmark-fill'} icon"></i>
        ${item.name}
      `;

      // Agregar evento de clic para abrir el archivo
      div.addEventListener('click', () => {
        if (item.type === 'file') {
          alert(`Abriendo archivo: ${item.name}\nContenido: ${item.content}`);
        } else {
          alert(`Abriendo carpeta: ${item.name}`);
        }
      });

      filesList.appendChild(div);
    });
  }

  // Llamar a la función para mostrar los archivos
  mostrarArchivosYCarpetas();
});