import {createSelector} from 'reselect';
import {RootState} from '../root.reducer';
import {IEducationState} from './education.reducer';

const selectEducation = (state: RootState): IEducationState => state.education;

export const selectEducations = createSelector(
  [selectEducation],
  (education) => education.educations,
);