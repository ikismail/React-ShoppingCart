import React from "react";
import { Link } from "react-router-dom";

type SectionProps = {
  title: string;
  route: string;
};

const SectionHeader = ({ title, route }: SectionProps) => {
  return (
    <nav aria-label='breadcrumb'>
      <ol className='breadcrumb'>
        <li className='breadcrumb-item active' aria-current='page'>
          {title}
        </li>
        <li className='ml-auto' aria-current='page'>
          <Link to={route}>Show All</Link>
        </li>
      </ol>
    </nav>
  );
};

export default SectionHeader;
