import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import Animated, {
  useSharedValue,
  withSpring,
  useAnimatedStyle,
} from 'react-native-reanimated';
import LinearGradient, {
  LinearGradientProps,
} from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from '../theme/styles';

type IconButtonProps = {
  icon: string;
  size: number;
  color?: string;
  children?: React.ReactNode;
  onPress: () => void;
  disabled?: boolean;
  animated?: boolean;
  gradient?: LinearGradientProps;
  style?: ViewStyle | ViewStyle[];
};

const AnimatedIcon = Animated.createAnimatedComponent(Icon);
const AnimatedTouchableOpacity =
  Animated.createAnimatedComponent(TouchableOpacity);

function IconButton({
  icon,
  color,
  size = 28,
  children,
  onPress,
  disabled,
  animated,
  gradient,
  style,
}: IconButtonProps): React.JSX.Element {
  const rotate = useSharedValue(0);

  const handlePress = () => {
    rotate.value = withSpring(rotate.value === 0 ? 360 : 0);
    onPress();
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: `${rotate.value}deg`}],
    };
  });

  if (!color) {
    color = theme.colors.onBackground;
  }

  return (
    <AnimatedTouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      style={[
        styles.button,
        disabled && styles.disabled,
        animated && animatedStyle,
        style,
      ]}>
      {gradient && gradient.colors && (
        <LinearGradient
          colors={gradient?.colors}
          start={gradient?.start}
          end={gradient?.end}
          style={styles.gradient}
        />
      )}
      <AnimatedIcon
        name={icon}
        size={size}
        color={color}
        style={animated && animatedStyle}
      />
      {children}
    </AnimatedTouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 20,
    overflow: 'hidden',
  },
  disabled: {
    opacity: 0.5,
  },
  gradient: {
    ...StyleSheet.absoluteFillObject,
  },
});

export default IconButton;
