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
      "Peter McLean",
      "Craig Butler",
      "Norrelle Goldring",
      "Margaret Carew",
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
    expect(screen.getAllByText(/to be supplied/i).length).toBeGreaterThan(0);
  });
});
