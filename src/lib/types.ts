import { type LucideProps } from "lucide-react";

export type NavItems = {
  title: string;
  url: string;
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
};

export type CarData = {
  brake: number;
  date: string;
  driver_number: number;
  drs: number;
  meeting_key: number;
  n_gear: number;
  rpm: number;
  session_key: number;
  speed: number;
  throttle: number;
};

export type RaceControl = {
  session_key: number;
  meeting_key: number;
  date: string;
  category: string;
  flag: string;
  lap_number: number;
  message: string;
  driver_number: number;
  scope: string;
  sector: number;
};

export type Position = {
  session_key: number;
  meeting_key: number;
  driver_number: number;
  date: string;
  position: number;
  initial_position: number;
  final_position: number;
};
