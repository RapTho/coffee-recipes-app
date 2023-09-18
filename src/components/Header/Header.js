import React from "react";
import {
  Header,
  HeaderContainer,
  HeaderName,
  HeaderNavigation,
  HeaderMenuButton,
  HeaderMenuItem,
  SkipToContent,
  SideNav,
  SideNavItems,
  HeaderSideNavItems,
} from "@carbon/react";
import Link from "next/link";

export default function TutorialHeader() {
  return (
    <HeaderContainer
      render={({ isSideNavExpanded, onClickSideNavExpand }) => (
        <Header aria-label="Coffee recipes">
          <SkipToContent />
          <HeaderMenuButton
            aria-label="Open menu"
            onClick={onClickSideNavExpand}
            isActive={isSideNavExpanded}
          />
          <HeaderName as={Link} href="/" prefix={null}>
            Coffee recipes
          </HeaderName>
          <HeaderNavigation aria-label="Coffee recipes">
            <HeaderMenuItem as={Link} href="/add">
              Add recipe
            </HeaderMenuItem>
          </HeaderNavigation>
          <SideNav
            aria-label="Side navigation"
            expanded={isSideNavExpanded}
            isPersistent={false}
          >
            <SideNavItems>
              <HeaderSideNavItems>
                <HeaderMenuItem as={Link} href="/add">
                  Add recipe
                </HeaderMenuItem>
              </HeaderSideNavItems>
            </SideNavItems>
          </SideNav>
        </Header>
      )}
    />
  );
}
