/**
 * **libyaml** - Canonical source repository for LibYAML
 *
 * @domain `pyyaml.org/libyaml`
 * @version `0.2.5` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install +pyyaml.org/libyaml -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pyyamlorglibyaml
 * console.log(pkg.name)        // "libyaml"
 * console.log(pkg.description) // "Canonical source repository for LibYAML"
 * console.log(pkg.versions[0]) // "0.2.5" (latest)
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
  description: 'Canonical source repository for LibYAML' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pyyaml.org/libyaml/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install +pyyaml.org/libyaml -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.5',
  ] as const,
  aliases: [] as const,
}

export type PyyamlorglibyamlPackage = typeof pyyamlorglibyamlPackage
