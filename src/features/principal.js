import { createSlice } from "@reduxjs/toolkit";

const initialValue = { calculation: 0 };

export const principalSlice = createSlice({
    name: "principal",
    initialState: { value: initialValue },
    reducers: {
        calculatePrincipal: (state, action) => {
            const p =
                action.payload.principal *
                (1 + (action.payload.rate / 100) * action.payload.years);
            state.value = { calculation: parseFloat(p).toFixed(2) };
        },
    },
});

export const { calculatePrincipal } = principalSlice.actions;

export default principalSlice.reducer;
