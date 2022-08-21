import { Action, createReducer, on } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import * as CreateResetPasswordByPhoneActions from './forgetResetPasswordByPhone.actions';
import * as CreateforgetPasswordByPhoneActions from './forgetResetPasswordByPhone.actions';
import {resetPasswordByPhone } from './resetPasswordByPhone.model';
import * as fromRoot from '../../../../app.reducer';
import { forgotPasswordByPhone } from './forgotPasswordByPhone.model';






export interface forgetPasswordState extends EntityState<forgotPasswordByPhone> {
    Loaded: boolean;
}
export const forgetPasswordByPhoneFeatureKey = 'forgetPasswordByPhone';

export const adapter: EntityAdapter<forgotPasswordByPhone> = createEntityAdapter<forgotPasswordByPhone>();
export const initialState = adapter.getInitialState({
    Loaded: false
});

export const ForgetByPhoneReducer = createReducer(
    initialState,

    on(CreateforgetPasswordByPhoneActions.createForgetPhoneRequest, (state, action) => {
        return adapter.addOne(action.forgotPasswordByPhone, state);
    }),
)



export const { selectAll, selectIds } = adapter.getSelectors();