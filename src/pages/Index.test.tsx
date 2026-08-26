import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Index from "@/pages/Index";

describe("homepage", () => {
  it("keeps John's copy and omits unapproved commercial figures", () => {
    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(screen.getByText("Our Approach")).toBeInTheDocument();
    expect(screen.getByText("Understand the opportunity")).toBeInTheDocument();
    expect(screen.getByText("Andrew Hoschke")).toBeInTheDocument();
    expect(screen.getByText("View full team")).toBeInTheDocument();
    expect(screen.getAllByText(/Get in Touch/i).length).toBeGreaterThan(0);

    expect(screen.queryByText(/profitability/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/200%/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Million in capital advised/i)).not.toBeInTheDocument();
    expect(screen.queryByText("Board Advisory and Decision Support")).not.toBeInTheDocument();
  });
});
