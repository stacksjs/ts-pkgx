/**
 * **phc-winner-argon2** - Package from pantry: github.com/P-H-C/phc-winner-argon2
 *
 * @domain `github.com/P-H-C/phc-winner-argon2`
 *
 * @install `launchpad install github.com/P-H-C/phc-winner-argon2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomphcphcwinnerargon2
 * console.log(pkg.name)        // "phc-winner-argon2"
 * console.log(pkg.description) // "Package from pantry: github.com/P-H-C/phc-winne..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/P-H-C/phc-winner-argon2.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomphcphcwinnerargon2Package = {
  /**
   * The display name of this package.
   */
  name: 'phc-winner-argon2' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/P-H-C/phc-winner-argon2' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/P-H-C/phc-winner-argon2' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/P-H-C/phc-winner-argon2' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/P-H-C/phc-winner-argon2 -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/P-H-C/phc-winner-argon2' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/P-H-C/phc-winner-argon2/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomphcphcwinnerargon2Package = typeof githubcomphcphcwinnerargon2Package
