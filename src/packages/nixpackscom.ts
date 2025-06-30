/**
 * **nixpacks.com** - Package from pantry: nixpacks.com
 *
 * @domain `nixpacks.com`
 *
 * @install `launchpad install nixpacks.com`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.nixpackscom
 * console.log(pkg.name)        // "nixpacks.com"
 * console.log(pkg.description) // "Package from pantry: nixpacks.com"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/nixpacks-com.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const nixpackscomPackage = {
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
  description: 'Package from pantry: nixpacks.com' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install nixpacks.com' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +nixpacks.com -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install nixpacks.com' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/nixpacks.com/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type NixpackscomPackage = typeof nixpackscomPackage
