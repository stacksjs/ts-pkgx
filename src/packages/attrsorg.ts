/**
 * **attrs.org** - Package from pantry: attrs.org
 *
 * @domain `attrs.org`
 *
 * @install `launchpad install attrs.org`
 * @dependencies `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.attrsorg
 * console.log(pkg.name)        // "attrs.org"
 * console.log(pkg.description) // "Package from pantry: attrs.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/attrs-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const attrsorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'attrs.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'attrs.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: attrs.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install attrs.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +attrs.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install attrs.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/attrs.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type AttrsorgPackage = typeof attrsorgPackage
