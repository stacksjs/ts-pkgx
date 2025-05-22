/**
 * Generated from pkgx.dev data
 */
export const openmpiorgPackage = {
  programs: [
    "mpic++",
    "mpiCC",
    "mpicc",
    "mpicxx",
    "mpiexec",
    "mpif77",
    "mpif90",
    "mpifort",
    "mpirun",
    "ompi_info",
    "opal_wrapper",
  ] as const,
  companions: [
    "gnu.org/gcc",
    "gnu.org/inetutils",
  ] as const,
  dependencies: [
    "open-mpi.org/hwloc",
    "openpmix.github.io",
    "libevent.org",
  ] as const,
  versions: [
    "5.0.7",
    "5.0.6",
    "5.0.5",
    "5.0.4",
    "5.0.3",
    "5.0.2",
    "5.0.1",
    "4.1.8",
    "4.1.7",
    "4.1.5",
  ] as const,
  name: "open/mpi.org" as const,
  domain: "open/mpi.org" as const,
  description: "Package information for open/mpi.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/open/mpi.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +open/mpi.org -- $SHELL -i" as const,
}

export type OpenmpiorgPackage = typeof openmpiorgPackage
