import {describe, expect, it} from "vitest";
import {getNthFibonacciNumber} from "./getNthFibonacciNumber";

describe("getNthFibonacciNumber", () => {
  it("should return the 7th fibonnaci number", () => {
    expect(getNthFibonacciNumber(7)).toEqual(13);
  });
});