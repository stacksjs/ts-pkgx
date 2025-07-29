/**
 * **itstool.org** - Package from pantry: itstool.org
 *
 * @domain `itstool.org`
 *
 * @install `launchpad install itstool.org`
 * @dependencies `gnome.org/libxml2`, `python.org~3.11`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.itstoolorg
 * console.log(pkg.name)        // "itstool.org"
 * console.log(pkg.description) // "Package from pantry: itstool.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/itstool-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const itstoolorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'itstool.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'itstool.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: itstool.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install itstool.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +itstool.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install itstool.org' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnome.org/libxml2',
    'python.org~3.11',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/itstool.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ItstoolorgPackage = typeof itstoolorgPackage
