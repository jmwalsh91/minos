import React from "react";

type Props = {
  title: string;
  description: string;
};


function AboutCard({ title, description }: Props) {
  return (
<div className="card w-96 bg-white text-primary-content border-black border-4 shadow-xl ">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <button className="btn hover:border-slate-300 shadow-slate-400 shadow-md hover:shadow-sm">Learn More</button>
    </div>
  </div>
</div>
  );
}

export default AboutCard;
