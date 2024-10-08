import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";
import { ICONS_SIZE } from "../../Constants";

const ProductsSvg = ({color,focused}) => {
  return (
    <Svg
      width={ICONS_SIZE}
      height={ICONS_SIZE}
      viewBox="0 0 21 21"
      fill={"none"}
      xmlns="http://www.w3.org/2000/svg"
    >
      <G clipPath="url(#clip0_20_520)">
        <Path
          d="M18.1807 17.1666C18.1807 17.3877 18.0929 17.5996 17.9366 17.7559C17.7803 17.9122 17.5683 18 17.3473 18H4.014C3.79298 18 3.58102 17.9122 3.42474 17.7559C3.26846 17.5996 3.18066 17.3877 3.18066 17.1666V8.40831C3.18058 8.28133 3.20951 8.156 3.26526 8.0419C3.32101 7.9278 3.4021 7.82795 3.50233 7.74998L10.169 2.56498C10.3153 2.45119 10.4953 2.3894 10.6807 2.3894C10.866 2.3894 11.046 2.45119 11.1923 2.56498L17.859 7.74998C17.9592 7.82795 18.0403 7.9278 18.0961 8.0419C18.1518 8.156 18.1808 8.28133 18.1807 8.40831V17.1666V17.1666Z"
          stroke={focused ? color : "grey"}
          stroke-width="5"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_20_520">
          <Rect
            width="20"
            height="20"
            fill={color}
            transform="translate(0.680664 0.5)"
          />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export default ProductsSvg;
