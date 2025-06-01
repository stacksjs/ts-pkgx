/**
 * **pytest** - Crafters of fine Open Source products
 *
 * @domain `pytest.org`
 *
 * @install `pkgx pytest.org`
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.pytestorg
 * console.log(pkg.name)        // "pytest"
 * console.log(pkg.description) // "Crafters of fine Open Source products"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/pytest-org.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const pytestorgPackage = {
  /**
   * The display name of this package.
   */
  name: 'pytest' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Crafters of fine Open Source products' as const,
  versions: [] as const,
  programs: [] as const,
  homepage: 'https://pkgx.dev/pkgs/pytest.org/' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'pytest.org' as const,
  fullPath: 'pytest.org' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'pkgx pytest.org' as const,
  aliases: [] as const,
  dependencies: [] as const,
  companions: [] as const,
}

export type PytestorgPackage = typeof pytestorgPackage
