"use client";

import Container from "@/components/container";
import { AllCommercialResult } from "@/utils/types/QueryResults";
import React, { FC } from "react";
import ReactPlayer from "react-player";

type Interface = {
  commercials: AllCommercialResult[];
  settings: any;
};

const commercialPreview = (result: AllCommercialResult) => {
  return (
    <div className="flex justify-center">
      <div className="gap-4 border border-white">
        <ReactPlayer
          muted={true}
          width={500}
          height={500}
          light
          url={result.videoLink}
        />
      </div>
    </div>
  );
};
const Commercials = ({ commercials, settings }: Interface) => {
  console.log(commercials);
  return (
    <Container>
      <div>
        {commercials
          ? commercials.map(result => (
              <div className="flex flex-col" key={result._id}>
                {commercialPreview(result)}
              </div>
            ))
          : null}
      </div>
    </Container>
  );
};

export default Commercials;
