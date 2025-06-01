/**
 * **kernel.org-libcap** - Go home.
 *
 * @domain `kernel.org-libcap`
 *
 * @install `pkgx kernel.org-libcap`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.kernelorglibcap
 * console.log(pkg.name)        // "kernel.org-libcap"
 * console.log(pkg.description) // "Go home."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/kernel-org-libcap.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const kernelorglibcapPackage = {
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
  homepage: 'https://pkgx.dev/pkgs/kernel.org-libcap/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'kernel.org-libcap' as const,
  fullPath: 'kernel.org-libcap' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx kernel.org-libcap' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type KernelorglibcapPackage = typeof kernelorglibcapPackage
