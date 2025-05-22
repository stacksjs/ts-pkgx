export const apptainerorgPackage = {
  name: "apptainer.org" as const,
  domain: "apptainer.org" as const,
  description: "Application container and unprivileged sandbox platform for Linux" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/apptainer.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +apptainer.org -- $SHELL -i" as const,
  programs: [
    "apptainer",
    "run-singularity",
    "singularity",
  ] as const,
  companions: [
    "github.com/plougher/squashfs-tools",
  ] as const,
  dependencies: [
    "github.com/seccomp/libseccomp@2",
    "curl.se/ca-certs",
  ] as const,
  versions: [
    "1.4.1",
    "1.4.0",
    "1.3.6",
    "1.3.5",
    "1.3.4",
    "1.3.3",
  ] as const,
  fullPath: "apptainer.org" as const,
}

export type ApptainerorgPackage = typeof apptainerorgPackage
