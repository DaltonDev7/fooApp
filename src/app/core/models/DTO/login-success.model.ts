import { Usuario } from '../usuario.model';

export interface LoginSuccessDTO {
    Usuario?: Usuario
    token?: string
}