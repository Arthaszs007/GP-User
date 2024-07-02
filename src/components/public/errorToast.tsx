"use client";
import { setErrorToast } from "@/redux/feathers/errorToast_slice";
import { AppDispatch, useAppSelector } from "@/redux/store";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const ErrorToast = () => {
  // to get content
  const content = useAppSelector((state) => state.errorToast_slice.content);
  //to active the display
  const isActive = useAppSelector((state) => state.errorToast_slice.isActive);
  // a value to set toast background style
  const style = useAppSelector((state) => state.errorToast_slice.color);
  //to get the dispatch from redux store
  const dispatch = useDispatch<AppDispatch>();

  // when active the errorToast, set timer to clear the content and disactive
  useEffect(() => {
    setTimeout(() => {
      dispatch(setErrorToast({ isActive: false, content: "" }));
    }, 1500);
  }, [isActive]);
  return (
    <div>
      {isActive && (
        <div
          role="alert"
          className={`alert ${style} fixed bottom-5 right-10 w-[50rem] expend-width overflow-hidden truncate`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{content}</span>
        </div>
      )}
    </div>
  );
};

export default ErrorToast;
