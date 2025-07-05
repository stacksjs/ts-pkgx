/**
 * **zig** - General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.
 *
 * @domain `ziglang.org`
 * @programs `zig`
 * @version `0.14.1` (7 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install zig`
 * @name `zig`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.zig
 * // Or access via domain
 * const samePkg = pantry.ziglangorg
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "zig"
 * console.log(pkg.description) // "General-purpose programming language and toolch..."
 * console.log(pkg.programs)    // ["zig"]
 * console.log(pkg.versions[0]) // "0.14.1" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ziglang-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const zigPackage = {
  /**
   * The display name of this package.
   */
  name: 'zig' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ziglang.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'General-purpose programming language and toolchain for maintaining robust, optimal, and reusable software.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ziglang.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install zig' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'zig',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.14.1',
    '0.14.0',
    '0.13.0',
    '0.12.1',
    '0.12.0',
    '0.11.0',
    '0.10.1',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) zig -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install zig' as const,
}

export type ZigPackage = typeof zigPackage
