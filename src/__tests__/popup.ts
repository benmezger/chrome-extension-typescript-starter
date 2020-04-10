import {splitEmail} from "../popup";

test('splitEmail("me@benmezger.nl") => ["me", "benmezger.nl"]', () => {
    expect(splitEmail("me@benmezger.nl")).toStrictEqual(["me", "benmezger.nl"]);
});
