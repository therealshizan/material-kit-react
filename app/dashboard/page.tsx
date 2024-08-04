import React from "react";

import styles from "./page.module.css";
import Navbar from "@/components/navbar/navbar";
import DashboardView from "@/sections/dashboard/view/dashboard.view";

export default function DashboardPage() {
  return (
    <div className="screen">
      <Navbar isDashboardPage title="XCars" />

      <DashboardView />
    </div>
  );
}
