/**
 * **libyaml** - Canonical source repository for LibYAML
 *
 * @domain `pyyaml.org/libyaml`
 * @version `0.2.5` (1 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/pyyaml-org/libyaml.md
 *
 * @install `sh <(curl https://pkgx.sh) +pyyaml.org/libyaml -- $SHELL -i`
 * @aliases `libyaml`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.libyaml
 * // Or access via domain
 * const samePkg = pantry.pyyamlorglibyaml
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "pyyaml.org/libyaml"
 * console.log(pkg.description) // "Canonical source repository for LibYAML"
 * console.log(pkg.versions[0]) // "0.2.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pyyaml-org/libyaml.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libyamlPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyyaml.org/libyaml' as const,
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
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pyyaml.org/libyaml -- $SHELL -i' as const,
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
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'libyaml',
  ] as const,
  fullPath: 'pyyaml.org/libyaml' as const,
}

export type LibyamlPackage = typeof libyamlPackage
