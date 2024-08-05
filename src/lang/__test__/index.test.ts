import { getLocales } from "src/lang";
import es from "src/lang/es.json";
import en from "src/lang/en.json";

describe("i18n configuration test", () => {
  it("i18n key matching", () => {
    const esKeys = Object.keys(es).sort();
    const enKeys = Object.keys(en).sort();
    const locales = getLocales();
    expect(locales).toStrictEqual(["es", "en"]);
    expect(esKeys).toStrictEqual(enKeys);
    esKeys.forEach((key) => {
      expect(es[key as keyof typeof es]).toBeDefined();
      expect(en[key as keyof typeof en]).toBeDefined();
      expect(es[key as keyof typeof es]).not.toBe("");
      expect(en[key as keyof typeof en]).not.toBe("");
    });
  });
});
