import React from "react";
import NavBar from "../../components/NavBar";
import BorrowsGrid from "../../components/Borrows/BorrowsGrid";
import { useFetchBorrows } from "../../hooks/useFetchBorrows";

const Borrows: React.FC = () => {
  const { borrows, loading } = useFetchBorrows();

  if (loading) return <p>Loading...</p>;

  return (
    <div
      style={{
        padding: "16px",
        marginTop: "64px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <NavBar />
      <div>
        <BorrowsGrid borrows={borrows} />
      </div>
    </div>
  );
};

export default Borrows;
