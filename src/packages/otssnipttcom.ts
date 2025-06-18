/**
 * **ots.sniptt.com** - Package from pantry: ots.sniptt.com
 *
 * @domain `ots.sniptt.com`
 *
 * @install `launchpad install ots.sniptt.com`
 * @dependencies `go.dev^1.19`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.otssnipttcom
 * console.log(pkg.name)        // "ots.sniptt.com"
 * console.log(pkg.description) // "Package from pantry: ots.sniptt.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ots-sniptt-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const otssnipttcomPackage = {
  /**
   * The display name of this package.
   */
  name: 'ots.sniptt.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ots.sniptt.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ots.sniptt.com' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install ots.sniptt.com' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'go.dev^1.19',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ots.sniptt.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OtssnipttcomPackage = typeof otssnipttcomPackage
