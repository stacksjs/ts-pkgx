/**
 * **cruft.github.io** - Package from pantry: cruft.github.io
 *
 * @domain `cruft.github.io`
 *
 * @install `launchpad install cruft.github.io`
 * @dependencies `python.org>=3.7<3.12`, `git-scm.org^2`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.cruftgithubio
 * console.log(pkg.name)        // "cruft.github.io"
 * console.log(pkg.description) // "Package from pantry: cruft.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/cruft-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const cruftgithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'cruft.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'cruft.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: cruft.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install cruft.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +cruft.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install cruft.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'python.org>=3.7<3.12',
    'git-scm.org^2',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/cruft.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type CruftgithubioPackage = typeof cruftgithubioPackage
