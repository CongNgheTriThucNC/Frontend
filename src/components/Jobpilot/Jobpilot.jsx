import React from "react";
import BoxJopiot from "../BoxJopiot";
import Upload from "../BoxJopiot/Upload";
import Find from "../BoxJopiot/Find"
import Apply from "../BoxJopiot/Apply";

export default function Jobpilot() {
  return (
    <div>
      <div className="w-[1280px] mx-auto bg-blur py-20">
        <h1 className="font-bold text-3xl  text-center my-6">How jobpilot work</h1>
        <div className="flex gap-5 justify-center">
            <BoxJopiot />
            <Upload />
            <Find />
            <Apply />
        </div>
      </div>
    </div>
  );
}
