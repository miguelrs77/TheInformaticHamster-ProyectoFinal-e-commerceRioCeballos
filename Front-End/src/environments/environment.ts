// Este archivo se puede reemplazar durante la compilación usando la matriz `fileReplacements`.
// `ng build` reemplaza `environment.ts` con `environment.prod.ts`.
// La lista de reemplazos de archivos se puede encontrar en `angular.json`.

export const environment = {
    production: false,
    endpoint: 'http://localhost:3308'
};

/*
  * Para facilitar la depuración en el modo de desarrollo, puede importar el siguiente archivo
  * para ignorar los marcos de pila de errores relacionados con la zona, como `zone.run`, `zoneDelegate.invokeTask`.
  *
  * Esta importación debe ser comentada en modo producción porque tendrá un impacto negativo
  * en el rendimiento si se produce un error.
  */
// importar 'zone.js/plugins/zone-error'; // Incluido con Angular CLI.
