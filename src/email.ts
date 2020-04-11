import * as psl from 'psl';
import {IURL, IEmailAddress} from "./interfaces";

function splitEmail(address: IEmailAddress): string[]{
  return address.email.split("@");

}

function createEmailTag(url: IURL, defaultVal?: string): string{
    const tag: psl.ParsedDomain | psl.ParseError = psl.parse(url.url);
    if (tag.error){
        console.log(tag.error);
        return defaultVal || "undefined";
    }
    else {
        return tag['sld'];
    }
}

export {createEmailTag, splitEmail};
