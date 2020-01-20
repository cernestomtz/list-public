import React from 'react';

const ReturnMenu = () => (
  <a className="md:hidden w-1/5 float-right" href="#toc-menu">
    Menu
  </a>
);


const Paragraph = ({ text, title }) => {
  return (
    <div>
      <h2 className="text-center md:text-left font-bold text-xl mt-4">{title}</h2>
      <p dangerouslySetInnerHTML={{ __html: text }} />
      <ReturnMenu />
    </div>
  );
};

export default Paragraph;
