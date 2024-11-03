"use server";

import { CarData } from "@/lib/types";

export async function getLatestSession() {
  const res = await fetch("https://api.openf1.org/v1/sessions?meeting_key=latest");
  const data = await res.json();
  return data[data.length - 1];
}

interface GetCarData {
  driver_number: number;
  date?: Date;
}

export async function getCarData({ driver_number, date }: GetCarData): Promise<CarData> {
  const res = await fetch(`https://api.openf1.org/v1/car_data?driver_number=${driver_number}&session_key=latest${date ? `&date=${date.toISOString()}` : ""}`);
  const data = await res.json();
  return data[data.length - 1];
};

export async function getRaceControl() {
  const res = await fetch("https://api.openf1.org/v1/race_control?session_key=latest");
  const data = await res.json();

  return data;
}

export async function getCurrentMeeting() {
  const res = await fetch("https://api.openf1.org/v1/meetings?meeting_key=latest");
  const data = await res.json();
  return data[0];
}

export async function getSessions(meeting_key: number | string) {
  const res = await fetch(`https://api.openf1.org/v1/sessions?meeting_key=${meeting_key}`);
  const data = await res.json();
  return data;
}
