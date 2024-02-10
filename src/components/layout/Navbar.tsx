import { Navbar as MatNavbar, Typography } from "@material-tailwind/react";

function Navbar() {
  return (
    <MatNavbar className="flex items-center gap-2 px-4 h-[60px] py-0 rounded-none shadow-lg shadow-black/10">
      <img src="/icons/logo.svg" className="w-7" />
      <Typography
        as="a"
        href="#"
        variant="h6"
        className="cursor-pointer py-1.5 text-gray-900"
      >
        DRIVEHUB
      </Typography>
    </MatNavbar>
  );
}

export default Navbar;
