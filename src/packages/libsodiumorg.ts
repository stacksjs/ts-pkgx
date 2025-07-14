/**
 * **libsodium.org** - Package from pantry: libsodium.org
 *
 * @domain `libsodium.org`
 *
 * @install `launchpad install libsodium.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.libsodiumorg
 * console.log(pkg.name)        // "libsodium.org"
 * console.log(pkg.description) // "Package from pantry: libsodium.org"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/libsodium-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const libsodiumorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'libsodium.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'libsodium.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: libsodium.org' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install libsodium.org' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +libsodium.org -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install libsodium.org' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/libsodium.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type LibsodiumorgPackage = typeof libsodiumorgPackage
