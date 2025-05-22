/**
 * Generated from pkgx.dev data
 */
export const openldaporgPackage = {
  programs: [
    "ldapcompare",
    "ldapdelete",
    "ldapexop",
    "ldapmodify",
    "ldapmodrdn",
    "ldappasswd",
    "ldapsearch",
    "ldapurl",
    "ldapvc",
    "ldapwhoami",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^1.1",
    "linuxgithub.com/util-linux/util-linux",
    "github.com/util-linux/util-linux",
  ] as const,
  versions: [
    "2.6.9",
    "2.6.8",
    "2.6.7",
    "2.6.6",
    "2.6.5",
    "2.6.4",
    "2.5.19",
    "2.5.18",
    "2.5.17",
    "2.5.16",
    "2.5.15",
  ] as const,
  aliases: [
    "ldap",
  ] as const,
  name: "openldap.org" as const,
  domain: "openldap.org" as const,
  description: "Package information for openldap.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/openldap.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +openldap.org -- $SHELL -i" as const,
}

export type OpenldaporgPackage = typeof openldaporgPackage
