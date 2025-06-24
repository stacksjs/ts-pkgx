/**
 * **openbao** - Package from pantry: openbao.org/openbao
 *
 * @domain `openbao.org/openbao`
 *
 * @install `launchpad install openbao.org/openbao`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.openbaoorgopenbao
 * console.log(pkg.name)        // "openbao"
 * console.log(pkg.description) // "Package from pantry: openbao.org/openbao"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/openbao-org/openbao.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const openbaoorgopenbaoPackage = {
  /**
   * The display name of this package.
   */
  name: 'openbao' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'openbao.org/openbao' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: openbao.org/openbao' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install openbao.org/openbao' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +openbao.org/openbao -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install openbao.org/openbao' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/openbao.org/openbao/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type OpenbaoorgopenbaoPackage = typeof openbaoorgopenbaoPackage
