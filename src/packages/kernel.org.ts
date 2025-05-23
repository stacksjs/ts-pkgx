export const kernelorgPackage = {
  name: 'kernel.org' as const,
  domain: 'kernel.org' as const,
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  installCommand: 'pkgx kernel.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  fullPath: 'kernel.org' as const,
}

export type KernelorgPackage = typeof kernelorgPackage
