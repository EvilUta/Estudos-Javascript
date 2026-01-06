import { normalizeImageUrl, normalizeTags, validatePostInput } from "./postValidation";

describe("postValidation", () => {
  test("normalizeTags trims, lowercases and uniques", () => {
    expect(normalizeTags(" React, firebase ,react,  FireBase  ")).toEqual([
      "react",
      "firebase",
    ]);
  });

  test("normalizeImageUrl prefixes https:// when missing", () => {
    expect(normalizeImageUrl("example.com/img.png")).toBe("https://example.com/img.png");
  });

  test("validatePostInput requires imageUrl and tags", () => {
    expect(
      validatePostInput({
        title: "t",
        content: "c",
        imageUrl: "",
        tags: [],
      }).ok
    ).toBe(false);

    expect(
      validatePostInput({
        title: "t",
        content: "c",
        imageUrl: "https://example.com/img.png",
        tags: ["react"],
      }).ok
    ).toBe(true);
  });
});

