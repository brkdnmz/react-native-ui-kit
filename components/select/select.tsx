import { useCallback, useState } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";
import { Button } from "../button/button";
import { DropdownMenu } from "../dropdown-menu/dropdown-menu";

export type SelectProps<TOption> = {
  value: string;
  options: TOption[];
  onSelect: (option: TOption) => void;
};

export function Select<TOption extends string>({
  value,
  options,
  onSelect,
}: SelectProps<TOption>) {
  const { styles } = useStyles(stylesheet);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = useCallback(() => {
    setIsMenuOpen(true);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  return (
    <DropdownMenu
      anchor={
        <Button
          title={value}
          onPress={openMenu}
        />
      }
      isOpen={isMenuOpen}
      onClose={closeMenu}
      style={styles.dropdownMenu}
    >
      {options.map((option) => (
        <Button
          key={option}
          title={option}
          type="text"
          onPress={() => {
            onSelect(option);
            closeMenu();
          }}
        />
      ))}
    </DropdownMenu>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  dropdownMenu: {
    maxHeight: 200,
    borderRadius: theme.roundness.lg,
    overflow: "hidden",
  },
}));
