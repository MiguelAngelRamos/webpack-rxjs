import { Observable, Observer } from "rxjs";

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

const sub1 = intervalo$.subscribe( resp => {
  console.log('Obsevador 1: ', resp);
});

sub1.unsubscribe();

const sub2 = intervalo$.subscribe(resp => {
  console.log('Obsevador 2: ', resp);
});

const sub3 = intervalo$.subscribe( resp => {
  console.log('Observador 3: ', resp);
});

