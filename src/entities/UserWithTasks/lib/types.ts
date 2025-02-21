import { User } from "@/entities/User/lib/types";
export interface UserWithTasks extends User {
    tasksCount: number; 
}