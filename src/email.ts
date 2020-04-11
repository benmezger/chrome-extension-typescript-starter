import {parse} from 'tldjs';
import {IURL, IEmailAddress} from "./interfaces";

function splitEmail(address: IEmailAddress): string[]{
  return address.email.split("@");
}

function createEmailTag(url: IURL, defaultVal?: string): string{
  const parsedUrl = parse(url.url);
  if (parsedUrl.isValid & parsedUrl.tldExists){
    return parsedUrl.domain.split(".")[0];
  }
  return defaultVal || "unknown";
}

export {createEmailTag, splitEmail};
