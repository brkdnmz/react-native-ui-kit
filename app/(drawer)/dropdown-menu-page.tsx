import { Button } from "@/components/button/button";
import { Column } from "@/components/column";
import {
  DropdownMenu,
  DropdownMenuProps,
} from "@/components/dropdown-menu/dropdown-menu";
import { Row } from "@/components/row";
import { Text } from "@/components/text";
import { useCallback, useState } from "react";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function DropdownMenuPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [anchoredAt, setAnchoredAt] =
    useState<DropdownMenuProps["anchoredAt"]>("left");
  const { styles } = useStyles(stylesheet);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <Column
      style={{
        flex: 1,
        alignItems: "center",
        gap: 10,
      }}
    >
      <Row style={{ alignItems: "center", gap: 5 }}>
        <Text>Anchored at</Text>

        <Button
          title="Left"
          disabled={anchoredAt === "left"}
          onPress={() => setAnchoredAt("left")}
          type="outlined"
        />

        <Button
          type="outlined"
          title="Right"
          disabled={anchoredAt === "right"}
          onPress={() => setAnchoredAt("right")}
        />
      </Row>

      <DropdownMenu
        anchor={
          <Button
            title="Dropdown Menu"
            type={isOpen ? "outlined" : "filled"}
            onPress={toggleMenu}
          />
        }
        anchoredAt={anchoredAt}
        isOpen={isOpen}
        onClose={toggleMenu}
        style={styles.dropdownMenu}
      >
        <Button
          title="Item 1"
          type="outlined"
          onPress={() => {
            console.log("Item 1");
            toggleMenu();
          }}
        />

        <Button
          title="Item 2"
          type="text"
          onPress={() => {
            console.log("Item 2");
            toggleMenu();
          }}
        />

        <Button
          title="Item 3"
          type="text"
          onPress={() => {
            console.log("Item 3");
            toggleMenu();
          }}
        />
      </DropdownMenu>

      <Text>Some stuff</Text>
    </Column>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  dropdownMenu: {
    alignItems: "stretch",
    width: 200,
    borderRadius: 8,
    padding: 10,
    // shadowColor: theme.colors.outline,
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
}));
