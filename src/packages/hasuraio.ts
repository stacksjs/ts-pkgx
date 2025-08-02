/**
 * **hasura.io** - Package from pantry: hasura.io
 *
 * @domain `hasura.io`
 *
 * @install `launchpad install hasura.io`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.hasuraio
 * console.log(pkg.name)        // "hasura.io"
 * console.log(pkg.description) // "Package from pantry: hasura.io"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/hasura-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const hasuraioPackage = {
  /**
   * The display name of this package.
   */
  name: 'hasura.io' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'hasura.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: hasura.io' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install hasura.io' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +hasura.io -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install hasura.io' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/hasura.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type HasuraioPackage = typeof hasuraioPackage
