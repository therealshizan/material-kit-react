import React from "react";

import styles from "./dashboard-view.module.css";

import UserProfile from "../user-profile/user-profile";

import NavTabs from "../nav-tabs/nav-tabs";

import RevenueSummary from "../summaries/revenue-summary/revenue-summary";

import Summary from "../summaries/summary/summary";

// ---------------------------------------------------------------------------------

const BookingsSummary = [
  { title: "Today", count: 10 },
  { title: "Yesterday", count: 22 },
  { title: "Weekly", count: 47 },
  { title: "Monthly", count: 89 },
];

const DriversSummary = [
  { title: "Total", count: 5 },
  { title: "Available", count: 2 },
];

const CarsSummary = [
  { title: "Total", count: 5 },
  { title: "Available", count: 2 },
];

// ---------------------------------------------------------------------------------

export default function DashboardView() {
  return (
    <div className={styles.section}>
      <UserProfile />
      <NavTabs />
      <RevenueSummary />
      <Summary title={"Bookings Summary"} data={BookingsSummary} />
      <Summary title={"Drivers Summary"} data={DriversSummary} />
      <Summary title={"Cars Summary"} data={CarsSummary} />
    </div>
  );
}
