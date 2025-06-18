/**
 * **protobuf.dev** - Package from pantry: protobuf.dev
 *
 * @domain `protobuf.dev`
 *
 * @install `launchpad install protobuf.dev`
 * @dependencies `zlib.net^1`, `abseil.io`, `cmake.org^3`, ... (+1 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * const pkg = pantry.protobufdev
 * console.log(pkg.name)        // "protobuf.dev"
 * console.log(pkg.description) // "Package from pantry: protobuf.dev"
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/protobuf-dev.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const protobufdevPackage = {
  /**
   * The display name of this package.
   */
  name: 'protobuf.dev' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'protobuf.dev' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'Package from pantry: protobuf.dev' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'launchpad install protobuf.dev' as const,
  programs: [] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'zlib.net^1',
    'abseil.io',
    'cmake.org^3',
    'abseil.io^20250127 # FIXME: how? it links to e.g. libabsl_bad_any_cast_impl.so.2308.0.0',
  ] as const,
  versions: [] as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/protobuf.dev/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: '' as const,
}

export type ProtobufdevPackage = typeof protobufdevPackage
