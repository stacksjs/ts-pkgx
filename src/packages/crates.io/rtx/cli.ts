/**
 * **crates.io/rtx-cli** - pkgx package
 *
 * @domain `crates.io/rtx/cli`
 *
 * @install `pkgx crates.io/rtx-cli`
 * @name `rtx-cli`
 * @aliases `crates.io/rtx-cli`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.cratesiortxcli
 * // Or access via domain
 * const samePkg = pantry.cratesiortxcli
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "rtx-cli"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/crates-io/rtx/cli.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cratesiortxcliPackage = {
  /**
   * The display name of this package.
   */
  name: 'rtx-cli' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'crates.io/rtx/cli' as const,
  /**
   * Brief description of what this package does.
   */
  description: '' as const,
  packageYmlUrl: '' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx crates.io/rtx-cli' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'crates.io/rtx-cli',
  ] as const,
  fullPath: 'crates.io/rtx-cli' as const,
}

export type CratesiortxcliPackage = typeof cratesiortxcliPackage
