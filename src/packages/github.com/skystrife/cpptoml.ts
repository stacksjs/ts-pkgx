/**
 * **skystrife/cpptoml** - cpptoml is a header-only library for parsing TOML
 *
 * @domain `github.com/skystrife/cpptoml`
 * @version `0.1.1` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `sh <(curl https://pkgx.sh) +github.com/skystrife/cpptoml -- $SHELL -i`
 * @aliases `skystrife/cpptoml`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.skystrifecpptoml
 * // Or access via domain
 * const samePkg = pantry.githubcomskystrifecpptoml
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "github.com/skystrife/cpptoml"
 * console.log(pkg.description) // "cpptoml is a header-only library for parsing TOML"
 * console.log(pkg.versions[0]) // "0.1.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/skystrife/cpptoml.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const skystrifecpptomlPackage = {
  /**
   * The display name of this package.
   */
  name: 'github.com/skystrife/cpptoml' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/skystrife/cpptoml' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'cpptoml is a header-only library for parsing TOML' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/skystrife/cpptoml/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +github.com/skystrife/cpptoml -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.1.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'skystrife/cpptoml',
  ] as const,
  fullPath: 'github.com/skystrife/cpptoml' as const,
}

export type SkystrifecpptomlPackage = typeof skystrifecpptomlPackage
