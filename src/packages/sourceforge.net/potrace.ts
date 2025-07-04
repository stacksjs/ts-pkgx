/**
 * **potrace** - Package from pantry: sourceforge.net/potrace
 *
 * @domain `sourceforge.net/potrace`
 *
 * @install `launchpad install sourceforge.net/potrace`
 * @dependencies `zlib.net^1`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetpotrace
 * console.log(pkg.name)        // "potrace"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/potrace"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/potrace.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetpotracePackage = {
  /**
   * The display name of this package.
   */
  name: 'potrace' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/potrace' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/potrace' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install sourceforge.net/potrace' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +sourceforge.net/potrace -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install sourceforge.net/potrace' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/potrace/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourceforgenetpotracePackage = typeof sourceforgenetpotracePackage
