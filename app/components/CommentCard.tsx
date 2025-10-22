import React from "react";

export default function CommentCard() {
  return (
    <>
      <div className="flex gap-2.5 my-5">
        <div className="p-1 rounded-full  h-fit text-2xl shadow border border-pro ">
          <h6 className="border border-pro p-3.5  w-6 h-6 text-white bg-pro flex items-center justify-center rounded-full uppercase">v</h6>
          </div>
        <div>
          <h4 className="font-semibold text-2xl uppercase">John Doe</h4>
          <p className="text-[#747474]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
            quidem laborum necessitatibus, ipsam impedit vitae autem, eum
            officia, fugiat saepe enim sapiente iste iure! Quam voluptas earum
            impedit necessitatibus, nihil?
          </p>
        </div>
      </div>
      
    </>
  );
}
