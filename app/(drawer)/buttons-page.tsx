import { Button, ButtonProps } from "@/components/button/button";
import { Column } from "@/components/column";
import React from "react";
import { ScrollView } from "react-native";

export default function ButtonsPage() {
  const buttonTypes: ButtonProps["type"][] = ["filled", "outlined", "text"];
  const buttonSizes: ButtonProps["size"][] = ["xs", "sm", "md"];

  const buttonRoundnesses: ButtonProps["rounded"][] = [
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
  ];

  return (
    <>
      <Column style={{ gap: 20 }}>
        {buttonTypes.map((type) => (
          <ScrollView
            key={type}
            horizontal
            contentContainerStyle={{
              minWidth: "100%",
              justifyContent: "center",
              gap: 6,
            }}
          >
            {buttonRoundnesses.map((roundness) => (
              <Column
                key={roundness}
                style={{
                  gap: 12,
                  alignItems: "center",
                }}
              >
                {buttonSizes.map((size) => (
                  <React.Fragment key={size}>
                    <Button
                      type={type}
                      size={size}
                      rounded={roundness}
                      title={`${type}\nsize ${size}\nrounded ${roundness}`}
                    />

                    <Button
                      type={type}
                      size={size}
                      rounded={roundness}
                      disabled
                      title={`${type}\nsize ${size}\nrounded ${roundness}\ndisabled`}
                    />
                  </React.Fragment>
                ))}
              </Column>
            ))}
          </ScrollView>
        ))}
      </Column>
    </>
  );
}
