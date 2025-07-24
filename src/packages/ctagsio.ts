/**
 * **ctags.io** - Package from pantry: ctags.io
 *
 * @domain `ctags.io`
 *
 * @install `launchpad install ctags.io`
 * @dependencies `digip.org/jansson^2`, `pyyaml.org/libyaml^0.2`, `pcre.org/v2^10`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.ctagsio
 * console.log(pkg.name)        // "ctags.io"
 * console.log(pkg.description) // "Package from pantry: ctags.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/ctags-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const ctagsioPackage = {
  /**
   * The display name of this package.
   */
  name: 'ctags.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'ctags.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: ctags.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install ctags.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +ctags.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install ctags.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'digip.org/jansson^2',
    'pyyaml.org/libyaml^0.2',
    'pcre.org/v2^10',
    'gnome.org/libxml2~2.13 # 2.14 changes the API',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/ctags.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CtagsioPackage = typeof ctagsioPackage
