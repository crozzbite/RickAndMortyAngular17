# RickAndMortyAngular17

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

***********pasos para haceer una peticion Rest API ********
1) install bun, 
2) bun init 
3) bun install @angular/cli@latest o el numero de vercion que quieras , en este caso la 17 
4) ng new AppnName
5) ng g c core/components ComponentName for wrap the list
5.1) ng g core/components ''        '' for items
6) ng g s services/Servicename
7) configurar el httpRequest en el app.config 
7.1) import { provideHttpClient } from '@angular/common/http';
y dentro de providers provideHttpClient()
9) crear el  modelo de el API y el APi response , osea las interfases para poder darselas al objeto de typescript 
10) crear el metodo dnetro del servicio GetData() el cual deve llevar un this.http.get()

11) configurar el componente con los imports del ngOninit , PipeAsync 
12) conectar el servicio con tu componente container importandolo y creando el servicio en el constructor comoo privado 
13) creamos un observable para resivir los datos del servicio private tambien , recuerda poner el $ para sabver que es un observable 
con el formato =   public RnMCharacter$! :Observable<Character>; el ! es para indicar que puede venir vacio 
14) igualar nuestro observable en el oninit con nuestro servicio =  this.RnMCharacter$ = this.service.getCharacterList();

15) hacer la logica de nuestro componente Async para poder empezar a mostrar los datos con un if , y un for para que salga cada personaje 
    @if (RnMCharacteResults$ |async; as resultObject ) {
    <ul class="character-list">
        @for (item of resultObject.results; track item.id) {
            <li>
                <app-rickandmorty-items/>
            </li>
      }
    </ul>
}
15.1) agregar dentro nuestro for el commponente item para mostrar cada item
16) agregar la propiedad en la etiqueta de el componente parde al hijo como el item definido en el for para que relacione la info
<app-rickandmorty-items 
                [RnMInfo]="item"
                 />
16.1) en nuestro componente hijo(item) declarar una @Input () NombreDelInput! : InterfasDelDato;  signo de exclamacion por si no existe 
17) crear el css de nuestro componente contenedor para que se vea bien 
18) crear el HTML de nuestro componente item para poder ver la informacion 
19) css de nuestro componente item para que se vea bien 
20) importar en el componente el CommonModule para poder usar directivas como el ngclass
20.1) agregamos logica con el ngclass para mejorar la visualisacion 
 EN ESTE PASO YA DEVERIAS DE PODER VER TU INFORMACION ACOMODADA CLARAMENTE EN TU SERVIDOR 

21) Agregar el manejo de errores 
agregaremos a nuestro servicio un Pipe en nuestro metodo Get para atrapar los errores importando  catchError, throwError de ngrx y el HttpErrorResponse 
22) arregar tambien el string del error en nuestro componente contenedor para poderlo mostrar con nuestro componente de manejo de errores 
usando el mismo Pipe
22.1) agregar en el template de la pagina un if para mostrar el error 
22.2) hacer otra Input en nuestro componente manejador de errores para pasar el error y mostrlo 
23) haremos un interceptor para que no se sature el servidor con cada peticion fallida y solo tenga que hacer una , por eso se intecepta con el interceptor 
23.1) en nuestro app.confog tendremos que declarar e importar el interceptor provideHttpClient(withFetch(), withInterceptors([errorHandlerInterceptor , masInterceptores si es que se tienen ]))
23.2) ng g interceptor core/interceptors/error-handler  (ng g i crea una interfas)
24) agarraremos todo el pipe del servicio que manejava el error y lo traspasaremmos a el interceptor 




