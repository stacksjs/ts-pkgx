/**
 * **xshmfence** - Package from pantry: x.org/xshmfence
 *
 * @domain `x.org/xshmfence`
 *
 * @install `launchpad install x.org/xshmfence`
 * @dependencies `x.org/protocol`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.xorgxshmfence
 * console.log(pkg.name)        // "xshmfence"
 * console.log(pkg.description) // "Package from pantry: x.org/xshmfence"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/x-org/xshmfence.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const xorgxshmfencePackage = {
  /**
   * The display name of this package.
   */
  name: 'xshmfence' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'x.org/xshmfence' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: x.org/xshmfence' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install x.org/xshmfence' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +x.org/xshmfence -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install x.org/xshmfence' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'x.org/protocol',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/x.org/xshmfence/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type XorgxshmfencePackage = typeof xorgxshmfencePackage
