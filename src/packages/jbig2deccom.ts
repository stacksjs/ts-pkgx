/**
 * **jbig2dec.com** - Package from pantry: jbig2dec.com
 *
 * @domain `jbig2dec.com`
 *
 * @install `launchpad install jbig2dec.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.jbig2deccom
 * console.log(pkg.name)        // "jbig2dec.com"
 * console.log(pkg.description) // "Package from pantry: jbig2dec.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/jbig2dec-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const jbig2deccomPackage = {
  /**
   * The display name of this package.
   */
  name: 'jbig2dec.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'jbig2dec.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: jbig2dec.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install jbig2dec.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +jbig2dec.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install jbig2dec.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/jbig2dec.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Jbig2deccomPackage = typeof jbig2deccomPackage
