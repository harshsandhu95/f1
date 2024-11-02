import { CarData } from "@/lib/types";
import { getCarData, getRaceControl } from "./actions";

export const revalidate = 60;

export default async function Home() {
  let carData: CarData = await getCarData({
    driver_number: 4,
  });

  let raceControl = await getRaceControl();

  return (
    <main className="container flex flex-col gap-4">
      <p>{carData && JSON.stringify(carData)}</p>
      <p>{raceControl && JSON.stringify(raceControl)}</p>
    </main>
  );
}
