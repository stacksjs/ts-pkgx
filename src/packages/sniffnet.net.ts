export const sniffnetnetPackage = {
  name: "sniffnet" as const,
  domain: "sniffnet.net" as const,
  description: "Cross-platform application to monitor your network traffic" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/sniffnet.net/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) sniffnet" as const,
  programs: [
    "sniffnet",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org@1",
    "tcpdump.org@1",
    "linuxalsa-project.org/alsa-lib@1freedesktop.org/fontconfig@2",
    "alsa-project.org/alsa-lib@1",
    "freedesktop.org/fontconfig@2",
  ] as const,
  versions: [
    "1.3.2",
    "1.3.1",
  ] as const,
  fullPath: "sniffnet.net" as const,
}

export type SniffnetnetPackage = typeof sniffnetnetPackage
