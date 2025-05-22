/**
 * Generated from pkgx.dev data
 */
export const fftworgPackage = {
  programs: [
    "fftw-wisdom",
    "fftw-wisdom-to-conf",
    "fftwf-wisdom",
    "fftwl-wisdom",
  ] as const,
  companions: [] as const,
  dependencies: [
    "open-mpi.org",
  ] as const,
  versions: [
    "3.3.10",
  ] as const,
  name: "fftw.org" as const,
  domain: "fftw.org" as const,
  description: "Package information for fftw.org" as const,
  packageYmlUrl: "https://github.com/pkgxdev/pantry/tree/main/projects/fftw.org/package.yml" as const,
  homepageUrl: "" as const,
  githubUrl: "https://github.com/pkgxdev/pantry/" as const,
  installCommand: "sh <(curl https://pkgx.sh) +fftw.org -- $SHELL -i" as const,
}

export type FftworgPackage = typeof fftworgPackage
