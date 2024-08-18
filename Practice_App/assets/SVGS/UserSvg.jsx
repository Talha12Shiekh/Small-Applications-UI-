import Svg, { ClipPath, Defs, G, Path, Rect } from "react-native-svg";

const UserSvg = ({ color }) => {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 14 18"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M13.986 17.8333H12.3193V16.1666C12.3193 15.5036 12.0559 14.8677 11.5871 14.3989C11.1182 13.93 10.4824 13.6666 9.81931 13.6666H4.81931C4.15627 13.6666 3.52039 13.93 3.05155 14.3989C2.58271 14.8677 2.31932 15.5036 2.31932 16.1666V17.8333H0.652649V16.1666C0.652649 15.0616 1.09164 14.0018 1.87304 13.2204C2.65444 12.439 3.71425 12 4.81931 12H9.81931C10.9244 12 11.9842 12.439 12.7656 13.2204C13.547 14.0018 13.986 15.0616 13.986 16.1666V17.8333ZM7.31931 10.3333C6.66271 10.3333 6.01253 10.204 5.4059 9.95271C4.79927 9.70144 4.24807 9.33314 3.78378 8.86885C3.31949 8.40455 2.95119 7.85336 2.69992 7.24673C2.44864 6.6401 2.31932 5.98992 2.31932 5.33331C2.31932 4.6767 2.44864 4.02652 2.69992 3.4199C2.95119 2.81327 3.31949 2.26207 3.78378 1.79778C4.24807 1.33349 4.79927 0.965189 5.4059 0.713915C6.01253 0.462642 6.66271 0.333313 7.31931 0.333313C8.6454 0.333313 9.91717 0.860097 10.8548 1.79778C11.7925 2.73546 12.3193 4.00723 12.3193 5.33331C12.3193 6.6594 11.7925 7.93116 10.8548 8.86885C9.91717 9.80653 8.6454 10.3333 7.31931 10.3333ZM7.31931 8.66665C8.20337 8.66665 9.05122 8.31546 9.67634 7.69034C10.3015 7.06521 10.6526 6.21737 10.6526 5.33331C10.6526 4.44926 10.3015 3.60141 9.67634 2.97629C9.05122 2.35117 8.20337 1.99998 7.31931 1.99998C6.43526 1.99998 5.58741 2.35117 4.96229 2.97629C4.33717 3.60141 3.98598 4.44926 3.98598 5.33331C3.98598 6.21737 4.33717 7.06521 4.96229 7.69034C5.58741 8.31546 6.43526 8.66665 7.31931 8.66665Z"
        fill={color}
      />
    </Svg>
  );
};

export default UserSvg;