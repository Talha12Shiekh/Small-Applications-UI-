import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import Svg, { Path } from "react-native-svg";

const VectorSvg = ({color}) => {
  return (
    <Svg
      width={20}
      style={{marginTop:hp(.5)}}
      height={20}
      viewBox="0 0 15 15"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M15 14.1667C15 14.3877 14.9122 14.5996 14.7559 14.7559C14.5996 14.9122 14.3877 15 14.1667 15H0.833333C0.61232 15 0.400358 14.9122 0.244078 14.7559C0.0877973 14.5996 0 14.3877 0 14.1667V0.833333C0 0.61232 0.0877973 0.400358 0.244078 0.244078C0.400358 0.0877973 0.61232 0 0.833333 0H14.1667C14.3877 0 14.5996 0.0877973 14.7559 0.244078C14.9122 0.400358 15 0.61232 15 0.833333V14.1667ZM6.66667 1.66667H1.66667V13.3333H6.66667V1.66667ZM13.3333 8.33333H8.33333V13.3333H13.3333V8.33333ZM13.3333 1.66667H8.33333V6.66667H13.3333V1.66667Z"
        fill={color}
      />
    </Svg>
  );
};

export default VectorSvg;
