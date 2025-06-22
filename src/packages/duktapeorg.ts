/**
 * **duktape.org** - Package from pantry: duktape.org
 *
 * @domain `duktape.org`
 *
 * @install `launchpad install duktape.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.duktapeorg
 * console.log(pkg.name)        // "duktape.org"
 * console.log(pkg.description) // "Package from pantry: duktape.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/duktape-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const duktapeorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'duktape.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'duktape.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: duktape.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install duktape.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +duktape.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install duktape.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/duktape.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type DuktapeorgPackage = typeof duktapeorgPackage
