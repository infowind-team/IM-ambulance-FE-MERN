import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DashboardInitialState {
    userCount: number;
    practitionerCount: number;
    value: number;
    empData: {
        id: number;
        name: string;
        email: string;
        phone: string;
        website: string;
    }
}

interface IEmployeeData {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

const initialState: DashboardInitialState = {
    userCount: 0,
    practitionerCount: 0,
    value: 0,
    empData: {
        id: 0,
        name: '',
        email: '',
        phone: '',
        website: '',
    }
};

export const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
        userCount: (state, action: PayloadAction<number>) => {
            state.userCount = action.payload
        },
        practitionerCount: (state, action: PayloadAction<number>) => {
            state.practitionerCount = action.payload
        },
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload;
        },
        setEmployeeData: (state, action: PayloadAction<IEmployeeData>) => {
            state.empData = { ...action.payload }
        }
    },
});

const dashboardReducer = dashboardSlice.reducer;

export const { userCount, practitionerCount, increment, decrement, incrementByAmount, setEmployeeData } = dashboardSlice.actions;
export default dashboardReducer;
