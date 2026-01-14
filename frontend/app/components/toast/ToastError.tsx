import React from "react";

function ToastError({
  text,
  setShow,
}: {
  text: string;
  setShow: (show: boolean) => void;
}) {
  return (
    <div
      id="toast-danger"
      className="absolute right-4 top-20 flex items-center  max-w-[320px] w-full p-4 text-body bg-red-700 rounded-base shadow-lg shadow-red-600 rounded-xl"
      role="alert"
    >
      <div className="inline-flex items-center justify-center shrink-0 w-7 h-7 text-fg-success">
        <svg
          className="w-20 h-20"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>

        <span className="sr-only">Error icon</span>
      </div>
      <div className="ms-3 text-sm font-normal">{text}</div>
      <button
        onClick={() => setShow(false)}
        type="button"
        className="hover:scale-120 ms-auto flex items-center justify-center text-body hover:text-heading bg-transparent box-border border border-transparent hover:bg-neutral-secondary-medium  font-medium leading-5 rounded text-sm h-8 w-8 "
        data-dismiss-target="#toast-danger"
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18 17.94 6M18 18 6.06 6"
          />
        </svg>
      </button>
    </div>
  );
}

export default ToastError;
