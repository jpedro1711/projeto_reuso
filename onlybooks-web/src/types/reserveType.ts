import { Usuario } from "./usuarioType"

export interface Reserve {
    id: number
    statusReserva: number
    dataReserva: Date
    usuarioId: number
    usuario: Usuario
    livros: any[]
  }

export interface ReserveCardProps {
    id: number               
    nomeUsuario: string      
    statusReserva: string     
    dataReserva: Date    
    numLivros: number       
    isSelected: boolean    
    onClick: (id: number) => void 
}

export interface ReserveGridProps {
  reserves: Reserve[];
  selectedReserve: Reserve;
  onReserveSelect: (reserve: Reserve) => void;
}
