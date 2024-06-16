import Drawer from "@mui/material/Drawer";
import { useState } from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { Button} from "@mui/material";
import { Link } from "react-router-dom";

export default function AnchorTemporaryDrawer() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Button onClick={() => setOpen(!open)} className="">
        <MenuRoundedIcon className="link" />
      </Button>
      <Drawer anchor={"right"} open={open} onClose={() => setOpen(!open)}>
        <div className="w-[40vh] bg-[#111] h-dvh p-6">
        <Link to={"/"}>
        <p className="link p-2">Home</p>
        </Link>
        <Link to={"/"}>
        <p className="link p-2">Compare</p>
        </Link>
        <Link to={"/"}>
        <p className="link p-2">Dashboard</p>
        </Link>
        </div>
      </Drawer>
    </div>
  );
}
