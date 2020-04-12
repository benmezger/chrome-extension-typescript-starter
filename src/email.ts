import {parse} from 'tldjs';
import {IURL, IEmailAddress} from "./interfaces";

function splitEmail(address: IEmailAddress): string[]{
  return address.email.split("@");
}

function validateEmail(email: string): boolean {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

function createEmailTag(url: IURL, defaultVal?: string): string{
  const parsedUrl = parse(url.url);
  if (parsedUrl.isValid & parsedUrl.tldExists){
    return parsedUrl.domain.split(".")[0];
  }
  return defaultVal || "unknown";
}

export {createEmailTag, splitEmail, validateEmail};
