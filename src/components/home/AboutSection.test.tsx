import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AboutSection } from "./AboutSection";

describe("AboutSection", () => {
  it("lists the current team and does not include Vaughan Campbell", () => {
    render(<AboutSection />);

    expect(screen.getByText("People")).toBeInTheDocument();
    for (const name of [
      "John Tully",
      "Luke Heard",
      "Peter McLean",
      "Craig Butler",
      "Norrelle Goldring",
      "Margaret Carew",
      "Brian Dickinson",
    ]) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }

    expect(screen.queryByText("Vaughan Campbell")).not.toBeInTheDocument();
    expect(screen.queryByText("Vaughn Campbell")).not.toBeInTheDocument();
    expect(screen.getAllByText(/to be supplied/i).length).toBeGreaterThan(0);
  });
});
