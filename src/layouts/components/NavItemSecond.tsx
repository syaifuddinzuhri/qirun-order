import { Box, Flex, Icon } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import { IconChevRight } from "@/assets/index";

import type { NavItemProps } from "../types";

const NavItemSecond: React.FC<NavItemProps> = ({
  icon,
  image,
  children,
  header,
  activePath,
  path = "#",
  child = [],
  open,
  ...rest
}) => {
  const router = useRouter();
  const [expand, setExpand] = useState<boolean>(false);
  // let active = activePath && activePath !== "/" ? router.asPath.includes(activePath) : false;
  let active = activePath && activePath !== "/" ? router.asPath === activePath : false;

  if (activePath === "/" && router.asPath === "/") {
    active = true;
  }

  const getBg = () => {
    if (header) return undefined;
    return active ? "rgba(255, 102, 51, 0.10)" : undefined;
  };

  const getColor = () => {
    if (header) return undefined;
    return active ? "primary.500" : "#26334D";
  };

  return (
    <>
      <Box cursor="pointer" onClick={() => (child.length !== 0 ? setExpand(!expand) : router.push(path))}>
        <Flex
          align={"center"}
          gap={open ? 3 : 1}
          py={2}
          px={2}
          borderRadius={8}
          role={"group"}
          cursor={header ? "default" : "pointer"}
          fontWeight={"medium"}
          pos={"relative"}
          transition={"all 0.3s ease"}
          bg={getBg()}
          color={getColor()}
          _hover={
            header
              ? undefined
              : {
                  bg: "rgba(255, 102, 51, 0.10)",
                  color: "primary.500",
                  " > svg > * ": {
                    fill: "#4299e1",
                  },
                  " > div > svg > * ": {
                    fill: "#4299e1 !important",
                  },
                }
          }
          css={{
            " > svg > * ": {
              fill: active ? "#4299e1" : "#26334D",
            },
            " > div > svg > * ": {
              fill: active ? "#4299e1 !important" : "#26334D !important",
            },
          }}
          {...rest}
        >
          {icon && (
            <Icon
              _groupHover={{
                color: "primary.500",
              }}
              as={icon}
            />
          )}
          {children}
          {child.length !== 0 && (
            <Box
              transform={expand ? "rotate(-90deg)" : "rotate(90deg)"}
              ml={open ? "auto" : 0}
              transition={"all 0.3s ease"}
              onClick={() => setExpand(!expand)}
            >
              <IconChevRight height={16} width={16} color={"#26334D"} />
            </Box>
          )}
        </Flex>
      </Box>
      {child.length !== 0 && (
        <Box pl={6} mt={-1} transition={"all 0.3s ease"} display={expand ? "block" : "none"}>
          {child.map(link => (
            <NavItemSecond
              fontSize={"sm"}
              key={link.name}
              icon={link.icon}
              image={link.image}
              header={link.header}
              activePath={link.activePath}
              path={link.path}
              child={link.child}
              open={open}
            >
              {open && <Box dangerouslySetInnerHTML={{ __html: link.name }} />}
            </NavItemSecond>
          ))}
        </Box>
      )}
    </>
  );
};

export default NavItemSecond;
