/**
 * **libyaml** - Package from pantry: pyyaml.org/libyaml
 *
 * @domain `pyyaml.org/libyaml`
 *
 * @install `launchpad install pyyaml.org/libyaml`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pyyamlorglibyaml
 * console.log(pkg.name)        // "libyaml"
 * console.log(pkg.description) // "Package from pantry: pyyaml.org/libyaml"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pyyaml-org/libyaml.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyyamlorglibyamlPackage = {
  /**
   * The display name of this package.
   */
  name: 'libyaml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pyyaml.org/libyaml' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: pyyaml.org/libyaml' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install pyyaml.org/libyaml' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +pyyaml.org/libyaml -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install pyyaml.org/libyaml' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pyyaml.org/libyaml/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type PyyamlorglibyamlPackage = typeof pyyamlorglibyamlPackage
