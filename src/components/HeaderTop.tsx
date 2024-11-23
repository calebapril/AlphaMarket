"use client";

import React, { MouseEvent } from "react";
import { Button, Menu, MenuItem, Typography, IconButton } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

const HeaderTop: React.FC = () => {
  const [currencyAnchorEl, setCurrencyAnchorEl] = React.useState<HTMLElement | null>(null);
  const [languageAnchorEl, setLanguageAnchorEl] = React.useState<HTMLElement | null>(null);

  const handleMenuClick = (setAnchor: React.Dispatch<React.SetStateAction<HTMLElement | null>>) => 
    (event: MouseEvent<HTMLElement>) => {
      setAnchor(event.currentTarget);
    };

  const handleMenuClose = () => {
    setCurrencyAnchorEl(null);
    setLanguageAnchorEl(null);
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-4 bg-white border-b border-gray-200">
      {/* Left Section */}
      <div className="flex items-center mb-2 md:mb-0">
        <PhoneIcon className="text-blue-500" />
        <Typography variant="body2" className="ml-2 text-gray-700">
          +234xxxxxxxxxx
        </Typography>
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Currency Selector */}
        <div>
          <Button
            onClick={handleMenuClick(setCurrencyAnchorEl)}
            endIcon={<KeyboardArrowDownIcon />}
            className="text-gray-700 normal-case"
          >
            USD $
          </Button>
          <Menu
            anchorEl={currencyAnchorEl}
            open={Boolean(currencyAnchorEl)}
            onClose={handleMenuClose}
          >
            {["USD $", "EUR €", "GBP £", "NGN ₦"].map((currency) => (
              <MenuItem key={currency} onClick={handleMenuClose}>
                {currency}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Language Selector */}
        <div>
          <Button
            onClick={handleMenuClick(setLanguageAnchorEl)}
            endIcon={<KeyboardArrowDownIcon />}
            className="text-gray-700 normal-case"
          >
            English
          </Button>
          <Menu
            anchorEl={languageAnchorEl}
            open={Boolean(languageAnchorEl)}
            onClose={handleMenuClose}
          >
            {["English", "Spanish", "French"].map((language) => (
              <MenuItem key={language} onClick={handleMenuClose}>
                {language}
              </MenuItem>
            ))}
          </Menu>
        </div>

        {/* Flag Icon */}
        <IconButton aria-label="US Flag">
        <picture>
          <img
            src="https://placehold.co/20x20"
            alt="Flag of the United States"
            className="w-5 h-5"
          />
        </picture>
        </IconButton>

        {/* Vendor Link */}
        <Typography
          variant="body2"
          component="a"
          href="#"
          className="text-blue-500 hover:underline"
        >
          Become A Vendor
        </Typography>
      </div>
    </div>
  );
};

export default HeaderTop;
