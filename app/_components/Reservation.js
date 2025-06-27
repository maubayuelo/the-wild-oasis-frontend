//Reservation.js

import ReservationForm from "@/app/_components/ReservationForm";
import DateSelector from "@/app/_components/DateSelector";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

async function Reservation({cabin}) {

  const session = await auth();

    const [settings, bookedDates] = await Promise.all([
      getSettings(),
      getBookedDatesByCabinId(cabin.id)
    ])


    return (
        <div className="grid grid-cols-2 border border-primary-800 min-h-[400px]">
          <DateSelector
            cabin={cabin}
            settings={settings}
            bookedDates={bookedDates}
          />
          {session && session.user ? (
            <ReservationForm cabin={cabin} user={session.user} />
          ) : (
            <LoginMessage cabin={cabin} />
          )}
        </div>
    )
}

export default Reservation
