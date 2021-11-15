import { AlimentosUsuario } from '../alimentos-usuario.model';
export interface AlimentosPaginacionDTO {
    data?: AlimentosUsuario[]
    page?: number;
    itemsByPage?: number;
    total?: number;
}