/**
 * **nixpacks** - App source + Nix packages + Docker = Image
 *
 * @domain `nixpacks.com`
 * @programs `nixpacks`
 * @version `1.39.0` (33 versions available)
 * @versions From newest version to oldest.
 *
 * @install `launchpad install nixpacks`
 * @aliases `nixpacks`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access via alias (recommended)
 * const pkg = pantry.nixpacks
 * // Or access via domain
 * const samePkg = pantry.nixpackscom
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "nixpacks.com"
 * console.log(pkg.description) // "App source + Nix packages + Docker = Image"
 * console.log(pkg.programs)    // ["nixpacks"]
 * console.log(pkg.versions[0]) // "1.39.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nixpacks-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nixpacksPackage = {
  /**
   * The display name of this package.
   */
  name: 'nixpacks.com' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'nixpacks.com' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'App source + Nix packages + Docker = Image' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nixpacks.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/railwayapp/nixpacks' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nixpacks' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'nixpacks',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.39.0',
    '1.38.0',
    '1.37.0',
    '1.36.0',
    '1.35.0',
    '1.34.1',
    '1.34.0',
    '1.33.0',
    '1.32.0',
    '1.31.0',
    '1.30.0',
    '1.29.1',
    '1.29.0',
    '1.28.1',
    '1.28.0',
    '1.27.1',
    '1.27.0',
    '1.26.1',
    '1.26.0',
    '1.25.0',
    '1.24.6',
    '1.24.5',
    '1.24.4',
    '1.24.3',
    '1.24.2',
    '1.24.1',
    '1.24.0',
    '1.23.0',
    '1.22.0',
    '1.21.3',
    '1.21.2',
    '1.21.1',
    '1.21.0',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [
    'nixpacks',
  ] as const,
}

export type NixpacksPackage = typeof nixpacksPackage
