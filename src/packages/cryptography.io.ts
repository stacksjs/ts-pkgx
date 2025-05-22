/**
 * Generated from pkgx.dev data
 */
export const cryptographyioPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [
    "python.org>=3.11",
    "github.com/python-cffi/cffi^1.16",
    "openssl.org>=1.1",
  ] as const,
  versions: [
    "45.0.2",
    "45.0.1",
    "45.0.0",
    "44.0.3",
    "44.0.2",
    "44.0.1",
    "44.0.0",
    "43.0.3",
    "43.0.2",
    "43.0.1",
    "43.0.0",
    "42.0.8",
    "42.0.7",
    "42.0.6",
    "42.0.5",
    "42.0.4",
    "42.0.3",
    "42.0.2",
    "42.0.1",
  ] as const,
  name: "cryptography.io" as const,
  domain: "cryptography.io" as const,
  description: "Package information for cryptography.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/cryptography.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +cryptography.io -- $SHELL -i" as const,
}

export type CryptographyioPackage = typeof cryptographyioPackage
