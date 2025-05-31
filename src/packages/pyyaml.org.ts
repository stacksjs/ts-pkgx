/**
 * **pyyaml.org** - Canonical source repository for LibYAML
 *
 * @domain `pyyaml.org`
 * @version `0.2.5` (1 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/pyyaml-org.md
 * @install `sh <(curl https://pkgx.sh) +pyyaml.org -- $SHELL -i`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pyyamlorg
 * console.log(pkg.name)        // "pyyaml.org"
 * console.log(pkg.description) // "Canonical source repository for LibYAML"
 * console.log(pkg.versions[0]) // "0.2.5" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pyyaml-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pyyamlorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pyyaml.org' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pyyaml.org' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Canonical source repository for LibYAML' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/pyyaml.org/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +pyyaml.org -- $SHELL -i' as const,
  programs: [] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '0.2.5',
  ] as const,
  fullPath: 'pyyaml.org' as const,
  aliases: [] as const,
}

export type PyyamlorgPackage = typeof pyyamlorgPackage
