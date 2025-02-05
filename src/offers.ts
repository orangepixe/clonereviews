import TripLogo from "~/assets/logos/trip.png?url"
import BookingLogo from "~/assets/logos/booking.png?url"
import AgodaLogo from "~/assets/logos/agoda.png?url"
import EdreamsLogo from "~/assets/logos/edreams.png?url"
import StayforlongLogo from "~/assets/logos/stayforlong.png?url"

interface Offer {
  logo: string
  name: string
  offer: number
}




function useHelp() {
  const offers: Offer[] = [
    { logo: TripLogo, name: 'Trip.com', offer: 15 },
    { logo: BookingLogo, name: 'Booking.com', offer: 20 },
    { logo: AgodaLogo, name: 'Agoda', offer: 22 },
    { logo: EdreamsLogo, name: 'eDreams', offer: 25 },
    { logo: StayforlongLogo, name: 'stayforlong.com', offer: 30 },
  ];

  return {
    offers
  }
}

export default useHelp;
