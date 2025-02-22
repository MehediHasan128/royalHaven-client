import { ReactNode } from "react";

const PropertyTabPanel = ({
  children,
  value,
  index,
}: {
  children: ReactNode;
  value: number;
  index: number;
}) => {
  return <div>{value === index && <div className="p-5">{children}</div>}</div>;
};

export default PropertyTabPanel;
