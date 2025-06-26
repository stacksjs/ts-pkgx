/**
 * **libseccomp** - Package from pantry: github.com/seccomp/libseccomp
 *
 * @domain `github.com/seccomp/libseccomp`
 *
 * @install `launchpad install github.com/seccomp/libseccomp`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomseccomplibseccomp
 * console.log(pkg.name)        // "libseccomp"
 * console.log(pkg.description) // "Package from pantry: github.com/seccomp/libseccomp"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/seccomp/libseccomp.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomseccomplibseccompPackage = {
  /**
   * The display name of this package.
   */
  name: 'libseccomp' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/seccomp/libseccomp' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/seccomp/libseccomp' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/seccomp/libseccomp' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/seccomp/libseccomp -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/seccomp/libseccomp' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/seccomp/libseccomp/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomseccomplibseccompPackage = typeof githubcomseccomplibseccompPackage
