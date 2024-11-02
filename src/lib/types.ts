import { type LucideProps } from "lucide-react";

export type NavItems = {
  title: string;
  url: string;
  icon?: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
}

export type CarData = {
  brake: number;
  date: Date;
  driver_number: number;
  drs: number;
  meeting_key: number;
  n_gear: number;
  rpm: number;
  session_key: number;
  speed: number;
  throttle: number;
};
