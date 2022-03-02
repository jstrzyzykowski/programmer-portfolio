import {EducationTypes} from './education.types';
import {Action} from './education.types';
import {IEducation} from '../../api/educations.data';

export interface IEducationState {
  educations: IEducation[],
  isLoading: boolean,
  errorMessage: string | undefined,
}

const initialState: IEducationState = {
  educations: [],
  isLoading: false,
  errorMessage: undefined,
};

export function educationReducer(state: IEducationState = initialState, action: Action): IEducationState {
  switch (action.type) {
    case EducationTypes.FETCH_EDUCATIONS_START:
      return {
        ...state,
        isLoading: true,
      }
    case EducationTypes.FETCH_EDUCATIONS_SUCCESS:
      return {
        ...state,
        educations: action.payload,
        isLoading: false,
        errorMessage: undefined,
      }
    case EducationTypes.FETCH_EDUCATIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload,
      }
    default:
      return state;
  }
}