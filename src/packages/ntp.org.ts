export const ntporgPackage = {
  name: "ntp.org" as const,
  domain: "ntp.org" as const,
  description: "" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/ntp.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +ntp.org -- $SHELL -i" as const,
  programs: [
    "ntpq",
    "sntp",
    "ntp-keygen",
    "ntp-wait",
    "ntpd",
    "ntpdate",
    "ntpdc",
    "ntptime",
    "ntptrace",
    "update-leap",
  ] as const,
  companions: [] as const,
  dependencies: [
    "openssl.org^3",
  ] as const,
  versions: [
    "4.2.8.17",
  ] as const,
  fullPath: "ntp.org" as const,
}

export type NtporgPackage = typeof ntporgPackage
