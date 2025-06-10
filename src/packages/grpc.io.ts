/**
 * **grpc** - The C based gRPC (C++, Python, Ruby, Objective-C, PHP, C#)
 *
 * @domain `grpc.io`
 * @programs `grpc_csharp_plugin`, `grpc_node_plugin`, `grpc_cpp_plugin`, `grpc_python_plugin`, `grpc_objective_c_plugin`, ... (+3 more)
 * @version `1.73.0` (45 versions available)
 * @versions From newest version to oldest. @see https://ts-pkgx.netlify.app/packages/grpc-io.md
 *
 * @install `sh <(curl https://pkgx.sh) +grpc.io -- $SHELL -i`
 * @name `grpc`
 * @dependencies `abseil.io^20250127`, `c-ares.org`, `openssl.org^1.1`, ... (+5 more)
 *
 * @example
 * ```typescript
 * import { pantry } from 'ts-pkgx'
 *
 * // Access the package
 * const pkg = pantry.grpc
 * // Or access via domain
 * const samePkg = pantry.grpcio
 * console.log(pkg === samePkg) // true
 * console.log(pkg.name)        // "grpc"
 * console.log(pkg.description) // "The C based gRPC (C++, Python, Ruby, Objective-..."
 * console.log(pkg.programs)    // ["grpc_csharp_plugin", "grpc_node_plugin", ...]
 * console.log(pkg.versions[0]) // "1.73.0" (latest)
 * ```
 *
 * @see https://ts-pkgx.netlify.app/packages/grpc-io.md
 * @see https://ts-pkgx.netlify.app/usage
 */
export const grpcPackage = {
  /**
   * The display name of this package.
   */
  name: 'grpc' as const,
  /**
   * The canonical domain name for this package.
   */
  domain: 'grpc.io' as const,
  /**
   * Brief description of what this package does.
   */
  description: 'The C based gRPC (C++, Python, Ruby, Objective-C, PHP, C#)' as const,
  packageYmlUrl: 'https://github.com/pkgxdev/pantry/tree/main/projects/grpc.io/package.yml' as const,
  homepageUrl: '' as const,
  githubUrl: 'https://github.com/pkgxdev/pantry/' as const,
  /**
   * Command to install this package using pkgx.
   * @example sh <(curl https://pkgx.sh) +package-name
   */
  installCommand: 'sh <(curl https://pkgx.sh) +grpc.io -- $SHELL -i' as const,
  /**
   * Executable programs provided by this package.
   * These can be run after installation.
   */
  programs: [
    'grpc_csharp_plugin',
    'grpc_node_plugin',
    'grpc_cpp_plugin',
    'grpc_python_plugin',
    'grpc_objective_c_plugin',
    'grpc_ruby_plugin',
    'grpc_php_plugin',
    'grpc_cli',
  ] as const,
  companions: [] as const,
  /**
   * Required dependencies for this package.
   * These will be automatically installed.
   */
  dependencies: [
    'abseil.io^20250127',
    'c-ares.org',
    'openssl.org^1.1',
    'github.com/google/re2',
    'zlib.net',
    'linuxgnu.org/gcc/libstdcxxprotobuf.dev@30.0.0',
    'gnu.org/gcc/libstdcxx',
    'protobuf.dev@30.0.0',
  ] as const,
  /**
   * Available versions from newest to oldest.
   * @see https://ts-pkgx.netlify.app/usage for installation instructions
   */
  versions: [
    '1.73.0',
    '1.72.1',
    '1.72.0',
    '1.71.1',
    '1.71.0',
    '1.70.2',
    '1.70.1',
    '1.70.0',
    '1.69.0',
    '1.68.2',
    '1.68.1',
    '1.68.0',
    '1.67.1',
    '1.67.0',
    '1.66.2',
    '1.65.5',
    '1.65.4',
    '1.65.3',
    '1.65.2',
    '1.65.1',
    '1.65.0',
    '1.64.2',
    '1.64.1',
    '1.64.0',
    '1.63.1',
    '1.62.2',
    '1.62.1',
    '1.62.0',
    '1.61.2',
    '1.61.1',
    '1.61.0',
    '1.60.1',
    '1.60.0',
    '1.59.4',
    '1.59.3',
    '1.59.2',
    '1.59.1',
    '1.59.0',
    '1.58.2',
    '1.58.1',
    '1.58.0',
    '1.57.1',
    '1.56.4',
    '1.56.3',
    '1.55.4',
  ] as const,
  /**
   * Alternative names for this package.
   * You can use any of these names to access the package.
   */
  aliases: [] as const,
  fullPath: 'grpc.io' as const,
}

export type GrpcPackage = typeof grpcPackage
