import { fromEvent, of, Observable, interval, from } from 'rxjs';
import { map, finalize, take } from 'rxjs/operators';

export const createSample = () => {
  const randomNumber = Math.random();
  const random = Observable.create(observer => {
    observer.next('Randomly Selected:');
    observer.next(randomNumber);
  });
  return random.subscribe(value => console.log(value));
};

export const fromEventSample = () => {
  const source = fromEvent(document, 'click');
  const example = source.pipe(map(event => `Event time: ${event.timeStamp}`));
  return example.subscribe(val => console.log(val));
};

export const ofSample = () => {
  const source = of(0, 2, 6, 20, 19);
  return source.subscribe(val => console.log(val));
};

export const finalizeSample = () => {
  const source = interval(1000);
  const final = source.pipe(
    take(5),
    finalize(() => console.log('Sequence complete!')),
  );
  return final.subscribe(value => console.log(value));
};

export const fromPromiseSample = () => {
  const promiseSource = from(new Promise(resolve => resolve('Resolved!')));
  return promiseSource.subscribe(value => console.log(value));
};
