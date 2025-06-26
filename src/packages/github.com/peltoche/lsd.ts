/**
 * **lsd** - Package from pantry: github.com/peltoche/lsd
 *
 * @domain `github.com/peltoche/lsd`
 *
 * @install `launchpad install github.com/peltoche/lsd`
 * @dependencies `libgit2.org~1.7`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcompeltochelsd
 * console.log(pkg.name)        // "lsd"
 * console.log(pkg.description) // "Package from pantry: github.com/peltoche/lsd"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/peltoche/lsd.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcompeltochelsdPackage = {
  /**
   * The display name of this package.
   */
  name: 'lsd' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/peltoche/lsd' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/peltoche/lsd' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/peltoche/lsd' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/peltoche/lsd -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/peltoche/lsd' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'libgit2.org~1.7',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/peltoche/lsd/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcompeltochelsdPackage = typeof githubcompeltochelsdPackage
