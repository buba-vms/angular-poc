import { createAction, props } from '@ngrx/store';

export const searchMovie = createAction(
  '[Counter Component] Increment',
  props<{ payload: string }>()
);
