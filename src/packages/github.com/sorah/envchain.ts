/**
 * **envchain** - Package from pantry: github.com/sorah/envchain
 *
 * @domain `github.com/sorah/envchain`
 *
 * @install `launchpad install github.com/sorah/envchain`
 * @dependencies `gnu.org/readline`, `gnome.org/libsecret`, `freedesktop.org/pkg-config`, ... (+2 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.githubcomsorahenvchain
 * console.log(pkg.name)        // "envchain"
 * console.log(pkg.description) // "Package from pantry: github.com/sorah/envchain"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/github-com/sorah/envchain.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const githubcomsorahenvchainPackage = {
  /**
   * The display name of this package.
   */
  name: 'envchain' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'github.com/sorah/envchain' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: github.com/sorah/envchain' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install github.com/sorah/envchain' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'gnu.org/readline',
    'gnome.org/libsecret',
    'freedesktop.org/pkg-config',
    'llvm.org',
    'cmake.org^3',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/github.com/sorah/envchain/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GithubcomsorahenvchainPackage = typeof githubcomsorahenvchainPackage
