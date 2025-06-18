/**
 * **kernel.org/linux-headers** - pkgx package
 *
 * @domain `kernel.org/linux/headers`
 *
 * @install `pkgx kernel.org/linux-headers`
 * @name `linux-headers`
 * @aliases `kernel.org/linux-headers`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.kernelorglinuxheaders
 * // Or access via domain
 * const samePkg = pantry.kernelorglinuxheaders
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "linux-headers"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kernel-org/linux/headers.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kernelorglinuxheadersPackage = {
  /**
   * The display name of this package.
   */
  name: 'linux-headers' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kernel.org/linux/headers' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kernel.org/linux-headers' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'kernel.org/linux-headers',
  ] as const,
  fullPath: 'kernel.org/linux-headers' as const,
}

export type KernelorglinuxheadersPackage = typeof kernelorglinuxheadersPackage
