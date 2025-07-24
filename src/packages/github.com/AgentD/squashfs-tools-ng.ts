/**
 * **squashfs-tools-ng** - Package from pantry: github.com/AgentD/squashfs-tools-ng
 *
 * @domain `github.com/AgentD/squashfs-tools-ng`
 *
 * @install `launchpad install github.com/AgentD/squashfs-tools-ng`
 * @dependencies `zlib.net^1`, `tukaani.org/xz^5`, `lz4.org^1`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomagentdsquashfstoolsng
 * console.log(pkg.name)        // "squashfs-tools-ng"
 * console.log(pkg.description) // "Package from pantry: github.com/AgentD/squashfs..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/AgentD/squashfs-tools-ng.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomagentdsquashfstoolsngPackage = {
  /**
   * The display name of this package.
   */
  name: 'squashfs-tools-ng' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/AgentD/squashfs-tools-ng' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/AgentD/squashfs-tools-ng' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/AgentD/squashfs-tools-ng' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/AgentD/squashfs-tools-ng -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/AgentD/squashfs-tools-ng' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'tukaani.org/xz^5',
    'lz4.org^1',
    'facebook.com/zstd^1',
    'oberhumer.com/lzo^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/AgentD/squashfs-tools-ng/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomagentdsquashfstoolsngPackage = typeof githubcomagentdsquashfstoolsngPackage
