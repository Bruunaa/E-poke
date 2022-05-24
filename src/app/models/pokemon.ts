export interface Pokemon{     
    imagem: string;
    number: number;
    name: string;
    types: Type[];
    }
    
    export enum Type{
    Grass="Grass",
    Poison ="Poison",
    Fire = "Fire"
    }