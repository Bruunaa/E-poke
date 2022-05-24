export interface Produto {
    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    preco:number;
    emPromocao: boolean;
    desconto: number;
    categoria: CategoriaProduto;
}
export interface ProdutoCura {
    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    preco:number;
    emPromocao: boolean;
    desconto: number;
    categoria: CategoriaProduto;
}
export interface ProdutoPedras {
    imagem: string;
    nomeDoProduto: string;
    descricao: string;
    preco:number;
    emPromocao: boolean;
    desconto: number;
    categoria: CategoriaProduto;
}



export enum CategoriaProduto{
    POKEBOLA = 'pokebola',
    CURA = 'cura',
    PEDRAS = 'pedras'
    
    
}

