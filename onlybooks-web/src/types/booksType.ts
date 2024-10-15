export interface Book {
  id: number;
  titulo: string;
  autor: string;
  genero: {
    nome: string;
  };
  status: number;
}

export interface SelectedBook extends Book {
  selected: boolean;
}

export interface BookGridProps {
  books: Book[];
  selectedBooks: Book[];
  onBookSelect: (book: Book) => void;
}

export interface SearchBarProps {
  searchPlaceholder: string,
  searchQuery: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface SelectedBookCardProps {
  id: number;
  title: string;
  author: string;
  genre: string;
  isSelected: boolean;
  onClick: () => void;
}
