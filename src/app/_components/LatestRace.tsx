"use client";

export const revalidate = 60;

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { getCurrentMeeting, getSessions } from "../actions";
import { Meeting, Session } from "@/lib/types";
import { formatDate } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

const LatestRace = () => {
  const { data: meetingData, isLoading: isLoadingMeeting } = useQuery<Meeting>({
    queryKey: ["latest-meeting"],
    queryFn: async () => {
      const res = await getCurrentMeeting();
      return res;
    },
    refetchInterval: 36000,
  });

  const { data: sessionsData, isLoading: isLoadingSession } = useQuery<Session[]>({
    queryKey: ["sessions", meetingData?.meeting_key],
    queryFn: async () => {
      const res = await getSessions(meetingData?.meeting_key ?? "latest");
      return res;
    },
    refetchInterval: 36000,
    enabled: !!meetingData?.meeting_key,
  });

  if (isLoadingMeeting || isLoadingSession) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Current Meeting</CardTitle>
          <div className="flex flex-col">
            <Skeleton className="w-1/4 h-4" />
            <Skeleton className="mt-1 w-1/4 h-4" />
          </div>
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
        <CardTitle>{meetingData?.meeting_name}</CardTitle>
        <CardDescription className="flex flex-col">
          <span>{meetingData?.meeting_official_name}</span>
          <span>
            {meetingData?.date_start && formatDate(meetingData?.date_start)}
          </span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {isLoadingMeeting && <p>Loading...</p>}
          {sessionsData && sessionsData.map((session, index) => (
            <li key={index} className="p-4 rounded text-sm bg-sidebar border space-y-1">
              {isLoadingSession && <p>Loading...</p>}
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span>{session.session_name}</span>
                <Badge>{session.session_type}</Badge>
              </div>

              <div className="space-y-1">
                <h2>Track Time</h2>
                <div className="flex items-center justify-between gap-2">
                  <p>Start: {formatDate(session.date_start, parseInt(session.gmt_offset))}</p>
                  <p>End: {formatDate(session.date_end, parseInt(session.gmt_offset))}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
};

export default LatestRace;
