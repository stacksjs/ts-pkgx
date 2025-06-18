/**
 * **pwgen.sourceforge.io** - Package from pantry: pwgen.sourceforge.io
 *
 * @domain `pwgen.sourceforge.io`
 *
 * @install `launchpad install pwgen.sourceforge.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pwgensourceforgeio
 * console.log(pkg.name)        // "pwgen.sourceforge.io"
 * console.log(pkg.description) // "Package from pantry: pwgen.sourceforge.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pwgen-sourceforge-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pwgensourceforgeioPackage = {
  /**
   * The display name of this package.
   */
  name: 'pwgen.sourceforge.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pwgen.sourceforge.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pwgen.sourceforge.io' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install pwgen.sourceforge.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pwgen.sourceforge.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PwgensourceforgeioPackage = typeof pwgensourceforgeioPackage
