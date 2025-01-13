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
5) ng g c ComponentName
6) ng g s Servicename
7) configurar el httpRequest en el app.config 
7.1) import { provideHttpClient } from '@angular/common/http';
y dentro de providers provideHttpClient()
9) crear el  modelo de el API y el APi response , osea las interfases para poder darselas al objeto de typescript 
10) crear el metodo dnetro del servicio GetData() el cual deve llevar un this.http.get()

11) configurar el componente con los imports del ngOninit , PipeAsync 
12) conectar el servicio con tu componente importandolo y creando el servicio en el constructor comoo privado 
13) creamos un observable para resivir los datos del servicio private tambien , recuerda poner el $ para sabver que es un observable 
con el formato =   public RnMCharacter$! :Observable<Character>; el ! es para indicar que puede venir vacio 
14) igualar nuestro observable en el oninit con nuestro servicio =  this.RnMCharacter$ = this.service.getCharacterList();

15) 



