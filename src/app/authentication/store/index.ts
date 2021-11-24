import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from './auth.reducer';

const getUserFeatureStatus = createFeatureSelector<UserState>('authentication');


export const getCurrentUser = createSelector(
    getUserFeatureStatus,
    state => state.UserActual
);

export const getIdUsuarioAuth = createSelector(
    getUserFeatureStatus,
    state => state.UserActual.Id
);


export const getLoadingLogin = createSelector(
    getUserFeatureStatus,
    state => state.loading
);