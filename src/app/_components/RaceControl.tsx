"use client";

export const revalidate = 60;

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RaceControl, Session } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getRaceControl, getSessions } from "../actions";
import { Skeleton } from "@/components/ui/skeleton";

export default function RaceControlList() {
  const { data: sessionData, isLoading: isLoadingSession } = useQuery<Session[]>({
    queryKey: ["sessions", "latest"],
    queryFn: async () => {
      const res = await getSessions("latest");
      return res;
    },
    refetchInterval: 5000,
  });

  const { data, dataUpdatedAt, isLoading: isLoadingRaceControl } = useQuery<RaceControl[]>({
    queryKey: ["stream-race-control"],
    queryFn: async () => {
      const data = await getRaceControl(sessionData?.[0].session_key);
      return data.slice(-5);
    },
    refetchInterval: 5000,
    initialData: [],
    enabled: !!sessionData,
  });

  if (isLoadingRaceControl || isLoadingSession) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Race Control</CardTitle>
          <Skeleton className="w-1/4 h-4" />
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {[1, 2, 3].map((_, index) => (
              <Skeleton
                key={index}
                className="w-full h-24"
              />
            ))}
          </ul>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Race Control</CardTitle>
        <CardDescription>
          {sessionData?.[0].circuit_short_name} - {sessionData?.[0].session_name} - {formatDate(sessionData?.[0].date_start ?? "")}
          {/* {dataUpdatedAt && `Last Updated on ${formatDate(new Date(dataUpdatedAt).toISOString())}`} */}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {data && data.map((rc, index) => (
            <li key={index} className="p-4 rounded text-sm bg-sidebar border space-y-1">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>{rc.category}</Badge>
                {rc.scope && <Badge>{rc.scope}</Badge>}
              </div>

              <p className="font-bold">{rc.message}</p>

              <div className="">
                {rc.date && formatDate(rc.date)}
                {rc.lap_number && <span> - Lap {rc.lap_number}</span>}
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
