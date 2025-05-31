/**
 * **packer** - Packer is a tool for creating identical machine images for multiple platforms from a single source configuration.
 *
 * @domain `packer.io`
 * @programs `packer`
 * @version `1.12.0` (11 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/packer-io.md
 * @install `sh <(curl https://pkgx.sh) packer`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.packerio
 * console.log(pkg.name)        // "packer"
 * console.log(pkg.description) // "Packer is a tool for creating identical machine..."
 * console.log(pkg.programs)    // ["packer"]
 * console.log(pkg.versions[0]) // "1.12.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/packer-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const packerioPackage = {
  /**
   * The display name of this package.
   */
  name: 'packer' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'packer.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Packer is a tool for creating identical machine images for multiple platforms from a single source configuration.' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/packer.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) packer' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'packer',
  ] as const,
  companions: [] as const,
  dependencies: [] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.12.0',
    '1.11.2',
    '1.11.1',
    '1.11.0',
    '1.10.3',
    '1.10.2',
    '1.10.1',
    '1.9.5',
    '1.9.4',
    '1.9.3',
    '1.9.2',
  ] as const,
  fullPath: 'packer.io' as const,
  aliases: [] as const,
}

export type PackerioPackage = typeof packerioPackage
