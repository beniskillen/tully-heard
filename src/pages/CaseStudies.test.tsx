import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import CaseStudies from "@/pages/CaseStudies";
import { featuredCases, moreWork } from "@/data/cases";

describe("case studies page", () => {
  it("leads with Yogi's, keeps the stories general, and places references at the end", async () => {
    expect(featuredCases.map((item) => item.id)).toEqual([
      "chatswood-rsl",
      "gosford-rsl",
      "shoalhaven",
      "club-mudgee",
      "bankstown",
    ]);
    expect(featuredCases.some((item) => /doylo|ready/i.test(item.title))).toBe(false);

    render(
      <MemoryRouter initialEntries={["/case-studies#chatswood-rsl"]}>
        <CaseStudies />
      </MemoryRouter>,
    );

    await waitFor(() => {
      expect(screen.getByRole("heading", { name: "Chatswood RSL / Yogi’s Sports Bar" })).toBeInTheDocument();
    expect(
      screen.getByText(/delivered strong commercial results/i),
    ).toBeInTheDocument();
    });
    expect(screen.getByText("Gosford RSL")).toBeInTheDocument();
    expect(screen.queryByText(/The Doylo/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Ready’s Bar/)).not.toBeInTheDocument();
    expect(screen.queryByText("Challenge")).not.toBeInTheDocument();
    expect(screen.queryByText("Proof points")).not.toBeInTheDocument();
    expect(screen.queryByText(/200%/)).not.toBeInTheDocument();
    expect(screen.queryByText(/36,000\+/)).not.toBeInTheDocument();

    expect(moreWork).toHaveLength(9);
    expect(screen.getByText("Oak Point Golf Club")).toBeInTheDocument();
    expect(screen.getByText("Cabra Vale Diggers Club Novotel")).toBeInTheDocument();
    expect(screen.getByText("Club Mosman / The Fernery")).toBeInTheDocument();

    expect(screen.getByText("Andrew Hoschke")).toBeInTheDocument();
    expect(screen.getByText("Mark Condi")).toBeInTheDocument();
  });
});
