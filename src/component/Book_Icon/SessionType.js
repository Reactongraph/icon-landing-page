import React from "react";
import {
  MainGrid,
  MainHeading,
  SessionGrid,
  VideoGrid,
  ContentGrid,
  TopGrid,
  HeadTypo,
  Span,
  TimeSpan,
  SubTypo,
  BookSession,
  ContentTypo,
} from "./SessionStyle";

export default function SessionType() {
  return (
    <MainGrid>
      <MainHeading>Sessions, tailored to you:</MainHeading>
      <SessionGrid>
        <VideoGrid>
          <ContentGrid>
            <TopGrid>
              <HeadTypo>
                Video Feedback<Span>$75 USD</Span>
                <br />
                <TimeSpan>
                  For a <SubTypo>15 minutes</SubTypo>
                </TimeSpan>
              </HeadTypo>
              <BookSession>Book Session</BookSession>
            </TopGrid>
            <ContentTypo>
              Choose your topic and see where you can improve, get
              encouragement, and unlock your talents fast through this 15-minute
              video feedback. Just hand in your most pressing questions, and
              your Icon will do the rest.
            </ContentTypo>
          </ContentGrid>
        </VideoGrid>

        <VideoGrid>
          <ContentGrid>
            <TopGrid>
              <HeadTypo>
                1:1 Video Call<Span>$100 USD</Span>
                <br />
                <TimeSpan>
                  First <SubTypo>30 minutes</SubTypo>
                </TimeSpan>
              </HeadTypo>
              <BookSession>Book Session</BookSession>
            </TopGrid>
            <ContentTypo>
              Connect with your Icon in this not-to-be-missed 1:1 video call.
              Talk to them about anything you want to learn about the industry
              and more. Not only will you get feedback, you will also get
              guidance, career advice, and networking tips- so you can grow and
              do your best work.
            </ContentTypo>
          </ContentGrid>
        </VideoGrid>
      </SessionGrid>
    </MainGrid>
  );
}
