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


test('createEmailtag({url: "www.benmezger.nl", sld: null}, null) => "benmezger"', () => {
  expect(createEmailTag({url: "www.benmezger.nl", sld: null}))
    .toStrictEqual("benmezger");
});

test('createEmailtag({url: "https://www.benmezger.nl", sld: null}, null) => "benmezger"', () => {
  expect(createEmailTag({url: "https://www.benmezger.nl", sld: null}))
    .toStrictEqual("benmezger");
});

test('createEmailtag({url: "https://www.blog.benmezger.nl", sld: null}, null) => "benmezger"', () => {
  expect(createEmailTag({url: "https://www.blog.benmezger.nl", sld: null}))
    .toStrictEqual("benmezger");
});

test('createEmailtag({url: "https://www.very.complex.url.benmezger.nl", sld: null}, null) => "benmezger"', () => {
  expect(createEmailTag({url: "https://www.very.complex.url.benmezger.nl", sld: null}))
    .toStrictEqual("benmezger");
});

test('createEmailtag({url: "https://very.complex.url.benmezger.nl", sld: null}, null) => "benmezger"', () => {
  expect(createEmailTag({url: "https://very.complex.url.benmezger.nl", sld: null}))
    .toStrictEqual("benmezger");
});

test('createEmailtag({url: "invalid.url", sld: null}, null) => "unknown"', () => {
  expect(createEmailTag({url: "invalid.url", sld: null}))
    .toStrictEqual("unknown");
});

test('createEmailtag({url: "", sld: null}, null) => "unknown"', () => {
  expect(createEmailTag({url: "invalid.url", sld: null}))
    .toStrictEqual("unknown");
});
