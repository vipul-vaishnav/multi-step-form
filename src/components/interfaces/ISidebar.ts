import { Dispatch, SetStateAction } from "react";

export interface ISidebar {
    sidebarCollapsed: boolean;
    setSidebarCollapsed: Dispatch<SetStateAction<boolean>>
    activeStep: number
    setActiveStep: Dispatch<SetStateAction<number>>
}