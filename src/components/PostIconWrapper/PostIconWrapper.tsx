import React from "react";

type Props = {
  children: JSX.Element;
};

const PostIconWrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex items-center justify-center hover:cursor-pointer hover:bg-colorExtraLightGray h-[30px] w-[30px] rounded-[8px]">
      {children}
    </div>
  );
};

export default PostIconWrapper;
