Ramos Espinoza Martin Sebastian
Proyecto: Sopa de letras


# Códigos de Respuesta HTTP y Explicación del Código HTML y JavaScript

## **Códigos de Respuesta HTTP**

Los códigos de respuesta HTTP son respuestas que el servidor devuelve al cliente para indicar el resultado de una solicitud. Se agrupan en diferentes categorías:

### **1xx - Informativos**
- **100 Continue**: El servidor recibió la solicitud y el cliente debe continuar con la petición.
- **101 Switching Protocols**: El servidor acepta cambiar el protocolo.
- **102 Processing**: El servidor ha recibido la solicitud pero aún la está procesando.

### **2xx - Éxito**
- **200 OK**: La solicitud se procesó correctamente.
- **201 Created**: Un recurso se ha creado exitosamente.
- **204 No Content**: La solicitud se completó, pero no hay contenido en la respuesta.

### **3xx - Redirección**
- **301 Moved Permanently**: La URL solicitada ha cambiado permanentemente.
- **302 Found**: El recurso solicitado se ha movido temporalmente.
- **304 Not Modified**: El recurso no ha cambiado desde la última solicitud.

### **4xx - Errores del Cliente**
- **400 Bad Request**: La solicitud contiene errores de sintaxis.
- **401 Unauthorized**: Se requiere autenticación para acceder al recurso.
- **403 Forbidden**: El acceso al recurso está prohibido.
- **404 Not Found**: El recurso solicitado no existe.

### **5xx - Errores del Servidor**
- **500 Internal Server Error**: Error inesperado en el servidor.
- **502 Bad Gateway**: El servidor recibió una respuesta inválida de otro servidor.
- **503 Service Unavailable**: El servidor no está disponible temporalmente.

### **¿Qué es JSON?**

**JSON (JavaScript Object Notation)** es un formato ligero de intercambio de datos basado en texto. Se utiliza para estructurar datos de manera que puedan ser fácilmente interpretados por sistemas y aplicaciones.

#### **Ejemplo de JSON:**

```json
{
    "id": 1,
    "nombre": "Juan",
    "edad": 25,
    "email": "juan@example.com"
}
```

#### **Características de JSON:**
- Utiliza **pares clave-valor**.
- Es fácil de leer y escribir para humanos.
- Es independiente del lenguaje de programación.
- Se usa comúnmente en APIs para transferir datos entre cliente y servidor.

#### **Cómo convertir JSON en JavaScript:**

```js
// Convertir un string JSON a un objeto JavaScript
let jsonString = '{"nombre": "Ana", "edad": 30}';
let obj = JSON.parse(jsonString);
console.log(obj.nombre); // Salida: Ana

// Convertir un objeto JavaScript a JSON
let user = { nombre: "Carlos", edad: 40 };
let jsonOutput = JSON.stringify(user);
console.log(jsonOutput);
```




### **Método `fetch` y Uso de `.then()`**
`fetch()` se usa para realizar solicitudes HTTP desde JavaScript y devuelve una **Promise**, lo que permite manejar operaciones asíncronas.

#### **Funcionamiento de `fetch()`**
```js
fetch(url, opciones)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Error:", error));
```

- `fetch()` recibe una URL y un objeto de configuración opcional.
- `.then(response => response.json())`: Convierte la respuesta en un objeto JSON.
- `.then(data => console.log(data))`: Maneja los datos convertidos.
- `.catch(error => console.error("Error:", error))`: Captura errores si la solicitud falla.

#### **POST: Enviar Datos a la API**
```js
fetch("https://jsonplaceholder.typicode.com/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: name })
})
    .then(response => response.json())
    .then(data => {
        console.log("Datos enviados:", data);
    })
    .catch(error => console.error("Error en POST:", error));
```
- **`method: "POST"`** indica que se está enviando información al servidor.
- **`headers`** especifica que los datos se enviarán en formato JSON.
- **`body`** contiene los datos en formato JSON que se enviarán al servidor.

#### **GET: Obtener Datos de la API**
```js
fetch(`https://jsonplaceholder.typicode.com/users/${createdUserId}`)
    .then(response => response.json())
    .then(data => console.log("Datos recibidos:", data))
    .catch(error => console.error("Error en GET:", error));
```
- Se usa el ID del usuario recién creado (`createdUserId`) para obtener su información.

#### **DELETE: Eliminar un Usuario**
```js
fetch(`https://jsonplaceholder.typicode.com/users/${createdUserId}`, { method: "DELETE" })
    .then(() => console.log("Usuario eliminado"))
    .catch(error => console.error("Error en DELETE:", error));
```
- **`method: "DELETE"`** indica que se eliminará un recurso.
- No es necesario enviar un `body`, ya que solo se necesita la URL con el ID del usuario.

