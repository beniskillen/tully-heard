import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Index from "@/pages/Index";

describe("homepage", () => {
  it("uses John's latest homepage positioning and omits unapproved figures", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/independent strategic and commercial advice/i),
    ).toBeInTheDocument();
    expect(screen.getAllByText(/We specialise in strategic planning/i)).toHaveLength(1);
    expect(screen.getByText("Our Approach")).toBeInTheDocument();
    expect(screen.getByText("Understand the Business")).toBeInTheDocument();
    expect(screen.getByText("Support Implementation")).toBeInTheDocument();
    expect(screen.queryByText("Model the outcomes")).not.toBeInTheDocument();
    expect(screen.getByText("Our Expertise")).toBeInTheDocument();
    expect(screen.getByText("Strategic Planning & Business Performance")).toBeInTheDocument();
    expect(screen.queryByText("Customer Experience & Hospitality Advisory")).not.toBeInTheDocument();
    expect(screen.getByText("Chatswood RSL / Yogi’s Sports Bar")).toBeInTheDocument();
    expect(
      screen.getByText(/Repositioning the venue to attract new markets and drive business growth/i),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Directors John Tully and Luke Heard bring together/i),
    ).toBeInTheDocument();
    expect(screen.queryByText("Define the opportunity")).not.toBeInTheDocument();
    expect(screen.getByText("View full team")).toBeInTheDocument();
    expect(screen.getAllByText(/Get in Touch/i).length).toBeGreaterThan(0);

    expect(screen.queryByText("Andrew Hoschke")).not.toBeInTheDocument();
    expect(screen.queryByText("Mark Condi")).not.toBeInTheDocument();
    expect(screen.queryByText(/200%/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Million in capital advised/i)).not.toBeInTheDocument();
    expect(screen.queryByText("Board Advisory and Decision Support")).not.toBeInTheDocument();
  });
});
