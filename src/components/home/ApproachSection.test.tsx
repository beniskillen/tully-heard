import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ApproachSection } from "./ApproachSection";

describe("ApproachSection", () => {
  it("uses John's five-step approach", () => {
    render(<ApproachSection />);

    expect(screen.getByText("Our Approach")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Helping clubs plan for the future and make better investment decisions.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "We combine industry experience, market insight and financial analysis to help clubs understand their opportunities, determine their future direction, and make informed decisions about where to invest. We specialise in strategic planning, gaming performance, financial modelling, capital investment, and customer experience – helping Boards and management make informed decisions about the future of their businesses.",
      ),
    ).toBeInTheDocument();

    expect(screen.getByText("Understand the Business")).toBeInTheDocument();
    expect(screen.getByText("Identify the Opportunities")).toBeInTheDocument();
    expect(screen.getByText("Test the Options")).toBeInTheDocument();
    expect(screen.getByText("Define the Strategy")).toBeInTheDocument();
    expect(screen.getByText("Support Implementation")).toBeInTheDocument();
    expect(screen.queryByText("Model the outcomes")).not.toBeInTheDocument();
    expect(screen.queryByText("How We Deliver Measured Growth")).not.toBeInTheDocument();
  });
});
