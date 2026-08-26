import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ServicesSection } from "./ServicesSection";

describe("ServicesSection", () => {
  it("shows five core services and the specialist advisory row", () => {
    render(<ServicesSection />);

    expect(
      screen.getByRole("heading", { name: "Practical strategy for complex decisions." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Strategy & Commercial Planning")).toBeInTheDocument();
    expect(screen.getByText("Investment, Feasibility & Financial Modelling")).toBeInTheDocument();
    expect(screen.getByText("Venue Performance & Optimisation")).toBeInTheDocument();
    expect(screen.getByText("Development & Implementation")).toBeInTheDocument();
    expect(screen.getByText("Gaming Strategy & Optimisation")).toBeInTheDocument();

    expect(screen.getByText("Specialist Advisory Services")).toBeInTheDocument();
    expect(screen.getByText("Led by Norrelle Goldring")).toBeInTheDocument();
    expect(screen.getByText("Led by Brian Dickinson")).toBeInTheDocument();
    expect(screen.getByText("Led by Margaret Carew")).toBeInTheDocument();
    expect(screen.queryByText("Board Advisory and Decision Support")).not.toBeInTheDocument();
  });
});
