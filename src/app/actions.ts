"use server";

import { CarData } from "@/lib/types";
import { revalidatePath } from "next/cache";

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
  try {
    const res = await fetch("https://api.openf1.org/v1/race_control?session_key=latest");
    const data = await res.json();
    return data.length ? data.slice(-5) : [];
  } catch (error) {
    console.error(error);
    return [];
  }
}
