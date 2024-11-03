"use client";

import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { RaceControl } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";
import { getRaceControl } from "../actions";

export default function RaceControlList() {
  const { data, dataUpdatedAt, isLoading } = useQuery<RaceControl[]>({
    queryKey: ["stream-race-control"],
    queryFn: async () => {
      const data = await getRaceControl();
      return data.slice(-5);
    },
    refetchInterval: 5000,
    retryOnMount: true
  });

  return (
    <Card>
      <CardHeader>
        <CardTitle>Race Control</CardTitle>
        <CardDescription>Last Updated on {formatDate(new Date(dataUpdatedAt).toISOString())}</CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && <p>Loading...</p>}
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
