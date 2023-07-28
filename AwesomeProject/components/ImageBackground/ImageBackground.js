import { StyleSheet, Image, View } from "react-native";
import * as React from "react";

class ImageBackground extends React.Component {
  _viewRef = null;

  _captureRef = (ref) => {
    this._viewRef = ref;
  };

  render() {
    const { children, style, imageStyle, imageRef, ...props } = this.props;

    const flattenedStyle = StyleSheet.flatten(style);

    return (
      <View
        accessibilityIgnoresInvertColors={true}
        style={style}
        ref={this._captureRef}
      >
        <Image
          source={require("../../assets/background.png")}
          {...props}
          style={[
            StyleSheet.absoluteFill,
            {
              width: flattenedStyle?.width,
              height: flattenedStyle?.height,
            },
            imageStyle,
          ]}
          ref={imageRef}
        />
        {children}
      </View>
    );
  }
}

export default ImageBackground;
