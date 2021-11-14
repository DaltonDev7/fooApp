import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from './auth.reducer';

const getUserFeatureStatus = createFeatureSelector<UserState>('authentication');


export const getCurrentUser = createSelector(
    getUserFeatureStatus,
    state => state.UserActual
);

