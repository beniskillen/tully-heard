import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import People from "@/pages/People";
import { team } from "@/data/people";

describe("people page", () => {
  it("lists the current team and does not include Vaughan Campbell", () => {
    expect(team.map((person) => person.name)).toEqual([
      "John Tully",
      "Luke Heard",
      "Craig Butler",
      "Peter McLean",
      "Margaret Carew",
      "Norrelle Goldring",
      "Brian Dickinson",
    ]);

    render(
      <MemoryRouter>
        <People />
      </MemoryRouter>,
    );

    for (const name of team.map((person) => person.name)) {
      expect(screen.getByText(name)).toBeInTheDocument();
    }

    expect(screen.queryByText("Vaughan Campbell")).not.toBeInTheDocument();
    expect(screen.queryByText("Vaughn Campbell")).not.toBeInTheDocument();
    expect(screen.queryByText(/to be supplied/i)).not.toBeInTheDocument();
    expect(
      screen.getByText("Principal Consultant - Gaming Advisory & Customer Experience"),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link", { name: "Team" }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /get in touch/i }).length).toBeGreaterThan(1);
  });
});
