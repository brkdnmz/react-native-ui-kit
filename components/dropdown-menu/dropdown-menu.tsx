import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { Dimensions, View, ViewProps } from "react-native";
import { Portal } from "react-native-paper";
import { Backdrop } from "./backdrop";
import { DropdownMenuContainer } from "./dropdown-menu-container";

export type DropdownMenuProps = ViewProps & {
  anchor: React.ReactNode;
  anchoredAt?: "left" | "right";
  isOpen?: boolean;
  onClose: () => void;
};

export function DropdownMenu({
  anchor,
  anchoredAt = "left",
  isOpen,
  onClose,
  ...props
}: DropdownMenuProps) {
  const [windowDimensions, setWindowDimensions] = useState(
    Dimensions.get("window")
  );
  const [containerLayout, setContainerLayout] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const containerRef = useRef<View>(null);

  const onLayoutChange = useCallback(() => {
    containerRef.current?.measure((x, y, width, height, pageX, pageY) => {
      if (
        containerLayout.x !== pageX ||
        containerLayout.y !== pageY ||
        containerLayout.width !== width ||
        containerLayout.height !== height
      )
        setContainerLayout({ x: pageX, y: pageY, width, height });
    });
  }, [containerLayout]);

  useLayoutEffect(() => {
    onLayoutChange();
  });

  useEffect(() => {
    const listener = Dimensions.addEventListener("change", ({ window }) => {
      setWindowDimensions(window);
      onLayoutChange();
    });
    return () => {
      listener.remove();
    };
  }, [onLayoutChange]);

  return (
    <View
      ref={containerRef}
      onLayout={onLayoutChange}
    >
      {anchor}

      <Portal>
        {isOpen && (
          <>
            <Backdrop onPress={onClose} />

            <DropdownMenuContainer
              {...props}
              style={[
                {
                  position: "absolute",
                  top: containerLayout.y + containerLayout.height,
                  minWidth: containerLayout.width,
                },
                anchoredAt === "right" && {
                  right:
                    windowDimensions.width -
                    (containerLayout.x + containerLayout.width),
                },
                anchoredAt === "left" && {
                  left: containerLayout.x,
                },
                props.style,
              ]}
            />
          </>
        )}
      </Portal>
    </View>
  );
}
