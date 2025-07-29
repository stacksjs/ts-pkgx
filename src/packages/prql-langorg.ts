/**
 * **prql-lang.org** - Package from pantry: prql-lang.org
 *
 * @domain `prql-lang.org`
 *
 * @install `launchpad install prql-lang.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.prqllangorg
 * console.log(pkg.name)        // "prql-lang.org"
 * console.log(pkg.description) // "Package from pantry: prql-lang.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/prql-lang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const prqllangorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'prql-lang.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'prql-lang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: prql-lang.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install prql-lang.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +prql-lang.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install prql-lang.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/prql-lang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PrqllangorgPackage = typeof prqllangorgPackage
