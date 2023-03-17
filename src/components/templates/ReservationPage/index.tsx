import { Header } from "../../elements/Header";

const HandleAddReservation = () => {
  console.log("reservation added");
};
export const ReservationPage = () => {
  return (
    <>
      <div>reservations</div>
      <div>
        <button
          onClick={HandleAddReservation}
          className="rounded-xl border-2 bg-orange-200 p-2 hover:bg-orange-300"
        >
          Add reservations
        </button>
      </div>
    </>
  );
};
