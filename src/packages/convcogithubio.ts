/**
 * **convco.github.io** - Package from pantry: convco.github.io
 *
 * @domain `convco.github.io`
 *
 * @install `launchpad install convco.github.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.convcogithubio
 * console.log(pkg.name)        // "convco.github.io"
 * console.log(pkg.description) // "Package from pantry: convco.github.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/convco-github-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const convcogithubioPackage = {
  /**
   * The display name of this package.
   */
  name: 'convco.github.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'convco.github.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: convco.github.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install convco.github.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +convco.github.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install convco.github.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/convco.github.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ConvcogithubioPackage = typeof convcogithubioPackage
