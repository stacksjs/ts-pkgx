export const fftworgPackage = {
  name: 'fftw' as const,
  domain: 'fftw.org' as const,
  description: 'C routines to compute the Discrete Fourier Transform' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/fftw.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  installCommand: 'sh <(curl https://pkgx.sh) +fftw.org -- $SHELL -i' as const,
  programs: [
    'fftw-wisdom',
    'fftw-wisdom-to-conf',
    'fftwf-wisdom',
    'fftwl-wisdom',
  ] as const,
  companions: [] as const,
  dependencies: [
    'open-mpi.org',
  ] as const,
  versions: [
    '3.3.10',
  ] as const,
  fullPath: 'fftw.org' as const,
  aliases: [] as const,
}

export type FftworgPackage = typeof fftworgPackage
