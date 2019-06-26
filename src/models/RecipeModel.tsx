export interface RecipeModel {
    _id: number;
    name: string;
    createdAt: Date;
    difficulty: string;
    duration: number;
    image?: string;
} 