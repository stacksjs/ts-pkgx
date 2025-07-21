/**
 * **yazi** - Package from pantry: github.com/sxyazi/yazi
 *
 * @domain `github.com/sxyazi/yazi`
 *
 * @install `launchpad install github.com/sxyazi/yazi`
 * @dependencies `stedolan.github.io/jq`, `poppler.freedesktop.org`, `crates.io/fd-find`, ... (+3 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsxyaziyazi
 * console.log(pkg.name)        // "yazi"
 * console.log(pkg.description) // "Package from pantry: github.com/sxyazi/yazi"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sxyazi/yazi.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsxyaziyaziPackage = {
  /**
   * The display name of this package.
   */
  name: 'yazi' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sxyazi/yazi' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/sxyazi/yazi' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install github.com/sxyazi/yazi' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +github.com/sxyazi/yazi -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install github.com/sxyazi/yazi' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'stedolan.github.io/jq',
    'poppler.freedesktop.org',
    'crates.io/fd-find',
    'crates.io/ripgrep',
    'github.com/junegunn/fzf',
    'crates.io/zoxide',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sxyazi/yazi/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsxyaziyaziPackage = typeof githubcomsxyaziyaziPackage
