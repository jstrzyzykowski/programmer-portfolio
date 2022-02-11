import {FetchEducationsStartAction, FetchEducationsSuccessAction, FetchEducationsFailureAction} from './education.actions';

export enum EducationTypes {
  FETCH_EDUCATIONS_START,
  FETCH_EDUCATIONS_SUCCESS,
  FETCH_EDUCATIONS_FAILURE,
}

export type Action = FetchEducationsStartAction | FetchEducationsSuccessAction | FetchEducationsFailureAction;