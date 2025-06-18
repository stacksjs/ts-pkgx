/**
 * **faac** - Package from pantry: sourceforge.net/faac
 *
 * @domain `sourceforge.net/faac`
 *
 * @install `launchpad install sourceforge.net/faac`
 * @dependencies `gnu.org/autoconf`, `gnu.org/automake`, `gnu.org/libtool`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.sourceforgenetfaac
 * console.log(pkg.name)        // "faac"
 * console.log(pkg.description) // "Package from pantry: sourceforge.net/faac"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/sourceforge-net/faac.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const sourceforgenetfaacPackage = {
  /**
   * The display name of this package.
   */
  name: 'faac' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'sourceforge.net/faac' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: sourceforge.net/faac' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install sourceforge.net/faac' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/autoconf',
    'gnu.org/automake',
    'gnu.org/libtool',
    'gnu.org/gcc',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/sourceforge.net/faac/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type SourceforgenetfaacPackage = typeof sourceforgenetfaacPackage
