/**
 * **yj** - CLI - Convert between YAML, TOML, JSON, and HCL. Preserves map order.
 *
 * @domain `github.com/sclevine/yj`
 * @programs `yj`
 * @version `5.1.0` (1 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install yj`
 * @name `yj`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.yj
 * // Or access via domain
 * const samePkg = pantry.githubcomsclevineyj
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "yj"
 * console.log(pkg.description) // "CLI - Convert between YAML, TOML, JSON, and HCL..."
 * console.log(pkg.programs)    // ["yj"]
 * console.log(pkg.versions[0]) // "5.1.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sclevine/yj.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const yjPackage = {
  /**
   * The display name of this package.
   */
  name: 'yj' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sclevine/yj' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'CLI - Convert between YAML, TOML, JSON, and HCL. Preserves map order.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sclevine/yj/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install yj' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'yj',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '5.1.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) yj -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install yj' as const,
}

export type YjPackage = typeof yjPackage
