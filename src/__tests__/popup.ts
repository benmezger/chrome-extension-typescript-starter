import {splitEmail, createEmailTag} from "../email";

test('splitEmail("me@benmezger.nl") => ["me", "benmezger.nl"]', () => {
  expect(splitEmail({email: "me@benmezger.nl", host: null}))
    .toStrictEqual(["me", "benmezger.nl"]);
});

test('splitEmail({email: "benmezger.nl", host: null}) => ["benmezger.nl"]', () => {
  expect(splitEmail({email: "benmezger.nl", host: null}))
    .toStrictEqual(["benmezger.nl"]);
});


test('splitEmail({email: "", host: null}) => [""]', () => {
  expect(splitEmail({email: "", host: null}))
    .toStrictEqual([""]);
});


test('createEmailtag({url: "www.benmezger.nl", sld: null}, null) => [""]', () => {
  expect(createEmailTag({url: "www.benmezger.nl", sld: null}))
    .toStrictEqual("benmezger");
});
