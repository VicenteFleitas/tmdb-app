import { StyleSheet, TextInput } from 'react-native';

import { colors, radii, spacing } from '../../../../app/theme';

type SearchBarProps = {
  value: string;
  onChangeText: (text: string) => void;
};

export function SearchBar({ value, onChangeText }: SearchBarProps) {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder="Buscar películas..."
      placeholderTextColor={colors.mutedText}
      style={styles.input}
      accessibilityLabel="Buscar películas"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radii.md,
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    color: colors.text,
    backgroundColor: colors.surface,
  },
});
