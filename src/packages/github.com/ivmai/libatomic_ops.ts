/**
 * **libatomic_ops** - Package from pantry: github.com/ivmai/libatomic_ops
 *
 * @domain `github.com/ivmai/libatomic_ops`
 *
 * @install `launchpad install github.com/ivmai/libatomic_ops`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomivmailibatomic_ops
 * console.log(pkg.name)        // "libatomic_ops"
 * console.log(pkg.description) // "Package from pantry: github.com/ivmai/libatomic..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/ivmai/libatomic_ops.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomivmailibatomic_opsPackage = {
  /**
   * The display name of this package.
   */
  name: 'libatomic_ops' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/ivmai/libatomic_ops' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/ivmai/libatomic_ops' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/ivmai/libatomic_ops' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/ivmai/libatomic_ops -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/ivmai/libatomic_ops' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/ivmai/libatomic_ops/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type Githubcomivmailibatomic_opsPackage = typeof githubcomivmailibatomic_opsPackage
