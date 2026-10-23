import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { ServicesSection } from "./ServicesSection";

describe("ServicesSection", () => {
  it("shows five principal services and the specialist consulting row", () => {
    render(
      <MemoryRouter>
        <ServicesSection />
      </MemoryRouter>,
    );

    expect(
      screen.getByRole("heading", { name: "Principal services and specialist consulting." }),
    ).toBeInTheDocument();
    expect(screen.getByText("Strategic Planning & Business Performance")).toBeInTheDocument();
    expect(screen.getByText("Financial Modelling & Commercial Feasibility")).toBeInTheDocument();
    expect(screen.getByText("Master Planning & Development Strategy")).toBeInTheDocument();
    expect(screen.getByText("Gaming Strategy & Optimisation")).toBeInTheDocument();
    expect(screen.getByText("Strategy Implementation & Advisory")).toBeInTheDocument();

    expect(screen.getByText("Specialist consulting")).toBeInTheDocument();
    expect(screen.getByText("Customer Experience & Hospitality Advisory")).toBeInTheDocument();
    expect(screen.getByText("Led by Craig Butler")).toBeInTheDocument();
    expect(screen.getByText("Leadership & Culture")).toBeInTheDocument();
    expect(screen.getByText("Led by Brian Dickinson")).toBeInTheDocument();
    expect(screen.getByText("Market Research & Consumer Insights")).toBeInTheDocument();
    expect(screen.getByText("Led by Norrelle Goldring")).toBeInTheDocument();
    expect(screen.getByText("EGM Brokerage")).toBeInTheDocument();
    expect(screen.getByText("Led by Margaret Carew")).toBeInTheDocument();
    expect(screen.getByText("Governance & Amalgamations")).toBeInTheDocument();
    expect(screen.getByText("Led by Peter McLean")).toBeInTheDocument();
    expect(screen.queryByText("Board Advisory and Decision Support")).not.toBeInTheDocument();
  });
});
