-- Inserts para la tabla "activos"
INSERT INTO activos (Ubicacion, Departamento, Clasificacion, Nombre, Responsable)
VALUES ('Oficina', 'TI', 'Elemento Prioritario', 'Laptop', 'Luis Perez'),
       ('DataCenter', 'Ventas', 'Elemento de Servicio', 'Servidor', 'Jorge Romo'),
       ('Oficina', 'Recursos Humanos', 'Elemento Prioritario', 'Impresora', 'Ana Martinez');

-- Inserts para la tabla "amenazas"
INSERT INTO amenazas (Origen, Categoría, Amenaza, Valor, Descripción)
VALUES ('Error Humano', 'Hardware', 'Avería Física', 'Media', 'Mala manipulación del hardware'),
       ('Error Humano', 'Software', 'Borrado accidental', 'Baja', 'Borrado de datos importantes'),
       ('Naturaleza', 'Clima', 'Inundación', 'Alta', 'Inundación del centro de datos');

-- Inserts para la tabla "vulnerabilidades"
INSERT INTO vulnerabilidades (Nombre, Descripción, Categoría, Riesgo)
VALUES ('Base de datos', 'Falta de encriptación', 'Software', 'Fugas de información'),
       ('Red', 'Contraseñas débiles', 'Hardware', 'Ataques de fuerza bruta'),
       ('Sistema operativo', 'Falta de actualizaciones', 'Software', 'Explotación de vulnerabilidades');
