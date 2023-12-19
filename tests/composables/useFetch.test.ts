import { expect, test, vi, describe, beforeEach } from "vitest";
import { useFetch } from "../../src/composables/useFetch";

describe("useFetch flow", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  test("Request fails on HTTP error", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: false,
    });

    const { data, error, isLoading } = await useFetch("/something");

    expect(data.value).toStrictEqual(undefined);
    expect(error.value).toBe("Something went wrong");
    expect(isLoading.value).toStrictEqual(false);
  });

  test("Request passes correctly", async () => {
    global.fetch = vi.fn().mockResolvedValueOnce({
      ok: true,
      json: () => new Promise((resolve) => resolve({ test: "test" })),
    });

    const { data, error, isLoading } = await useFetch("/fff");

    expect(data.value).toStrictEqual({ test: "test" });
    expect(error.value).toStrictEqual(null);
    expect(isLoading.value).toStrictEqual(false);
  });
});
