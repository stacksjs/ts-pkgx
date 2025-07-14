/**
 * **gql** - Package from pantry: graphqleditor.com/gql
 *
 * @domain `graphqleditor.com/gql`
 *
 * @install `launchpad install graphqleditor.com/gql`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.graphqleditorcomgql
 * console.log(pkg.name)        // "gql"
 * console.log(pkg.description) // "Package from pantry: graphqleditor.com/gql"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/graphqleditor-com/gql.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const graphqleditorcomgqlPackage = {
  /**
   * The display name of this package.
   */
  name: 'gql' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'graphqleditor.com/gql' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: graphqleditor.com/gql' as const,
  /**
   * Command to install this package using launchpad.
   * @example launchpad install package-name
   */
  installCommand: 'launchpad install graphqleditor.com/gql' as const,
  pkgxInstallCommand: 'sh <(curl https://pkgx.sh) +graphqleditor.com/gql -- $SHELL -i' as const,
  launchpadInstallCommand: 'launchpad install graphqleditor.com/gql' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/graphqleditor.com/gql/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type GraphqleditorcomgqlPackage = typeof graphqleditorcomgqlPackage
