import React from "react";

const LogInForm = () => {
  return (
    <form className="flex flex-col">
      <p className="text-subContentSize">Sing in</p>
      <input
        className="w-full py-[8px] px-[10px] my-[5px] rounded-[10px] placeholder:text-colorTextLightGray bg-colorExtraLightGray text-contentSize border-[1px] border-colorLightGray focus:outline-none focus:border-gray-300"
        type="text"
        placeholder="Enter your email or number"
        required
      />
      <div className="inline-flex items-center">
        <label
          className="relative flex items-center mr-[5px] rounded-full cursor-pointer"
          htmlFor="check"
        >
          <input
            type="checkbox"
            className="peer relative h-[16px] w-[16px] cursor-pointer appearance-none rounded-[3px] border border-colorLightGray transition-all "
            id="check"
          />
          <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-[4px] -translate-x-[5px] peer-checked:opacity-100">
            <svg
              width="10"
              height="8"
              viewBox="0 0 8 6"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.625 0.8125L2.95 5.1875L1.375 3.4375"
                stroke="#8A8A8A"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </label>
        <label
          className="mt-px font-light text-colorTextLightGray text-subContentSize cursor-pointer select-none"
          htmlFor="check"
        >
          Remember me on this device
        </label>
      </div>
      <button className="bg-accentGreen my-[15px] py-[8px] rounded-[10px] text-white text-subContentSize hover:opacity-90">
        Sign in
      </button>
      <p className="text-[13px] text-center">
        New user?{" "}
        <a href="#" className="text-accent hover:underline">
          Create an account!
        </a>
      </p>
    </form>
  );
};

export default LogInForm;
