import { Button, ButtonProps } from "@/components/button/button";
import { Column } from "@/components/column";
import { Row } from "@/components/row";
import { Select } from "@/components/select/select";
import { Text } from "@/components/text";
import React, { useState } from "react";

export default function ButtonsPage() {
  const [buttonType, setButtonType] = useState<ButtonProps["type"]>();
  const [buttonSize, setButtonSize] = useState<ButtonProps["size"]>();
  const [buttonRoundness, setButtonRoundness] =
    useState<ButtonProps["rounded"]>();

  return (
    <Column style={{ gap: 20 }}>
      <Column style={{ alignItems: "center", gap: 10 }}>
        <Text>Select properties:</Text>

        <Row
          style={{ justifyContent: "center", alignItems: "center", gap: 10 }}
        >
          <ButtonTypeSelector
            selectedType={buttonType}
            onSelect={(type) => {
              setButtonType(type);
            }}
          />

          <ButtonSizeSelector
            selectedSize={buttonSize}
            onSelect={(size) => {
              setButtonSize(size);
            }}
          />

          <ButtonRoundnessSelector
            selectedRoundness={buttonRoundness}
            onSelect={(roundess) => {
              setButtonRoundness(roundess);
            }}
          />
        </Row>
      </Column>

      <Row style={{ justifyContent: "center", gap: 10 }}>
        <Button
          title="Enabled"
          type={buttonType}
          size={buttonSize}
          rounded={buttonRoundness}
        />

        <Button
          title="Disabled"
          type={buttonType}
          size={buttonSize}
          rounded={buttonRoundness}
          disabled
        />
      </Row>
    </Column>
  );
}

function ButtonTypeSelector({
  selectedType,
  onSelect,
}: {
  selectedType?: ButtonProps["type"];
  onSelect: (type: ButtonProps["type"]) => void;
}) {
  const buttonTypes = [
    "filled",
    "outlined",
    "text",
  ] satisfies ButtonProps["type"][];

  return (
    <Select
      value={selectedType ? `type: ${selectedType}` : "Select type"}
      options={buttonTypes}
      onSelect={(buttonType) => onSelect(buttonType)}
    />
  );
}

function ButtonSizeSelector({
  selectedSize,
  onSelect,
}: {
  selectedSize?: ButtonProps["size"];
  onSelect: (size: ButtonProps["size"]) => void;
}) {
  const buttonSizes = ["xs", "sm", "md"] satisfies ButtonProps["size"][];

  return (
    <Select
      value={selectedSize ? `size: ${selectedSize}` : "Select size"}
      options={buttonSizes}
      onSelect={(buttonSize) => onSelect(buttonSize)}
    />
  );
}

function ButtonRoundnessSelector({
  selectedRoundness,
  onSelect,
}: {
  selectedRoundness?: ButtonProps["rounded"];
  onSelect: (roundness: ButtonProps["rounded"]) => void;
}) {
  const buttonRoundnesses = [
    "none",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "full",
  ] satisfies ButtonProps["rounded"][];

  return (
    <Select
      value={
        selectedRoundness
          ? `roundness: ${selectedRoundness}`
          : "Select roundness"
      }
      options={buttonRoundnesses}
      onSelect={(buttonRoundness) => onSelect(buttonRoundness)}
    />
  );
}
