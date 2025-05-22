/**
 * Generated from pkgx.dev data
 */
export const opensslorgPackage = {
  programs: [
    "openssl",
    "c_rehash",
  ] as const,
  companions: [] as const,
  dependencies: [
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "3.5.0",
    "3.4.0",
    "3.3.2",
    "3.3.1",
    "3.3.0",
    "3.2.3",
    "3.2.2",
    "3.2.1",
    "3.2.0",
    "3.1.7",
    "3.1.6",
    "3.1.5",
    "3.1.4",
    "3.1.3",
    "3.1.2",
    "3.1.1",
    "3.1.0",
    "3.0.15",
    "3.0.14",
    "3.0.13",
    "3.0.12",
    "3.0.11",
    "3.0.10",
    "3.0.9",
    "3.0.0",
    "1.1.1w",
    "1.1.1v",
    "1.1.1u",
    "1.1.1t",
    "1.1.1s",
  ] as const,
  name: "openssl.org" as const,
  domain: "openssl.org" as const,
  description: "Package information for openssl.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/openssl.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +openssl.org -- $SHELL -i" as const,
}

export type OpensslorgPackage = typeof opensslorgPackage
