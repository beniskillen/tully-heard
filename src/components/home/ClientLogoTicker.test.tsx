import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ClientLogoTicker } from "./ClientLogoTicker";
import { tickerClients } from "@/data/clients";

describe("ClientLogoTicker", () => {
  it("renders the trusted-by heading and loops client logos accessibly", () => {
    const { container } = render(<ClientLogoTicker />);

    expect(
      screen.getByText("Trusted by leading clubs and hospitality venues"),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("region", {
        name: "Trusted by leading clubs and hospitality venues",
      }),
    ).toBeInTheDocument();

    for (const client of tickerClients) {
      expect(screen.getByAltText(client.name)).toHaveAttribute("src", client.src);
    }

    const hiddenCopy = container.querySelector('ul[aria-hidden="true"]');
    expect(hiddenCopy).not.toBeNull();
    expect(hiddenCopy?.querySelectorAll("img")).toHaveLength(tickerClients.length);
  });

  it("does not invent placeholder client names", () => {
    render(<ClientLogoTicker />);
    expect(screen.queryByAltText("Merivale")).not.toBeInTheDocument();
    expect(screen.queryByAltText("Central Real Capital")).not.toBeInTheDocument();
  });
});
