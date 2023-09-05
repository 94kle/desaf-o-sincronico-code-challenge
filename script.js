function enviarFormulario () {
    const nombreInput = document.getElementById("nombre").value;
    const apellidoInput = document.getElementById("apellido").value;
    const fechaNacimientoInput = document.getElementById("fechaNacimiento").value;
 
      const datos = {
        nombre: nombre,
        apellido: apellido,
        fechaNacimiento: fechaNacimiento
      };
  
      fetch("https://jsonplaceholder.typicode.com/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datos),
      })
        
      .then(response => response,json())
        .then((data) => {
          console.log("Respuesta del servidor:", data);
        })
        .catch((error) => {
          // Manejar errores
          console.error("Error en la solicitud:", error);
        });
  }
  