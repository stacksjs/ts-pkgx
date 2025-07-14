/**
 * **vfkit** - Package from pantry: github.com/crc-org/vfkit
 *
 * @domain `github.com/crc-org/vfkit`
 *
 * @install `launchpad install github.com/crc-org/vfkit`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomcrcorgvfkit
 * console.log(pkg.name)        // "vfkit"
 * console.log(pkg.description) // "Package from pantry: github.com/crc-org/vfkit"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/crc-org/vfkit.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomcrcorgvfkitPackage = {
  /**
   * The display name of this package.
   */
  name: 'vfkit' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/crc-org/vfkit' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/crc-org/vfkit' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/crc-org/vfkit' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/crc-org/vfkit -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/crc-org/vfkit' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/crc-org/vfkit/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomcrcorgvfkitPackage = typeof githubcomcrcorgvfkitPackage
