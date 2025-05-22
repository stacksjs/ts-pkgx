/**
 * Generated from pkgx.dev data
 */
export const libusbinfoPackage = {
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [
    "1.0.28",
    "1.0.27",
    "1.0.26",
  ] as const,
  name: "libusb.info" as const,
  domain: "libusb.info" as const,
  description: "Package information for libusb.info" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libusb.info/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +libusb.info -- $SHELL -i" as const,
}

export type LibusbinfoPackage = typeof libusbinfoPackage
