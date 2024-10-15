export interface Borrow {
  id: {
    timestamp: number;
    machine: number;
    pid: number;
    increment: number;
    creationTime: string; 
  };
  reservaId: number;
  dataDevolucao: string; 
  statusEmprestimo: number;
}

export interface BorrowsCardProps {
  reservaId: number;
  dataDevolucao: string; 
  statusEmprestimo: string;
}

export interface BorrowsGridProps {
  borrows: Borrow[];
}