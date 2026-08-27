import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProofSection } from "./ProofSection";

describe("ProofSection", () => {
  it("uses attributed excerpts and omits unapproved commercial figures", () => {
    render(<ProofSection />);

    expect(screen.getByText("Andrew Hoschke")).toBeInTheDocument();
    expect(screen.getByText(/Chief Executive Officer, Chatswood RSL Club/)).toBeInTheDocument();
    expect(
      screen.getByText(/trusted advisers to both myself and the Board/),
    ).toBeInTheDocument();

    expect(screen.getByText("Mark Condi")).toBeInTheDocument();
    expect(screen.getByText(/Former Chief Executive Officer, Bankstown Sports/)).toBeInTheDocument();
    expect(screen.getByText(/clarity around our strategy before committing significant capital/)).toBeInTheDocument();

    expect(screen.getByAltText("Andrew Hoschke")).toHaveAttribute(
      "src",
      expect.stringContaining("ah-headshot.png"),
    );
    expect(screen.getByAltText("Mark Condi")).toHaveAttribute(
      "src",
      expect.stringContaining("mc-headshot.jpg"),
    );
    expect(screen.getByRole("link", { name: "Mark Condi on LinkedIn" })).toHaveAttribute(
      "href",
      "https://au.linkedin.com/in/mark-condi-bba75430",
    );
    expect(screen.queryByRole("link", { name: /Andrew Hoschke/ })).not.toBeInTheDocument();

    expect(screen.queryByText(/profitability/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/200%/)).not.toBeInTheDocument();
  });

  it("keeps unapproved figures off compact homepage excerpts", () => {
    render(<ProofSection compact />);

    expect(screen.getByText("Andrew Hoschke")).toBeInTheDocument();
    expect(screen.getByText("Mark Condi")).toBeInTheDocument();
    expect(screen.queryByText(/profitability/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/200%/)).not.toBeInTheDocument();
  });
});
