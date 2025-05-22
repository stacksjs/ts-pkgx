export const libimobiledeviceorgPackage = {
  name: "idevicedate" as const,
  domain: "libimobiledevice.org" as const,
  description: "A cross-platform protocol library to communicate with iOS devices" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/libimobiledevice.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) idevicedate" as const,
  programs: [
    "idevicedate",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libimobiledevice.org/libplist^2.4",
    "gnu.org/libtasn1^4.19",
    "libimobiledevice.org/libusbmuxd^2",
    "openssl.org^1.1",
  ] as const,
  versions: [
    "1.3.0",
  ] as const,
  fullPath: "libimobiledevice.org" as const,
  aliases: [
    "idevicedate",
  ] as const,
}

export type LibimobiledeviceorgPackage = typeof libimobiledeviceorgPackage
