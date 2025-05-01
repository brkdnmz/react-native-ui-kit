import { Button } from "@/components/button/button";
import { Column } from "@/components/column";
import { DropdownMenu } from "@/components/dropdown-menu/dropdown-menu";
import { Text } from "@/components/text";
import { useState } from "react";
import { View } from "react-native";

export default function DropdownMenuPage() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("button press");

    setIsOpen((prev) => !prev);
  };

  return (
    <Column style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <View>
        <View style={{ zIndex: 100 }}>
          <Button
            title="Open menu"
            onPress={toggleMenu}
          />

          <DropdownMenu
            isOpen={isOpen}
            style={{ padding: 100, backgroundColor: "red" }}
          />
        </View>
      </View>

      <Text>Some stuff</Text>
    </Column>
  );
}
