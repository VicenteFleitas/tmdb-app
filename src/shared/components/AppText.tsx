import { Text, TextProps } from 'react-native';

import { colors, typography } from '../../app/theme';

type AppTextProps = TextProps & {
  variant?: keyof typeof typography;
  color?: keyof typeof colors;
};

export function AppText({
  variant = 'body',
  color = 'text',
  style,
  ...props
}: AppTextProps) {
  return (
    <Text
      {...props}
      style={[typography[variant], { color: colors[color] }, style]}
    />
  );
}
