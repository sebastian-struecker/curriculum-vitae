import {Company} from "./company";

export type Position = {
    title: string; company: Company; time: string; description?: string;
}

export const POSITION_DESCRIPTIONS = {
    MHP: `Responsible for:
- Requirements engineering
- System design
- Implementation
- Cloud operations`
}
