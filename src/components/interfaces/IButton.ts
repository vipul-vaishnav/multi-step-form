import { MouseEventHandler } from "react";
import { IDisabled } from "./IDisabled";

export interface IButton extends IDisabled {
    label: string
    variant?: "text" | "contained"
    onClick?: () => void
}