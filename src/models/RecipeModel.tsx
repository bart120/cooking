export interface RecipeModel {
    _id: string;
    name: string;
    createdAt: Date;
    difficulty: string;
    duration: number;
    image?: string;
} 