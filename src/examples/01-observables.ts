import { Observable, Observer } from "rxjs";

//* const obs$ = Observable.create(); deprecated

const observer: Observer<string> = {
  next: (value: string) => console.log(value),
  error: (error: any) => console.error(error),
  complete: ()=> console.log('Observer completed')
}

const obs$ = new Observable<string>( subscriber => {
  subscriber.next('hola');
  subscriber.next('mundo');
  subscriber.next('Curso de Nest RXJS');
  subscriber.complete(); // represa
  subscriber.next('Curso de Nest RXJS 2');
  // const usuario = undefined;
  // usuario.nombre;
});

obs$.subscribe(observer);