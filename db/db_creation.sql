CREATE TABLE activos (
  id SERIAL PRIMARY KEY,
  Ubicacion VARCHAR(255),
  Departamento VARCHAR(255),
  Clasificacion VARCHAR(255),
  Nombre VARCHAR(255),
  Responsable VARCHAR(255)
);

CREATE TABLE amenazas (
  id SERIAL PRIMARY KEY,
  Origen VARCHAR(255),
  Categoría VARCHAR(255),
  Amenaza VARCHAR(255),
  Valor VARCHAR(255),
  Descripción VARCHAR(255)
);

CREATE TABLE vulnerabilidades (
  id SERIAL PRIMARY KEY,
  Nombre VARCHAR(255),
  Descripción VARCHAR(255),
  Categoría VARCHAR(255),
  Riesgo VARCHAR(255)
);

CREATE TABLE riesgos (
  id SERIAL PRIMARY KEY,
  Amenaza VARCHAR(255),
  Vulnerabilidad VARCHAR(255),
  Control VARCHAR(255),
  Impacto VARCHAR(255),
  Probabilidad VARCHAR(255)
);

CREATE TABLE controles (
  id SERIAL PRIMARY KEY,
  Control VARCHAR(255),
  Contexto VARCHAR(255),
  Discusion VARCHAR(255),
  Categoria VARCHAR(255),
  Riesgo VARCHAR(255)
);
