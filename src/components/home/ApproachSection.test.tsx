import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ApproachSection } from "./ApproachSection";

describe("ApproachSection", () => {
  it("uses John's approved approach copy and six engagement stages", () => {
    render(<ApproachSection />);

    expect(screen.getByText("Our Approach")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "We help venues move from uncertainty to a clear way forward.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "TH combines deep industry experience, commercial analysis and strategic insight to help venues make better decisions, invest with confidence and achieve sustainable growth.",
      ),
    ).toBeInTheDocument();

    expect(screen.getByText("Understand the opportunity")).toBeInTheDocument();
    expect(screen.getByText("Define the direction")).toBeInTheDocument();
    expect(screen.getByText("Test the options")).toBeInTheDocument();
    expect(screen.getByText("Model the outcomes")).toBeInTheDocument();
    expect(screen.getByText("Recommend the strategy")).toBeInTheDocument();
    expect(screen.getByText("Support implementation")).toBeInTheDocument();
    expect(screen.queryByText("How We Deliver Measured Growth")).not.toBeInTheDocument();
  });
});
