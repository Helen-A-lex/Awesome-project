import Svg, { Circle, Path } from "react-native-svg";
import { TouchableOpacity } from "react-native";
export default function SvgComponent(props) {
  return (
    <Svg
      width={25}
      height={25}
      //   fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 37 37"
      {...props}
    >
      <Circle
        cx="18.4999"
        cy="18.5"
        r="12"
        transform="rotate(-45 18.4999 18.5)"
        fill="white"
        stroke="#E8E8E8"
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
        fill="#BDBDBD"
      />
    </Svg>
  );
}

export const FotoUserButtonClose = ({ style }) => {
  const handleLogOut = () => {};
  return (
    <>
      <TouchableOpacity
        onPress={() => {
          handleLogOut;
        }}
        style={style}
      >
        <SvgComponent />
      </TouchableOpacity>
    </>
  );
};
