# Cars Luxury Forum API

API REST para un foro de coches de lujo donde se almacenan y gestionan modelos de vehículos premium.

## Índice

- [Descripción](#-descripción)
- [Tecnologías](#️-tecnologías)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Endpoints Disponibles](#-endpoints-disponibles)
- [Validaciones](#-validaciones)
- [Base de Datos](#️-base-de-datos)
- [Testing con Postman](#-testing-con-postman)
- [Desarrollo](#-desarrollo)
- [Arquitectura](#-arquitectura)
- [Autor](#-autor)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

## Descripción

Esta API permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre una base de datos de coches de lujo. Construida con Node.js, Express y SQLite3, proporciona endpoints para gestionar información detallada de vehículos de alta gama.

## Tecnologías

| Tecnología | Versión | Propósito |
|------------|---------|-----------|
| Node.js | - | Entorno de ejecución JavaScript |
| Express | 5.2.1 | Framework web para Node.js |
| Knex.js | 3.1.0 | Query builder SQL y migraciones |
| SQLite3 | 5.1.7 | Base de datos relacional embebida |
| Express-validator | 7.3.1 | Validación y sanitización de datos |
| Nodemon | 3.1.11 | Auto-recarga en desarrollo |

## Estructura del Proyecto

```
back/
│
├── src/
│   │                   
│   ├── configuration/
│   │   └── database.js           
│   │                             
│   ├── controller/
│   │   └── cars.js               
│   │
│   ├── middlewares/
│   │   └── validatorResults.js
│   │ 
│   ├── route/
│   │   └── cars.js
│   │ 
│   ├── service/
│   │   └── cars.js 
│   │
│   ├── validator/
│   │   └── cars.js 
│   │                               
│   └── app.js 
│                    
│                                   
├── .gitignore                      
├── cars.db                         
├── cars.postman_collection.json    
├── package.json                     
├── package-lock.json                
└── README.md                        
```

## Instalación

1. **Clonar el repositorio**
```bash
git clone <url-del-repositorio>
cd back
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Iniciar el servidor**
```bash
npm start
```

El servidor se iniciará en `http://localhost:8080`

## Endpoints Disponibles

### **GET** `/cars`
Obtiene la lista completa de todos los coches.

**Respuesta exitosa (200):**
```json
[
  {
    "id": 1,
    "modelo": "911 gt3",
    "marca": "Porsche",
    "potencia": "650cv",
    "precio": "245.000€",
    "fechaSalida": "2024-01-15",
    "transmision": "automático",
    "url": "data:image/jpeg;base64,..."
  }
]
```

---

### **GET** `/cars/id/:id`
Obtiene un coche específico por su ID.

**Parámetros:**
- `id` (path) - ID del coche

**Ejemplo:** `GET /cars/id/1`

---

### **GET** `/cars/modelo/:modelo`
Busca coches por modelo.

**Parámetros:**
- `modelo` (path) - Nombre del modelo a buscar

**Ejemplo:** `GET /cars/modelo/r8`

---

### **POST** `/cars`
Crea un nuevo registro de coche.

**Body (JSON):**
```json
{
  "modelo": "r8",
  "marca": "Audi",
  "potencia": "610cv",
  "precio": "189.000€",
  "fechaSalida": "2024-03-20",
  "transmision": "automático",
  "url": "data:image/jpeg;base64,..."
}
```

---

### **PUT** `/cars/:id`
Actualiza la información de un coche existente.

**Parámetros:**
- `id` (path) - ID del coche a actualizar

**Body (JSON):**
```json
{
  "modelo": "r8",
  "marca": "Audi",
  "potencia": "620cv",
  "precio": "195.000€",
  "fechaSalida": "2024-03-20",
  "transmision": "automático",
  "url": "data:image/jpeg;base64,..."
}
```

---

### **DELETE** `/cars/:id`
Elimina un coche de la base de datos.

**Parámetros:**
- `id` (path) - ID del coche a eliminar

**Respuesta exitosa (200):**
```json
{
  "message": "Coche eliminado correctamente"
}
```

## Base de Datos

La aplicación utiliza SQLite3 con el archivo `cars.db`. La tabla principal contiene los siguientes campos:

| Campo | Tipo | Descripción |
|-------|------|-------------|
| id | INTEGER | Identificador único (PK) |
| modelo | TEXT | Modelo del vehículo |
| marca | TEXT | Marca del vehículo |
| potencia | TEXT | Potencia del motor |
| precio | TEXT | Precio del vehículo |
| fechaSalida | TEXT | Fecha de lanzamiento |
| transmision | TEXT | Tipo de transmisión |
| url | TEXT | URL de la imagen (base64) |

## Testing con Postman

Se incluye una colección de Postman (`cars.postman_collection.json`) con todos los endpoints configurados para facilitar las pruebas.

**Importar colección:**
1. Abrir Postman
2. Importar el archivo `cars.postman_collection.json`
3. Los endpoints estarán listos para usar

## Desarrollo

Para desarrollo con auto-reload:

```bash
npx nodemon src/app.js
```

## Validaciones

La API implementa validaciones robustas usando **Express-validator** para garantizar la integridad de los datos:

### Campos Validados

| Campo | Tipo | Validaciones |
|-------|------|--------------|
| **modelo** | String | • Obligatorio<br>• Entre 1-255 caracteres<br>• Debe ser texto |
| **marca** | String | • Obligatorio<br>• Debe ser texto |
| **potencia** | Integer | • Obligatorio<br>• Número entero > 0 |
| **precio** | Float | • Obligatorio<br>• Número positivo |
| **fechaSalida** | Date | • Obligatorio<br>• Formato de fecha válido |
| **transmision** | Boolean | • Obligatorio<br>• Valor booleano (true/false) |
| **url** | URL | • Obligatorio<br>• Formato URL válido |

### Respuestas de Error de Validación

```json
{
  "errors": [
    {
      "field": "modelo",
      "message": "El modelo es obligatorio",
      "value": ""
    },
    {
      "field": "transmision",
      "message": "La transmisión debe ser 'automático' o 'manual'",
      "value": "semiautomatico"
    }
  ]
}
```

##  Autor

**Tu Nombre**

Adrian Lorente Mateo

- GitHub: [@7adrii](https://github.com/7adrii)
- Centro San Valero 1º DAW 

 **Proyecto desarrollado como parte del aprendizaje de desarrollo de APIs REST con Node.js y Express**

##  Licencia

Este proyecto está bajo la Licencia de Adrian Lorente Mateo y el Centro San Valero - versión 1.0
