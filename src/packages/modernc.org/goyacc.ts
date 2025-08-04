/**
 * **goyacc** - Package from pantry: modernc.org/goyacc
 *
 * @domain `modernc.org/goyacc`
 *
 * @install `launchpad install modernc.org/goyacc`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.moderncorggoyacc
 * console.log(pkg.name)        // "goyacc"
 * console.log(pkg.description) // "Package from pantry: modernc.org/goyacc"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/modernc-org/goyacc.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const moderncorggoyaccPackage = {
  /**
   * The display name of this package.
   */
  name: 'goyacc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'modernc.org/goyacc' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: modernc.org/goyacc' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install modernc.org/goyacc' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +modernc.org/goyacc -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install modernc.org/goyacc' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/modernc.org/goyacc/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ModerncorggoyaccPackage = typeof moderncorggoyaccPackage
