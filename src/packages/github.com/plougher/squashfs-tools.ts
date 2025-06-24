/**
 * **squashfs-tools** - Package from pantry: github.com/plougher/squashfs-tools
 *
 * @domain `github.com/plougher/squashfs-tools`
 *
 * @install `launchpad install github.com/plougher/squashfs-tools`
 * @dependencies `lz4.org@1`, `oberhumer.com/lzo@2`, `tukaani.org/xz@5`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomploughersquashfstools
 * console.log(pkg.name)        // "squashfs-tools"
 * console.log(pkg.description) // "Package from pantry: github.com/plougher/squash..."
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/plougher/squashfs-tools.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomploughersquashfstoolsPackage = {
  /**
   * The display name of this package.
   */
  name: 'squashfs-tools' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/plougher/squashfs-tools' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/plougher/squashfs-tools' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/plougher/squashfs-tools' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/plougher/squashfs-tools -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/plougher/squashfs-tools' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'lz4.org@1',
    'oberhumer.com/lzo@2',
    'tukaani.org/xz@5',
    'facebook.com/zstd@1',
    'zlib.net@1',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/plougher/squashfs-tools/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomploughersquashfstoolsPackage = typeof githubcomploughersquashfstoolsPackage
