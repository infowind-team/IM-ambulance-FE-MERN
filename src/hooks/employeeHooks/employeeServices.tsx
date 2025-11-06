import { useEffect, useRef, useState } from "react";
import { USER_ENDPOINT } from "../../utils/apiConstants";
import { executor } from "../../http/executor/index";


export const employeeServicesHook = () => {
    
    const employeeDetailsRef = useRef<any>(null);
    const [state, setState] = useState({
        isLoading: false,
        error: null,
    });
    const employeeDetails = async (employeeId: string) =>
    {
        setState((prev) => ({ ...prev, isLoading: true }));
        const url = `${USER_ENDPOINT.GET_EMPLOYEE_SERVICES}/${employeeId}`;

        const exe = executor("get", url);
        employeeDetailsRef.current = exe;
        try {
            const response = await employeeDetailsRef.current.execute();
            return response;
        } catch (error: any) {
            let errorMessage = "An Unexpected error occurred"
            if (error.response) {
                errorMessage = error?.response?.data?.message;
            } else if (error.request) {
                errorMessage = "Network error, Please try again"
            } else {
                errorMessage = error?.message || "An unexpected error occurred";
            }
            setState((prev: any) => ({ ...prev, error: errorMessage }));
        } finally {
            setState((prev) => ({ ...prev, isLoading: false }));
        }
    };
    useEffect(() =>
    {
        return () =>
        {
            if (employeeDetailsRef.current) {
                employeeDetailsRef.current.cancel();
            }
        }
    }, []);
    return {
        employeeDetails,
        state
    }
}