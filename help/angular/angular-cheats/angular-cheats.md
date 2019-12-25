# Librerias
* Crear libreria: ng g library shared-lib
* Construir libreria: ng build shared-lib

### Publicar librerias:
* ng build shared-lib
* cd dist/shared-lib
* npm publish

# Routing:
### Eager
Importar el modulo de una como siempre
### Lazy 
Importarlo con un import como en el ejemplo, de esa forma se carga bajo demanda

Para precargar existen algunas estrategias, en el oruterModule agregar "preloadingStrategy: PreloadAllModules"

### Multiple routing
Se pueden tener multiples routers al mismo tiempo dandoles un nombre, para mostrar multiples cosas al mismo tiempo

# Guards
* Crear guardia: `ng g g core/Auth`
* Redirigir con login:
`this.router.navigate(['/login'], { queryParams: { redirectTo: state.url } });`
* Preguntar si se desea salir por cambios efectuados:
`
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
canDeactivate(component: CanComponentDeactivate): Observable<boolean> | boolean {
 return component.canDeactivate ?
 this.toObservable(component.canDeactivate()) : true;
 }
 private toObservable(deactivate: Promise<boolean> | boolean )
 : Observable<boolean> | boolean {
 const p = Promise.resolve(deactivate);
 const o = Observable.fromPromise(p);
 ret
`
# Pipes vs funs
Usar pipes siempre que sea posible y con cache

    `import memo from 'memo-decorator';
@Pipe({ name: 'custompipe' )}
export class CustomPipe implements PipeTransform {
 @memo()
 transform(value: any, args?: any): any { … custom functionality … }
}`

# Analizar y optimizar
`ng build --prod --build-optimizer -sm`
`source-map-explorer dist/main.xxx.js`
# Arquitectura
* heroes
  * heroes.module
  * heroes-routing.module
  * heroes.service
  * villains (Container) (Quien es el padre de todos, usualmente incluye el listar y el router outlet) implementa las operaciones sobre los datos
    * villain-list (Quien sabe como listar, este recibe lo que tiene que listar y lo lista, por medio de outputs envia se;ales como eliminar o filtrar)
    * villain-detail-container (Este se usa para comunicar el villains con el detalle, el maneja los eventos de lo que pase en el de presentacion)
    * villlain-detail (Este man renderiza lo que tiene que renderizar con los datos que le den)
* shared
  * los mat imports
* core
  * modelos
  * guards
  * componentes de un solo uso como el toolbar
  * servicios SINGLETON toast, notification, etc