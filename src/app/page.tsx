import LatestRace from "./_components/LatestRace";
import RaceControlList from "./_components/RaceControl";

export default function Home() {
  return (
    <div className="p-4 grid grid-cols-1 @3xl/main:grid-cols-2 @7xl/main:grid-cols-3 content-start gap-4">
      <LatestRace />
      <RaceControlList />
    </div>
  );
}
