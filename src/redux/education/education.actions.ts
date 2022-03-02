import { EducationTypes } from './education.types';
import {IEducation} from '../../api/educations.data';
import {Dispatch} from 'redux';
import axios from 'axios';

export interface FetchEducationsStartAction {
  type: EducationTypes.FETCH_EDUCATIONS_START,
}

export function fetchEducationsStart(): FetchEducationsStartAction {
  return {
    type: EducationTypes.FETCH_EDUCATIONS_START,
  }
}

export interface FetchEducationsSuccessAction {
  type: EducationTypes.FETCH_EDUCATIONS_SUCCESS,
  payload: IEducation[],
}

export function fetchEducationsSuccess(items: IEducation[]): FetchEducationsSuccessAction {
  return {
    type: EducationTypes.FETCH_EDUCATIONS_SUCCESS,
    payload: items,
  }
}

export interface FetchEducationsFailureAction {
  type: EducationTypes.FETCH_EDUCATIONS_FAILURE,
  payload: string,
}

export function fetchEducationsFailure(errorMessage: string): FetchEducationsFailureAction {
  return {
    type: EducationTypes.FETCH_EDUCATIONS_FAILURE,
    payload: errorMessage,
  }
}

export function fetchEducationsStartAsync() {
  return async (dispatch: Dispatch) => {
    dispatch(fetchEducationsStart());
    try {
      const educations = (await axios.get<IEducation[]>('http://localhost:5000/educations')).data;
      console.log(educations);
      dispatch(fetchEducationsSuccess(educations));
    } catch(err) {
      dispatch(fetchEducationsFailure((err as Error).message))
    }
  }
}