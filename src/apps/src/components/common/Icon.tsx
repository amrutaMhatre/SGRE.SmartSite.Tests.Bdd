import React, { FC } from "react";

import { ReactComponent as Calendar } from "../../static/Images/icons/calendar_icon.svg";
import { ReactComponent as Commissioning } from "../../static/Images/icons/commissioning_icon.svg";
import { ReactComponent as Electrical } from "../../static/Images/icons/electrical_completion_icon.svg";
import { ReactComponent as Erection } from "../../static/Images/icons/erection_icon.svg";
import { ReactComponent as Filter } from "../../static/Images/icons/filter_icon.svg";
import { ReactComponent as Mechanical } from "../../static/Images/icons/mechanical_completion_icon.svg";
import { ReactComponent as Noattachment } from "../../static/Images/icons/no_attachment_icon.svg";
import { ReactComponent as Preparation } from "../../static/Images/icons/preparation_icon.svg";
import { ReactComponent as Pulse } from "../../static/Images/icons/pulse_icon.svg";
import { ReactComponent as Unloading } from "../../static/Images/icons/unloading_icon.svg";
import { ReactComponent as Wtg } from "../../static/Images/icons/wtg_icon.svg";

interface IconProps {
  name: string;
  width?: string;
  height?: string;
  className?: string;
}
const Icon: React.FC<IconProps> = (props: IconProps) => {
  switch (props.name) {
    case "calendar":
      return <Calendar {...props} />;
    case "commissioning":
      return <Commissioning {...props} />;
    case "electrical":
      return <Electrical {...props} />;
    case "erection":
      return <Erection {...props} />;
    case "filter":
      return <Filter {...props} />;
    case "mechanical":
      return <Mechanical {...props} />;
    case "noattachment":
      return <Noattachment {...props} />;
    case "preparation":
      return <Preparation {...props} />;
    case "pulse":
      return <Pulse {...props} />;
    case "unloading":
      return <Unloading {...props} />;
    case "wtg":
      return <Wtg {...props} />;
    default:
      return <></>;
  }
};

export default Icon;
