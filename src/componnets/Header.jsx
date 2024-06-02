"use client";
import React from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";

const Header=()=> {
  return (
    <Navbar fluid rounded className="bg-inherit pt-10 pb-20 px-0">
      <Navbar.Brand href="#">
        <img src="/Logo.png" alt="Akkaas Logo" />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="/Dropdown.png" />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Akkaas</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
export default Header;