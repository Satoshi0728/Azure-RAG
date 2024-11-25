import {Action, configureStore, ThunkAction} from '@reduxjs/toolkit';
import messagereducer from '../features/messageSlice';

export const store = configureStore({
    reducer: {
        message: messagereducer,
    },
    });


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
    >;
