"use client";

import dynamic from "next/dynamic";
import React from "react";

export const DynamicGrid = dynamic(() => import("@/components/Grid"), {
  ssr: false,
  loading: () => <div className="content-loader h-96 w-full" />,
});

export const DynamicContact = dynamic(() => import("@/components/Contact"), {
  ssr: false,
  loading: () => <div className="content-loader h-96 w-full" />,
});

