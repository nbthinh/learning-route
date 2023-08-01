# Note

- `ng generate component <component-name>`
- `ng generate interface <interface-name>`
- `@Output`: pass data to parent component from child component.
    - Create binding from parent component from template: `<input (parent_binding)="event_function($event)">`
    - From parent component, create `event_function`:
    ```
        event_function(itf: AnyInterface){
            console.log(itf);
        }
    ```
    - In child component:
    ```
        @Output() parent_binding = new EventEmitter<AnyInterface>(); // In <> is type of data we want to pass out to parent component
        child_function_component(){
            this.parent_binding(data: AnyInterface)
        }
    ```

# RoutingApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.4.

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


- https://stackblitz.com/edit/so-66723751?file=src%2Fapp%2Fapp.module.ts


## Solution

- https://stackoverflow.com/questions/66563535/type-formgroup-null-is-not-assignable-to-type-formgroup-type-null-is-no
```
Solution 1 :(By Changing null checking flags)
change produitFormGroup: FormGroup | null= null; to produitFormGroup: FormGroup;.
change "strict": true, to "strict": false, on tsconfig.json
here,the TS compilers type checker will permanently ignore the null and undefined value checking for whole project.
```