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

export type Meeting = {
  "circuit_key": number,
  "circuit_short_name": string,
  "country_code": string,
  "country_key": number,
  "country_name": string,
  "date_start": string,
  "gmt_offset": string,
  "location": string,
  "meeting_key": number,
  "meeting_name": string,
  "meeting_official_name": string,
  "year": number
};

export type Session = {
  "circuit_key": number,
  "circuit_short_name": string,
  "country_code": string,
  "country_key": number,
  "country_name": string,
  "date_end": string,
  "date_start": string,
  "gmt_offset": string,
  "location": string,
  "meeting_key": number,
  "session_key": number,
  "session_name": string,
  "session_type": string,
  "year": number
};
