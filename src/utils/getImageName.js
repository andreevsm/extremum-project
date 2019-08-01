import * as R from 'ramda';

export const getImageName = R.pipe(
  R.split('.'),
  R.head,
  R.split('-'),
  R.converge(
    (first, all) =>
      first +
      all.map(element => element.charAt(0).toUpperCase() + element.slice(1)),
    [R.head, R.drop(1)],
  ),
  R.ifElse(
    R.pipe(
      R.head,
      R.equals('#'),
    ),
    R.pipe(
      R.drop(1),
      R.toLower,
    ),
    R.identity,
  ),
  R.always(''),
);
