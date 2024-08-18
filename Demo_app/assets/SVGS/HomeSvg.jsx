import Svg, { Path } from "react-native-svg";
import { ICONS_SIZE } from "../../Constants";
export const HomeSvg = ({color}) => {
  return (
    <Svg
      height={ICONS_SIZE}
      width={ICONS_SIZE}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <Path
        d="M23.1212 9.06893L15.5362 1.48293C14.5975 0.546917 13.3259 0.0213013 12.0002 0.0213013C10.6746 0.0213013 9.40298 0.546917 8.46423 1.48293L0.879226 9.06893C0.599651 9.34671 0.377996 9.67723 0.227108 10.0413C0.0762209 10.4054 -0.000896777 10.7958 0.000225703 11.1899V21.0069C0.000225703 21.8026 0.316296 22.5656 0.878905 23.1282C1.44151 23.6909 2.20458 24.0069 3.00023 24.0069H21.0002C21.7959 24.0069 22.5589 23.6909 23.1215 23.1282C23.6842 22.5656 24.0002 21.8026 24.0002 21.0069V11.1899C24.0014 10.7958 23.9242 10.4054 23.7733 10.0413C23.6225 9.67723 23.4008 9.34671 23.1212 9.06893ZM15.0002 22.0069H9.00023V18.0729C9.00023 17.2773 9.3163 16.5142 9.87891 15.9516C10.4415 15.389 11.2046 15.0729 12.0002 15.0729C12.7959 15.0729 13.5589 15.389 14.1215 15.9516C14.6842 16.5142 15.0002 17.2773 15.0002 18.0729V22.0069ZM22.0002 21.0069C22.0002 21.2721 21.8949 21.5265 21.7073 21.714C21.5198 21.9016 21.2654 22.0069 21.0002 22.0069H17.0002V18.0729C17.0002 16.7468 16.4734 15.4751 15.5358 14.5374C14.5981 13.5997 13.3263 13.0729 12.0002 13.0729C10.6741 13.0729 9.40238 13.5997 8.46469 14.5374C7.52701 15.4751 7.00023 16.7468 7.00023 18.0729V22.0069H3.00023C2.73501 22.0069 2.48066 21.9016 2.29312 21.714C2.10558 21.5265 2.00023 21.2721 2.00023 21.0069V11.1899C2.00115 10.9249 2.10642 10.6709 2.29323 10.4829L9.87823 2.89993C10.4419 2.33886 11.2049 2.02387 12.0002 2.02387C12.7956 2.02387 13.5585 2.33886 14.1222 2.89993L21.7072 10.4859C21.8933 10.6732 21.9985 10.9259 22.0002 11.1899V21.0069Z"
        fill={color}
      />
    </Svg>
  );
};