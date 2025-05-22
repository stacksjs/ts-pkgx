/**
 * Generated from pkgx.dev data
 */
export const limavmioPackage = {
  programs: [
    "apptainer.lima",
    "docker.lima",
    "kubectl.lima",
    "lima",
    "limactl",
    "nerdctl.lima",
    "podman.lima",
  ] as const,
  companions: [] as const,
  dependencies: [
    "qemu.org",
  ] as const,
  versions: [
    "1.1.1",
    "1.1.0",
    "1.0.7",
    "1.0.6",
    "1.0.5",
    "1.0.4",
    "1.0.3",
    "1.0.2",
    "1.0.1",
    "1.0.0",
    "0.23.2",
    "0.23.1",
    "0.23.0",
    "0.22.0",
    "0.21.0",
    "0.20.2",
    "0.20.1",
    "0.20.0",
    "0.19.1",
    "0.19.0",
    "0.18.0",
    "0.17.2",
    "0.17.1",
    "0.17.0",
    "0.16.0",
  ] as const,
  name: "lima/vm.io" as const,
  domain: "lima/vm.io" as const,
  description: "Package information for lima/vm.io" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/lima/vm.io/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +lima/vm.io -- $SHELL -i" as const,
}

export type LimavmioPackage = typeof limavmioPackage
