import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export const Dropdown = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>Open</DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
          <DropdownMenu.Item>Item</DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
