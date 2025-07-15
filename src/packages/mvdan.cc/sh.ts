/**
 * **sh** - Package from pantry: mvdan.cc/sh
 *
 * @domain `mvdan.cc/sh`
 *
 * @install `launchpad install mvdan.cc/sh`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.mvdanccsh
 * console.log(pkg.name)        // "sh"
 * console.log(pkg.description) // "Package from pantry: mvdan.cc/sh"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/mvdan-cc/sh.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const mvdanccshPackage = {
  /**
   * The display name of this package.
   */
  name: 'sh' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'mvdan.cc/sh' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: mvdan.cc/sh' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install mvdan.cc/sh' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +mvdan.cc/sh -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install mvdan.cc/sh' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/mvdan.cc/sh/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type MvdanccshPackage = typeof mvdanccshPackage
