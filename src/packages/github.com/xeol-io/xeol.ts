/**
 * **xeol** - A scanner for end-of-life (EOL) software and dependencies in container images, filesystems, and SBOMs
 *
 * @domain `github.com/xeol-io/xeol`
 * @programs `xeol`
 * @version `0.10.8` (21 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install xeol`
 * @name `xeol`
 * @dependencies `go.dev`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.xeol
 * // Or access via domain
 * const samePkg = pantry.githubcomxeolioxeol
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "xeol"
 * console.log(pkg.description) // "A scanner for end-of-life (EOL) software and de..."
 * console.log(pkg.programs)    // ["xeol"]
 * console.log(pkg.versions[0]) // "0.10.8" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/xeol-io/xeol.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xeolPackage = {
  /**
   * The display name of this package.
   */
  name: 'xeol' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/xeol-io/xeol' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'A scanner for end-of-life (EOL) software and dependencies in container images, filesystems, and SBOMs' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/xeol-io/xeol/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install xeol' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'xeol',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.10.8',
    '0.10.7',
    '0.10.6',
    '0.10.5',
    '0.10.4',
    '0.10.3',
    '0.10.2',
    '0.10.1',
    '0.10.0',
    '0.9.15',
    '0.9.14',
    '0.9.13',
    '0.9.12',
    '0.9.11',
    '0.9.10',
    '0.9.9',
    '0.9.8',
    '0.9.7',
    '0.9.6',
    '0.9.5',
    '0.9.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
}

export type XeolPackage = typeof xeolPackage
