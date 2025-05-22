export const pcscliteapdufrPackage = {
  name: "pcsc-lite" as const,
  domain: "pcsclite.apdu.fr" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/pcsclite.apdu.fr/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) pcscd" as const,
  programs: [
    "pcscd",
  ] as const,
  companions: [] as const,
  dependencies: [
    "libusb.info^1",
    "linuxsystemd.io^254",
    "systemd.io^254",
  ] as const,
  versions: [
    "2.3.3",
    "2.3.2",
    "2.3.1",
    "2.3.0",
    "2.2.3",
    "2.2.2",
    "2.2.1",
    "2.2.0",
    "2.1.0",
    "2.0.3",
    "2.0.2",
    "2.0.1",
    "2.0.0",
  ] as const,
  fullPath: "pcsclite.apdu.fr" as const,
  aliases: [
    "pcsc-lite",
  ] as const,
}

export type PcscliteapdufrPackage = typeof pcscliteapdufrPackage
