import { describe, expect, it } from "vitest";
import { approvedClientNames, tickerClients } from "./clients";

describe("client lists", () => {
  it("keeps John's approved list unique and complete", () => {
    expect(approvedClientNames).toHaveLength(52);
    expect(new Set(approvedClientNames).size).toBe(52);
  });

  it("only ticks sourced organisations from the approved list", () => {
    const approved = new Set<string>(approvedClientNames);
    const ids = tickerClients.map((client) => client.id);

    expect(new Set(ids).size).toBe(ids.length);
    for (const client of tickerClients) {
      expect(approved.has(client.name)).toBe(true);
    }
  });
});
