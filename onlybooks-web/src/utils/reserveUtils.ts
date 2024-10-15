import { Reserve } from "../types/reserveType";

export const filterReserves = (reserves: Reserve[], searchQuery: string) => {
  return reserves.filter(
    (reserve) =>
      reserve.usuario.email.toLowerCase().includes(searchQuery.toLowerCase()) &&
      reserve.statusReserva === 0
  );
};
