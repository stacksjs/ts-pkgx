/**
 * **libxcrypt** - Package from pantry: github.com/besser82/libxcrypt
 *
 * @domain `github.com/besser82/libxcrypt`
 *
 * @install `launchpad install github.com/besser82/libxcrypt`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcombesser82libxcrypt
 * console.log(pkg.name)        // "libxcrypt"
 * console.log(pkg.description) // "Package from pantry: github.com/besser82/libxcrypt"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/besser82/libxcrypt.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcombesser82libxcryptPackage = {
  /**
   * The display name of this package.
   */
  name: 'libxcrypt' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/besser82/libxcrypt' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/besser82/libxcrypt' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/besser82/libxcrypt' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/besser82/libxcrypt -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/besser82/libxcrypt' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/besser82/libxcrypt/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcombesser82libxcryptPackage = typeof githubcombesser82libxcryptPackage
