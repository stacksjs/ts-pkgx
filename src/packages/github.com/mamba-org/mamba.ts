/**
 * **mamba** - The Fast Cross-Platform Package Manager
 *
 * @domain `github.com/mamba-org/mamba`
 * @programs `mamba`
 * @version `22.11.1.4` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install mamba`
 * @name `mamba`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.mamba
 * // Or access via domain
 * const samePkg = pantry.githubcommambaorgmamba
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "mamba"
 * console.log(pkg.description) // "The Fast Cross-Platform Package Manager"
 * console.log(pkg.programs)    // ["mamba"]
 * console.log(pkg.versions[0]) // "22.11.1.4" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/mamba-org/mamba.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mambaPackage = {
  /**
   * The display name of this package.
   */
  name: 'mamba' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/mamba-org/mamba' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The Fast Cross-Platform Package Manager' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/mamba-org/mamba/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mamba' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'mamba',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '22.11.1.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type MambaPackage = typeof mambaPackage
