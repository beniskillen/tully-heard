import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CaseStudies from "@/pages/CaseStudies";
import { featuredCases, moreWork } from "@/data/cases";

describe("case studies page", () => {
  it("retains featured-case stats for client approval", async () => {
    expect(featuredCases.some((item) => item.stats.some((stat) => stat.value === "200%"))).toBe(
      true,
    );
    expect(
      featuredCases.some((item) => item.stats.some((stat) => stat.value === "36,000+")),
    ).toBe(true);

    render(
      <MemoryRouter initialEntries={["/case-studies#chatswood-rsl"]}>
        <CaseStudies />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByText("Increase in visitation")).toBeInTheDocument();
    });
    expect(moreWork).toHaveLength(9);
    expect(screen.getByText("Oak Point Golf Club")).toBeInTheDocument();
    expect(screen.getByText("Cabra Vale Diggers Club Novotel")).toBeInTheDocument();
    expect(screen.getByText("Club Mosman / The Fernery")).toBeInTheDocument();
  });
});
