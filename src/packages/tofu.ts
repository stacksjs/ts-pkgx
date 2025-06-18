/**
 * **tofu** - OpenTofu lets you declaratively manage your cloud infrastructure.
 *
 * @domain `opentofu.org`
 * @programs `tofu`
 * @version `1.9.1` (19 versions available)
 * @versions From newest version to oldest.
 * @see https://ts-pkgx.netlify.app/packages/opentofu-org.md
 *
 * @install `sh <(curl https://pkgx.sh) tofu`
 * @name `tofu`
 * @dependencies `linuxgnu.org/gcc/libstdcxx`, `gnu.org/gcc/libstdcxx`, `curl.se/ca-certs`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.tofu
 * // Or access via domain
 * const samePkg = pantry.opentofuorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "tofu"
 * console.log(pkg.description) // "OpenTofu lets you declaratively manage your clo..."
 * console.log(pkg.programs)    // ["tofu"]
 * console.log(pkg.versions[0]) // "1.9.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/opentofu-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const tofuPackage = {
  /**
   * The display name of this package.
   */
  name: 'tofu' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'opentofu.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'OpenTofu lets you declaratively manage your cloud infrastructure.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/opentofu.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) tofu' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'tofu',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'linuxgnu.org/gcc/libstdcxx',
    'gnu.org/gcc/libstdcxx',
    'curl.se/ca-certs',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.9.1',
    '1.9.0',
    '1.8.9',
    '1.8.8',
    '1.8.7',
    '1.8.6',
    '1.8.5',
    '1.8.4',
    '1.8.3',
    '1.8.2',
    '1.8.1',
    '1.8.0',
    '1.7.8',
    '1.7.7',
    '1.7.6',
    '1.7.5',
    '1.7.4',
    '1.7.3',
    '1.6.0.3',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'opentofu.org' as const,
}

export type TofuPackage = typeof tofuPackage
