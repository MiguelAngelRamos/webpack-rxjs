import { Observable, Observer, Subject } from "rxjs";

// * Es el Observer "plantilla para conocer las propiedades del objeto de un observer o subcriptor"
const observer: Observer<string> = {
  next: (value: string) => console.log(value),
  error: (error: any) => console.error(error),
  complete: ()=> console.log('Observer completed')
}

//* Este es el Observable (intervalo$)
const intervalo$ = new Observable<any>( (observer) => {

  const idInterval = setInterval(() => {
    observer.next(Math.random());
  
  }, 1000);

  return () => {
    clearInterval(idInterval);
    console.log('Intervalo limpio');
  }
});

//* Ahora vamos a crear un Subject
const suject$ = new Subject<number>();

//* un Subject es un observador o subcriptor tambien
intervalo$.subscribe(suject$); // * Esto demuestra que el subject es un observer(observador o subcriptor)

//* Ahora vamos a utilizar el Subject como Observable 
const subSubject1 = suject$.subscribe(random => console.log('Subscriptor 1 del Subject: ', random))
const subSubject2 = suject$.subscribe(random => console.log('Subscriptor 2 del Subject: ', random))
const subSubject3 = suject$.subscribe(random => console.log('Subscriptor 3 del Subject: ', random))
const subSubject4 = suject$.subscribe(random => console.log('Subscriptor 4 del Subject: ', random))

// const sub1 = intervalo$.subscribe( resp => {
//   console.log('Obsevador 1: ', resp);
// });

// sub1.unsubscribe();

// const sub2 = intervalo$.subscribe(resp => {
//   console.log('Obsevador 2: ', resp);
// });

// const sub3 = intervalo$.subscribe( resp => {
//   console.log('Observador 3: ', resp);
// });

