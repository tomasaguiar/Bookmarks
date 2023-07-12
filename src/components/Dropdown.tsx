"use client";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

interface DropdownProps {
  title: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;

  items: [
    {
      label: string;
      value: string;
    }
  ];
}

export const Dropdown = (props: DropdownProps) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger className="w-[200px] h-[45px] bg-[#1C1C1C] border-[1px] border-[#3C3C3C] rounded-lg">
        {props.title}
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          {props.items.map((item) => (
            <DropdownMenu.Item
              key={item.value}
              onSelect={() =>
                props.onChange ? props.onChange(item.value) : null
              }
            >
              {item.label}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
