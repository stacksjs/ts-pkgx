/**
 * **kernel.org** - Go home.
 *
 * @domain `kernel.org`
 *
 * @install `pkgx kernel.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kernelorg
 * console.log(pkg.name)        // "kernel.org"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kernel-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kernelorgPackage = {
  /**
   * The display name of this package.
   */
  name: '' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Go home.' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/kernel.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kernel.org' as const,
  fullPath: 'kernel.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kernel.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KernelorgPackage = typeof kernelorgPackage
