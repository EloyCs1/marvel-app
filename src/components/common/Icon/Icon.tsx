import React from "react";

import { IconProps, IconName } from "./types";
import "./styles.scss";

const Icon: React.FC<IconProps> = ({ name, width = 24, height = 21.68, onClick }) => {
  const getSvgIcon = () => {
    switch (name) {
      case IconName.FAVORITES_FILLED:
        return (
          <svg width={width} height={height} viewBox="0 0 24 22" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12 3.80348L6 0.161865L0 3.80348V11.607L12 21.8382L24 11.607V3.80348L18 0.161865L12 3.80348Z"
              fill="#EC1D24"
            />
          </svg>
        );
      case IconName.FAVORITES_OUTLINED:
        return (
          <svg width={width} height={height} viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.75 1.55237L5.26885 0.697502L4.75 0.382594L4.23115 0.697502L4.75 1.55237ZM7.75 3.37318L7.23115 4.22804L7.75 4.54295L8.26885 4.22804L7.75 3.37318ZM1.75 3.37318L1.23115 2.51831L0.75 2.81034V3.37318H1.75ZM1.75 7.27491H0.75V7.73644L1.1012 8.03587L1.75 7.27491ZM7.75 12.3905L7.1012 13.1515L7.75 13.7046L8.3988 13.1515L7.75 12.3905ZM13.75 7.27491L14.3988 8.03587L14.75 7.73644V7.27491H13.75ZM13.75 3.37318H14.75V2.81034L14.2688 2.51831L13.75 3.37318ZM10.75 1.55237L11.2689 0.697502L10.75 0.382594L10.2312 0.697502L10.75 1.55237ZM4.23115 2.40723L7.23115 4.22804L8.26885 2.51831L5.26885 0.697502L4.23115 2.40723ZM2.26885 4.22804L5.26885 2.40723L4.23115 0.697502L1.23115 2.51831L2.26885 4.22804ZM2.75 7.27491V3.37318H0.75V7.27491H2.75ZM8.3988 11.6296L2.3988 6.51395L1.1012 8.03587L7.1012 13.1515L8.3988 11.6296ZM8.3988 13.1515L14.3988 8.03587L13.1012 6.51395L7.1012 11.6296L8.3988 13.1515ZM14.75 7.27491V3.37318H12.75V7.27491H14.75ZM14.2688 2.51831L11.2689 0.697502L10.2312 2.40723L13.2312 4.22804L14.2688 2.51831ZM10.2312 0.697502L7.23115 2.51831L8.26885 4.22804L11.2689 2.40723L10.2312 0.697502Z"
              fill="white"
            />
          </svg>
        );
      case IconName.SEARCH:
        return (
          <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.9062 10.9922C12.0234 11.1094 12.0234 11.2969 11.9062 11.3906L11.3672 11.9297C11.2734 12.0469 11.0859 12.0469 10.9688 11.9297L8.13281 9.09375C8.08594 9.02344 8.0625 8.95312 8.0625 8.88281V8.57812C7.19531 9.30469 6.09375 9.75 4.875 9.75C2.17969 9.75 0 7.57031 0 4.875C0 2.20312 2.17969 0 4.875 0C7.54688 0 9.75 2.20312 9.75 4.875C9.75 6.09375 9.28125 7.21875 8.55469 8.0625H8.85938C8.92969 8.0625 9 8.10938 9.07031 8.15625L11.9062 10.9922ZM4.875 8.625C6.9375 8.625 8.625 6.96094 8.625 4.875C8.625 2.8125 6.9375 1.125 4.875 1.125C2.78906 1.125 1.125 2.8125 1.125 4.875C1.125 6.96094 2.78906 8.625 4.875 8.625Z"
              fill="black"
            />
          </svg>
        );
      case IconName.SPINNER:
        return (
          <svg width={width} height={height} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
              className="iconSpinner"
              fill="black"
            />
          </svg>
        );
      default:
        <></>;
    }
    return <></>;
  };

  const SvgIcon = getSvgIcon();
  return onClick ? (
    <button className="buttonIcon" onClick={onClick}>
      {SvgIcon}
    </button>
  ) : (
    SvgIcon
  );
};
export default Icon;
